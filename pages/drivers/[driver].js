import { useState } from "react";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { fetchAPI } from "../../lib/api";
import {
  SubLayout,
  DriverAccordion,
  Return,
  TitleIcon,
  Typography,
  Modal,
  Stats,
  Name,
  DriverImage,
} from "../../components";

export default function Driver({ driver }) {
  const router = useRouter();

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
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <SubLayout>
      <div className="container">
        <Return event={() => router.back()}>
          {/* title icon should be dynamic later on */}
          <TitleIcon>2021 PRO DRIVER</TitleIcon>
        </Return>
        <div className="lg:grid lg:grid-cols-10 lg:mt-12 lg:gap-y-28 lg:gap-x-10">
          <div className="lg:col-span-4">
            <DriverImage url={driver.driver_img.url} name={driver.name} />
          </div>
          <div className="lg:my-auto lg:col-span-6">
            <Name driver={driver} />
            <Stats driver={driver} event={open} />
          </div>
          <Typography type="primary" styles="mb-2 lg:text-5xl lg:col-span-3">
            About Driver
          </Typography>
          <div className="mb-4 lg:col-span-7">
            {accordionMenu.menu.map((item, id) => {
              return (
                <div className="mb-2" key={id}>
                  <DriverAccordion
                    i={id}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={item[0]}
                    content={item[1]}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {driver.video && (
          <div>
            <Typography type="primary" size="lg" styles="mb-2">
              Videos
            </Typography>
            <YouTube videoId={driver.video} opts={opts} />
          </div>
        )}
        {toggleModal && (
          <Modal handleClose={close} data={driver} driver={driver.slug} />
        )}
      </div>
    </SubLayout>
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
