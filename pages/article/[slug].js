import { useState, useEffect } from "react";
import { marked } from "marked";
import { useRouter } from "next/router";
import moment from "moment";
import { fetchAPI } from "../../lib/api";
import { Layout } from "../../components/Layout";
import Img from "../../components/Image";
import { BottomSheet } from "../../components/BottomSheet";
import { EmptyCard } from "../../components/Card";
import { ShareIcon, ReturnIcon, DownArrow } from "../../components/icons";

export default function Article({ posts, publishedDate }) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <Layout>
      <section className="relative">
        <div className="md:max-w-6xl md:px-4">
          {posts ? (
            <div className="relative -mt-4 h-56 lg:h-96">
              <Img
                layout="fill"
                src={posts.thumbnail.url}
                alt={posts.title}
                styles="object-cover w-full"
              />
            </div>
          ) : (
            <EmptyCard />
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
