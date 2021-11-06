import Image from "next/image";
import {
  MainCard,
  SubCard,
  NewsLink,
  Typography,
  Seo,
  DriverStandingHome,
} from "../components";
import Calendar from "../components/ui/Calendar";
import { fetchAPI } from "../lib/api";

export default function Home({ posts, drivers }) {
  return (
    <>
      <section className="relative">
        <div className="md:max-w-6xl mx-auto md:px-4 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-10 gap-y-5 pt-16 md:pt-24 my-3">
            <div className="lg:col-span-7">
              <MainCard posts={posts} />
            </div>
            <div className="max-h-full lg:block lg:col-span-3 bg-gray-100 shadow-lg">
              <Calendar />
            </div>
            <div className="lg:col-span-7 lg:flex lg:justify-between">
              <SubCard posts={posts} />
            </div>
            <div className="bg-gray-100 flex flex-col lg:col-span-3">
              <DriverStandingHome drivers={drivers} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const [posts, drivers] = await Promise.all([
    fetchAPI("/posts"),
    fetchAPI("/drivers"),
  ]);

  return {
    props: { posts, drivers },
    revalidate: 1,
  };
}
