import { useState } from "react";
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
    <Layout>
      <section className="md:grid md:grid-cols-10 lg:mt-12 md:gap-y-5 lg:gap-y-28 md:gap-x-10 md:px-12">
        <div className="md:col-span-6 lg:col-span-4">
          <DriverImage url={driver.driver_img.url} name={driver.name} />
        </div>
        <div className="md:my-auto md:col-span-4 lg:col-span-6">
          <Name driver={driver} />
          <Stats driver={driver} event={open} />
        </div>
        <Typography
          type="primary"
          size="xl"
          styles="md:col-span-10 lg:col-span-3"
        >
          About Driver
        </Typography>
        <div className="mb-4 md:col-span-10 lg:col-span-7">
          {accordionMenu.menu.map((item, id) => {
            return (
              <DriverAccordion
                key={id}
                expanded={expanded}
                setExpanded={setExpanded}
                title={item[0]}
                content={item[1]}
              />
            );
          })}
        </div>
        {driver.video && (
          <div className="md:col-span-10 mb-2">
            <Typography type="primary" size="lg">
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
      {toggleModal && (
        <WinsModal handleClose={close} data={driver} driver={driver.slug} />
      )}
    </Layout>
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
