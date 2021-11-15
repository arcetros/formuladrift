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

const SkeletonCard = ({ children, sizes }) => {
  return (
    <div
      className={`flex flex-col items-stretch min-h-full shadow-xl ${sizes} bg-gray-200 animate-pulse`}
    >
      <div className="flex mt-auto h-28">
        <div className="flex flex-col my-auto px-6 gap-y-4 w-full">
          <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-2/3 bg-gray-300 h-6 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export const MainCard = ({ posts }) => {
  const rowLen = posts.length;
  return (
    <>
      {posts ? (
        posts.map((item, id) => {
          if (rowLen === id + 1) {
            const url = item.thumbnail.url;
            return (
              <Link
                as={`/news/${item.slug}`}
                href="/news/[slug]"
                passHref={true}
                key={id}
              >
                <div className="flex flex-col items-stretch min-h-full shadow-xl">
                  <div className="flex-shrink-1 h-[250px] md:h-[500px] w-auto relative">
                    <Img
                      layout="fill"
                      src={url}
                      alt="title"
                      styles="object-cover w-full rounded"
                    />
                    <div className="absolute bg-gradient-to-t from-gray-900 bottom-0 w-full rounded">
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
                </div>
              </Link>
            );
          }
        })
      ) : (
        <SkeletonCard sizes="h-[192px] md:h-[500px]" />
      )}
    </>
  );
};

export const SubCard = ({ posts }) => {
  const skeletonId = [0, 1, 2];
  return (
    <>
      {posts
        ? posts
            .slice(0, 4)
            .sort((a, b) => {
              let dateA = new Date(a.published_at);
              let dateB = new Date(b.published_at);
              return dateB - dateA;
            })
            .map((item, id) => {
              return (
                <Link
                  as={`/news/${item.slug}`}
                  href="/news/[slug]"
                  passHref={true}
                  key={id}
                >
                  <div className="mb-4 md:mb-0 md:container md:mr-3 last:mr-0">
                    <div className="relative flex flex-shrink-0 w-[auto] h-[220px] md:h-[230px]">
                      <Image
                        className="relative h-full w-full object-cover rounded"
                        layout="fill"
                        src={item.thumbnail.url}
                        alt={item.title}
                      />
                    </div>

                    <div className="pt-1 pb-4 relative">
                      <span className="text-sm font-extralight text-gray-500">
                        {moment(item.published_at).format("dddd") +
                          " | " +
                          moment(item.published_at).format("MMM Do YY")}
                      </span>
                      <p className="font-semibold text-sm text-gray-900">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
        : skeletonId.map((id) => {
            return (
              <div key={id} className="lg:container lg:mr-3 last:mr-0">
                <SkeletonCard
                  key={id}
                  sizes="w-[auto] h-[220px] lg:h-[249px]"
                />
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

export const DriverCard = ({ data }) => {
  const test = data.driver_country.url;
  return (
    <Link as={`/drivers/${data.slug}`} href="/drivers/[driver]" passHref={true}>
      <div className="flex-1 min-w-[26ch] md:min-w-[50ch] lg:min-w-[27ch] bg-gray-100 rounded-md drop-shadow-sm cursor-pointer">
        <div className="p-4">
          <div className="relative flex items-center">
            <Image width="20" height="20" src={test} alt="test" />
            <span className="mx-7">{data.name}</span>
            <span className="ml-auto font-medium text-gray-300">
              {data.number}
            </span>
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

export const ArticleCard = ({ posts, id }) => {
  return (
    <div className="mb-14 flex flex-col md:flex-row w-full">
      <Link
        as={`/news/${posts.slug}`}
        href="/news/[slug]"
        passHref={true}
        key={id}
      >
        <a className="w-full text-gray-500 sm:w-1/2 lg:w-1/2 container">
          <h3 className="text-2xl text-gray-600">{posts.title}</h3>
          <p className="text-sm my-1">
            <span>{moment(posts.published_at).format("Do MMMM YYYY")}</span>
            <span> - </span>
            <span>{posts.duration}</span>
          </p>
          <p>{_.truncate(posts.content, { length: 84, seperator: /,? +/ })}</p>
          <p className="text-base my-2 underline hover:text-gray-800 transition-colors">
            Read more
          </p>
        </a>
      </Link>
      <div className="relative flex flex-shrink-0 w-full lg:w-1/2 h-[220px] md:h-[230px]">
        <Image
          className="relative h-full w-full object-cover rounded"
          layout="fill"
          src={posts.thumbnail.url}
          alt={posts.title}
        />
      </div>
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
