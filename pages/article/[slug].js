import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout";
import Img from "../../components/Image";
import { BottomSheet } from "../../components/BottomSheet";
import { EmptyCard } from "../../components/Card";
import { ShareIcon, ReturnIcon, DownArrow } from "../../components/icons";

export default function Article({ posts }) {
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
    <>
      <div
        className="absolute z-20 px-8 py-8 text-gray-200"
        onClick={() => router.push("/")}
      >
        <ReturnIcon />
      </div>
      {posts ? (
        <div className="relative h-[286px]">
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
      <BottomSheet
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        posts={posts}
      />
    </>
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

  return {
    props: { posts: posts[0] },
    revalidate: 1,
  };
}
