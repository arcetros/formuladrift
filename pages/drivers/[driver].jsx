import { useState } from "react";
import { marked } from "marked";
import YouTube from "react-youtube";
import { fetchAPI } from "../../lib/api";
import {
  Layout,
  DriverAccordion,
  Return,
  TitleIcon,
  Typography,
  WinsModal,
  Stats,
  Name,
  DriverImage,
} from "../../components";

export default function Driver({ driver }) {
  const [toggle, setToggle] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const open = () => {
    setToggleModal(true);
  };

  const close = () => {
    setToggleModal(false);
  };

  let accordionMenu = {
    menu: [
      ["Biography", driver.biography],
      ["Name", driver.name],
    ],
  };
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <main
        className="pt-[5rem]
      md:mx-auto shadow-lg mb-8 pb-4"
      >
        <section className="md:grid md:grid-cols-10 md:gap-x-10 min-w-xl">
          <div className="lg:pt-12 col-span-10 bg-gray-900 lg:min-h-[23rem]">
            <div className="relative mb-4 md:mb-0">
              <div className="h-full w-3 bg-red-500 absolute"></div>
              <div className="flex px-4 py-3 bg-gray-800 w-full lg:w-[20%]">
                <span className="mx-auto text-white text-lg font-bold italic ">
                  2021 PRO DRIVERS
                </span>
              </div>
            </div>
            <div className="relative flex flex-col md:flex-row px-0 md:px-36">
              <DriverImage
                url={driver.driver_img.url}
                name={driver.name}
                number={driver.driver_number}
              />
              <Name driver={driver} />
            </div>
          </div>
          <div className="md:my-auto md:col-span-4 lg:col-span-6"></div>
          <div className="col-span-10 lg:mb-12">
            <Stats driver={driver} event={open} />
          </div>
          <div className="col-span-10 px-7 md:px-36">
            <Typography type="primary" size="xl">
              About Driver
            </Typography>
          </div>
          <section className="mb-4 md:col-span-10 lg:col-span-10 mt-6 font-light leading-relaxed px-8 md:px-36">
            <article
              className="prose prose-sm md:prose-lg lg:prose-xl mx-auto"
              dangerouslySetInnerHTML={{ __html: marked(driver.biography) }}
            />
          </section>
          {driver.video && (
            <div className="px-7 md:px-36 md:col-span-10 mb-2">
              <Typography type="primary" size="xl" styles="my-4">
                Videos
              </Typography>
              <YouTube
                videoId={driver.video}
                opts={opts}
                className="container lg:h-[620px]"
              />
            </div>
          )}
        </section>
      </main>

      {toggleModal && (
        <WinsModal handleClose={close} data={driver} driver={driver.slug} />
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const drivers = await fetchAPI("/drivers");

  return {
    paths: drivers.map((driver) => ({
      params: {
        driver: driver.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const drivers = await fetchAPI(`/drivers?slug=${params.driver}`);
  return {
    props: { driver: drivers[0] },
    revalidate: 1,
  };
}
