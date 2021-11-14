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

  return (
    <Layout>
      <section className="relative min-h-[40rem]">
        <div className="md:px-4 px-6">
          <div className="grid grid-cols-2 gap-y-7 gap-x-10 lg:grid-cols-10">
            <div className="col-span-2 flex font-bold text-white max-h-28">
              <div className="flex flex-shrink-0 flex-row rounded-lg lg:flex-col my-auto w-full text-base gap-y-2 gap-x-3 text-center lg:text-left">
                <span
                  className="flex flex-1 justify-between rounded-xl p-2 lg:p-4 bg-red-500"
                  onClick={() => setCategory("")}
                >
                  <span>All</span>
                  <span className="text-red-800">{drivers.length}</span>
                </span>
                <span
                  className="flex-1 rounded-xl p-2 lg:p-4 bg-red-500"
                  onClick={() => setCategory("pro")}
                >
                  PRO
                </span>
                <span
                  className="flex-1 rounded-xl p-2 lg:p-4 bg-red-500"
                  onClick={() => setCategory("prospec")}
                >
                  PROSPEC
                </span>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-8 ">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {sorted.map((item, id) => {
                  return (
                    <DriverCard
                      key={id}
                      name={item.name}
                      team={item.team_name}
                      number={item.driver_number}
                      country={item.driver_country.url}
                      driverImg={item.driver_img.url}
                      slug={item.slug}
                    />
                  );
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
