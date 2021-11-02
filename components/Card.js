import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";

import Image from "./Image";
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
              <div className="flex flex-col items-stretch bg-white rounded-lg min-h-full shadow-xl pb-4 mt-4">
                <div className="flex-shrink-0 h-[192px] w-auto relative">
                  <Image
                    layout="fill"
                    src={url}
                    alt="title"
                    styles="object-cover rounded-lg rounded-b-none w-full"
                  />
                </div>

                <div className="flex-1 bg-white flex flex-col justify-between mx-4 pt-4">
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
                </div>
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
      {posts.map((item, id) => {
        return (
          <Link
            as={`/article/${item.slug}`}
            href="/article/[slug]"
            passHref={true}
            key={id}
          >
            <div className="relative flex items-stretch mb-3">
              <div className="flex-shrink-0 h-[68px] w-[82px] relative">
                <Image
                  layout="fill"
                  src={item.thumbnail.url}
                  alt={item.title}
                  styles="object-cover rounded-lg w-full"
                />
              </div>
              <div className="relative text-xs ml-4 w-full">
                <h1 className="overflow-ellipsis">
                  {strTrim(item.title, 60, " ", "...")}
                </h1>
                <div className="flex justify-between absolute bottom-0 text-[9px] w-full text-gray-400">
                  <div className="flex">
                    <CalendarIcon margin="mr-1" />
                    {moment(item.date).format("LL")}
                  </div>
                  <div className="flex">
                    <ClockIcon margin="mr-1" />
                    {item.duration}
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
      <div className="flex flex-col justify-between relative h-[22.563rem] w-[15.563rem] py-1 rounded-3xl bg-red-500 drop-shadow-xl">
        <div className="relative my-2 mx-4 w-[50px] h-[50px]">
          <Image
            layout="fill"
            src={country}
            alt={name}
            styles="rounded-full object-cover"
          />
        </div>
        <div className="absolute inset-0 text-center mx-auto text-[11rem] z-10 font-medium text-red-900">
          {number}
        </div>
        <div className="relative items-center flex mt-auto w-[15.500rem] h-[11.813rem]">
          <Image
            layout="fill"
            src={driverImg}
            alt={name}
            styles="object-cover z-20"
          />
        </div>
        <div className="relative space-y-1 p-2 mx-2 rounded-md my-5">
          <div className="flex justify-between">
            <div className="">
              <p className="text-gray-100 font-bold text-xl">{name}</p>
              <Typography size="sm" type="subWhite">
                {team}
              </Typography>
            </div>
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
              <Image
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
        <div className="flex">
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
