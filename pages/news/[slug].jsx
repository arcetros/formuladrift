import Image from "next/image";
import { marked } from "marked";
import moment from "moment";
import { fetchAPI } from "../../lib/api";
import { Layout } from "../../components";

export default function Article({ posts, publishedDate }) {
  return (
    <Layout>
      <section className="relative">
        <div className="md:max-w-6xl md:px-4">
          {posts ? (
            <div className="relative -mt-4 h-56 lg:h-96">
              <Image
                layout="fill"
                src={posts.thumbnail.url}
                alt={posts.title}
                className="object-cover w-full"
              />
            </div>
          ) : (
            "Loading"
          )}
          <div className="mt-14 lg:mt-32 font-light w-full text-black text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              {posts.title}
            </h1>
            <p className="italic leading-relaxed my-6 text-gray-600">
              {publishedDate}
            </p>
          </div>
          <section className="mt-6 font-light leading-relaxed px-8 lg:px-16">
            <article
              className="prose md:prose-xl lg:prose-2xl "
              dangerouslySetInnerHTML={{ __html: marked(posts.content) }}
            />
          </section>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/posts");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await fetchAPI(`/posts?slug=${params.slug}`);
  const publishedDate = moment(posts.created_at).format("Do MMMM YYYY");

  return {
    props: { posts: posts[0], publishedDate },
    revalidate: 1,
  };
}
