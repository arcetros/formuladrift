import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Typography } from "../../../Typography";
import { Skeleton } from "./Skeleton";

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
                    <Image
                      layout="fill"
                      src={url}
                      alt={item.slug}
                      className="object-cover w-full rounded"
                    />
                    <div className="absolute bg-gradient-to-t from-gray-900 bottom-0 w-full rounded">
                      <div className="px-6 text-gray-100 font-semibold p-4 lg:p-8">
                        <span className="rounded-md font-normal">
                          {moment(item.published_at).format("dddd") +
                            " | " +
                            moment(item.published_at).format("MMM Do YY")}
                        </span>
                        <Typography type="primarywhite" size="sm">
                          {item.title}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })
      ) : (
        <Skeleton sizes="h-[192px] md:h-[500px]" />
      )}
    </>
  );
};
