import { MainCard, SubCard, NewsLink, Typography, Seo } from "../components";
import { fetchAPI } from "../lib/api";

export default function Home({ posts }) {
  return (
    <>
      {/*ini buat seo mufid plz remember hahah*/}
      <div className="my-3">
        <Typography type="primary" size="lg">
          Latest News
        </Typography>
        <MainCard posts={posts} />
      </div>
      <NewsLink />
      <SubCard posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await Promise.resolve(fetchAPI("/posts"));

  return {
    props: { posts },
    revalidate: 1,
  };
}
