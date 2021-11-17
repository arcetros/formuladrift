import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import { fetchAPI } from "../lib/api";
import {
  MainCard,
  SubCard,
  Typography,
  Seo,
  DriverStandingHome,
  Layout,
  Calendar,
} from "../components";

export default function Home({ posts, drivers, schedules }) {
  let date = new Date().toISOString();
  const test = schedules.filter((item) => item.started_at >= date);
  const sortedArray = test.sort(
    (a, b) => new moment(a.started_at) - new moment(b.started_at)
  );
  return (
    <Layout>
      <section className="relative">
        <div className="md:max-w-6xl mx-auto md:px-4 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-x-14 gap-y-5 my-3">
            <div className="md:col-span-10 lg:col-span-7">
              <MainCard posts={posts} />
            </div>
            <div className="lg:block md:col-span-10 lg:col-span-3 ">
              <Calendar item={sortedArray[0]} />
            </div>
            <div className="md:col-span-10 lg:col-span-7">
              <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-x-12">
                <div className="col-span-1 md:col-span-2 my-4 mb-8">
                  <div className="flex justify-between items-center">
                    <Typography type="primary" size="lg">
                      Latest News
                    </Typography>
                    <div className="h-1 bg-gray-100 w-7/12 md:w-2/3"></div>
                  </div>
                </div>
                <SubCard posts={posts} />
              </div>
            </div>
            <div className="md:col-span-10 lg:col-span-3">
              <div className="my-4">
                <div className="flex justify-between items-center ">
                  <Typography type="primary" size="lg">
                    Standings
                  </Typography>
                  <div className="h-1 bg-gray-100 w-2/3 md:w-9/12 lg:w-4/12"></div>
                </div>
                <DriverStandingHome drivers={drivers} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const [posts, drivers, schedules] = await Promise.all([
    fetchAPI("/posts"),
    fetchAPI("/drivers"),
    fetchAPI("/schedules"),
  ]);

  return {
    props: { posts, drivers, schedules },
    revalidate: 1,
  };
}
