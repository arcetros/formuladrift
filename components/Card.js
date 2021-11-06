import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import _ from "lodash";

import Img from "./Image";
import { Typography } from "./Typography";
import { UserIcon, CalendarIcon, ClockIcon } from "./icons";
import { strTrim } from "../utils/misc";

export const MainCard = ({ posts }) => {
  const rowLen = posts.length;
  return (
    <>
      {posts.map((item, id) => {
        if (rowLen === id + 1) {
          const url = item.thumbnail.url;
          return (
            <Link
              as={`/article/${item.slug}`}
              href="/article/[slug]"
              passHref={true}
              key={id}
            >
              <div className="flex flex-col items-stretch bg-white min-h-full shadow-xl">
                <div className="flex-shrink-1 h-[192px] lg:h-[500px] w-auto relative">
                  <Img
                    layout="fill"
                    src={url}
                    alt="title"
                    styles="object-cover rounded-b-none w-full"
                  />
                  <div className="absolute bg-gradient-to-t from-gray-900 bottom-0 w-full">
                    <div className="px-6 text-gray-100 font-semibold p-4 lg:p-8">
                      <span className="rounded-md font-normal">
                        {moment(item.published_at).format("dddd") +
                          " | " +
                          moment(item.published_at).format("MMM Do YY")}
                      </span>
                      <p className="text-sm lg:text-xl mt-1">{item.title}</p>
                    </div>
                  </div>
                </div>

                {/* <div className="flex-1 bg-white flex flex-col justify-between mx-4 pt-4">
                  <div className="flex-1 mb-2">
                    <p className="font-medium text-gray-800 text-sm">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex justify-between my-2 text-xs">
                    <div className="flex items-center">
                      <UserIcon />
                      <p className="text-gray-400 ml-1.5">
                        {item.users[0].username}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        {moment(item.date).format("LL")}
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </Link>
          );
        }
      })}
    </>
  );
};

export const SubCard = ({ posts }) => {
  return (
    <>
      {posts
        .slice(0, 3)
        .sort((a, b) => {
          let dateA = new Date(a.published_at);
          let dateB = new Date(b.published_at);
          return dateB - dateA;
        })
        .map((item, id) => {
          return (
            <div key={id} className="shadow-lg lg:container lg:mr-3 last:mr-0">
              <div className="relative w-[auto] h-[220px] lg:h-[240px]">
                <Image
                  className="relative h-full w-full object-cover"
                  layout="fill"
                  src={item.thumbnail.url}
                  alt={item.title}
                />
              </div>

              <div className="px-6 py-4 relative">
                <span className="text-xs font-normal">
                  {moment(item.published_at).format("dddd") +
                    " | " +
                    moment(item.published_at).format("MMM Do YY")}
                </span>
                <p className="font-bold text-xs overflow-ellipsis text-gray-800">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export const EmptyCard = () => {
  return (
    <div className="relative h-[300px] animate-pulse bg-gray-300">{""}</div>
  );
};

export const DriverCard = ({
  name,
  number,
  country,
  driverImg,
  slug,
  team,
}) => {
  return (
    <Link as={`/drivers/${slug}`} href="/drivers/[driver]" passHref={true}>
      <div className="flex-1 bg-gray-100 rounded-md drop-shadow-sm cursor-pointer">
        <div className="p-4">
          <div className="flex items-center">
            <Image width="20" height="20" src={country} alt="test" />
            <span className="mx-7">{name}</span>
            <span className="ml-auto font-medium text-gray-300">{number}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const DriverListCard = ({ drivers }) => {
  return (
    <>
      {drivers.map((item, id) => {
        return (
          <div
            key={id}
            className="flex items-stretch bg-red-900 bg-opacity-40  text-gray-100 rounded-lg p-2"
          >
            <div className="relative mr-3 w-[25px] h-[25px]">
              <Img
                layout="fill"
                src={item.driver_country.url}
                alt={item.name}
              />
            </div>
            <div className="text-white">{item.name}</div>
            <div className="ml-auto text-gray-300 font-thin">
              {item.driver_number}
            </div>
          </div>
        );
      })}
    </>
  );
};

export const OverviewCard = ({ data }) => {
  const items = {
    item: [
      ["age", data.age],
      ["wins", data.wins],
      ["points", data.points],
    ],
  };
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-9 mb-5">
      {items.item.map((item, id) => {
        return (
          <div
            className="bg-red-500 h-[70px] w-[73px] rounded-lg flex flex-col justify-between font-bold"
            key={id}
          >
            <p className="text-red-800 text-sm mx-2">{item[0]}</p>
            <p className="text-white text-2xl mx-2">{item[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export const DriverBio = ({ children, driver }) => {
  return (
    <>
      <div className="mb-8">
        <Typography type="sub" size="sm">
          {driver.team_name}
        </Typography>
        <div className="flex flex-shrink-0 items-center">
          <Typography type="primary" size="xl">
            {driver.name}
          </Typography>
          <div className="flex items-center bg-red-500 text-gray-100 rounded-md px-3 ml-auto">
            {driver.driver_number}
          </div>
        </div>
      </div>
    </>
  );
};
