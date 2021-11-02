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
      <Slider {...settings}>
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
      </Slider>
      <DriverNavigation
        currentDriver={activeSlide}
        setPaper={setPaper}
        totalDriver={drivers.length}
      />
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
