import { useState } from "react";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { fetchAPI } from "../../lib/api";
import { ImgContainer, Img } from "../../components/Image";
import {
  SubLayout,
  EmptyCard,
  DriverBio,
  OverviewCard,
  DriverAccordion,
  Return,
  TitleIcon,
  Typography,
} from "../../components";

export default function Driver({ driver }) {
  const [toggle, setToggle] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
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
      autoplay: 1,
    },
  };
  return (
    <SubLayout>
      <Return event={() => router.back()}>
        <TitleIcon>2021 PRO DRIVER</TitleIcon>
      </Return>
      {driver ? (
        <ImgContainer className="relative h-[300px]">
          <Img
            layout="fill"
            src={driver.driver_img.url}
            alt={driver.name}
            styles="object-contain md:object-scale-down w-full"
          />
        </ImgContainer>
      ) : (
        <EmptyCard />
      )}
      <DriverBio driver={driver} />
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-lg font-bold text-red-500">{driver.age}</p>
          <p className="text-gray-400 -mt-1 text-sm">old</p>
        </div>
        <div className="h-auto border border-2-2 border-red-400"></div>
        <div className="text-center">
          <p className="text-lg font-bold text-red-500">{driver.wins}</p>
          <p className="text-gray-400 -mt-1 text-sm">wins</p>
        </div>
        <div className="h-auto border border-2-2 border-red-400"></div>
        <div className="text-right">
          <p className="text-lg font-bold text-red-500">{driver.points}</p>
          <p className="text-gray-400 -mt-1 text-sm">points</p>
        </div>
      </div>
      {/* <OverviewCard data={driver} /> */}
      <div className="mb-4">
        <h1 className="text-gray-800 text-xl font-bold">About Driver</h1>
        {accordionMenu.menu.map((item, id) => {
          return (
            <div key={id} className="my-3">
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
      {driver.video && (
        <div>
          <h1 className="font-bold mb-2 text-xl text-gray-800">Videos</h1>
          <YouTube videoId={driver.video} opts={opts} />
        </div>
      )}
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
