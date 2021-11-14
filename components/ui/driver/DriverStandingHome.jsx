import Image from "next/image";
import _ from "lodash";
export const DriverStandingHome = ({ drivers }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-2">
        {_.orderBy(drivers, "points", "desc")
          .slice(0, 1)
          .map((item, id) => (
            <div
              key={id}
              className="flex justify-between items-center min-h-[20px]"
            >
              <p className="text-2xl text-red-500 font-bold mr-3">{id + 1}</p>
              <div className="mr-auto h-[150px] w-[150px] relative">
                <Image
                  className="relative object-scale-down"
                  layout="fill"
                  src={item.driver_img.url}
                  alt="test"
                />
              </div>
              <div className="">
                <div className="mt-1 ml-4">
                  <Image
                    width="20"
                    height="14"
                    src={item.driver_country.url}
                    alt="test"
                  />
                  <span className="ml-2 text-normal">{item.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold ml-auto mr-1">
                    {item.points}
                  </span>{" "}
                  pts
                </div>
              </div>
            </div>
          ))}
        <hr />
        {_.orderBy(drivers, "points", "desc")
          .slice(1, 3)
          .map((item, id) => (
            <div key={id}>
              <div className="flex justify-between h-16 items-center">
                <div>{id + 2}</div>
                <div className="flex mr-auto pl-5">
                  <Image
                    width="20"
                    height="20"
                    src={item.driver_country.url}
                    alt="test"
                  />
                  <p className="pl-2 text-sm">{item.name}</p>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">{item.points}</span> pts
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};
