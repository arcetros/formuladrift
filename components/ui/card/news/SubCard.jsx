import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Skeleton } from "./Skeleton";

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
                <Skeleton sizes="w-[auto] h-[220px] lg:h-[249px]" />
              </div>
            );
          })}
    </>
  );
};
