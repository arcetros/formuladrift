import { useState } from "react";
import _ from "lodash";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  DriverListModal,
  DriverCard,
  DriverNavigation,
} from "../../components";

import { fetchAPI } from "../../lib/api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Index({ drivers }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paper, setPaper] = useState(false);

  const close = () => setPaper(false);
  const open = () => setPaper(true);

  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "10px",
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const sorted = _.orderBy(drivers, [(item) => item.name], ["asc"]);

  return (
    <>
      {paper && (
        <DriverListModal
          modalOpen={paper}
          handleClose={close}
          drivers={drivers}
        />
      )}
      <section className="relative">
        <div className="md:max-w-6xl mx-auto md:px-4 px-6">
          <div className="grid grid-cols-2 gap-y-7 gap-x-10 lg:grid-cols-10 pt-24 md:pt-24">
            <div className="col-span-2 lg:col-span-2 flex font-bold text-white max-h-56">
              <div className="flex flex-row rounded-lg lg:flex-col my-auto w-full text-base gap-y-2 gap-x-3 text-center lg:text-left">
                <span className="flex-1 rounded-xl p-2 lg:p-4 bg-red-500">
                  All
                </span>
                <span className="flex-1 rounded-xl p-2 lg:p-4 bg-red-500">
                  PRO
                </span>
                <span className="flex-1 rounded-xl p-2 lg:p-4 bg-red-500">
                  PROSPEC
                </span>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-8">
              <div className="flex flex-col lg:flex-row gap-x-3">
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
        {/* <Slider {...settings}>
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
        </Slider> */}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const drivers = await Promise.resolve(fetchAPI("/drivers"));

  return {
    props: { drivers },
    revalidate: 1,
  };
}
