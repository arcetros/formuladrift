import { useState } from "react";
import _ from "lodash";
import { useQuery, useQueryClient } from "react-query";
import {
  DriverListModal,
  DriverCard,
  DriverNavigation,
  Layout,
} from "../../components";

import { fetchAPI } from "../../lib/api";

const getDrivers = async (key) => {
  const category = key.queryKey[1].category;
  if (category) {
    const drivers = await Promise.resolve(
      fetchAPI(`/drivers?category=${category}`)
    );
    return drivers;
  }
  const drivers = await Promise.resolve(fetchAPI("/drivers"));
  return drivers;
};

export default function Index({ drivers }) {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [paper, setPaper] = useState(false);

  const { data, status } = useQuery(
    ["drivers", { category: category }],
    getDrivers,
    {
      initialData: drivers,
    }
  );

  const close = () => setPaper(false);
  const open = () => setPaper(true);

  const sorted = _.orderBy(data, [(item) => item.name], ["asc"]);

  const FilterDriver = ({ league }) => {
    return (
      <span
        className="flex flex-1 items-center justify-between rounded p-2 lg:p-4 bg-red-500"
        onClick={() => setCategory(league ? league : "")}
      >
        <span className="uppercase text-white text-xs md:text-base font-medium">
          {league ? league : "All"}
        </span>
        <span className="text-red-800">
          {league
            ? _.filter(drivers, { category: league }).length
            : drivers.length}
        </span>
      </span>
    );
  };

  return (
    <Layout>
      <section className="relative min-h-[40rem]">
        <div className="md:px-4 px-6">
          <div className="grid grid-cols-2 gap-y-7 gap-x-10 lg:grid-cols-10">
            <div className="col-span-2 flex max-h-28">
              <div className="flex flex-row lg:flex-col w-full gap-y-2 gap-x-3 text-center">
                <FilterDriver />
                <FilterDriver league="pro" />
                <FilterDriver league="prospec" />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-8 ">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {sorted.map((item, id) => {
                  return <DriverCard key={id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const drivers = await Promise.resolve(fetchAPI("/drivers"));

  return {
    props: { drivers },
    revalidate: 1,
  };
}
