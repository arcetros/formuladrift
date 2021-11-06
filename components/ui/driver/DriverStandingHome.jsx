import Image from "next/image";
import _ from "lodash";
export const DriverStandingHome = ({ drivers }) => {
  return (
    <>
      <div className="bg-red-500 w-full h-12">
        <p className="mt-3 ml-4 text-white font-bold">Championship Standings</p>
      </div>
      <div className="mt-6">
        {_.orderBy(drivers, "points", "desc")
          .slice(0, 1)
          .map((item, id) => (
            <div key={id} className="flex justify-between mx-4 items-center">
              <p className="text-2xl text-red-500 font-bold mx-3">{id + 1}</p>
              <div className="h-[150px] w-[150px] relative">
                <Image
                  className="relative object-cover"
                  layout="fill"
                  src={item.driver_img.url}
                  alt="test"
                />
              </div>
              <div className="ml-3 mx-3">
                {_.words(item.name).splice(0, 1)}
                <strong className="ml-1">{_.words(item.name).splice(1)}</strong>
                <div className="flex justify-between">
                  <Image
                    width="20"
                    height="20"
                    src={item.driver_country.url}
                    alt="test"
                  />
                  <span className="font-semibold ml-auto mr-1">
                    {item.points}
                  </span>{" "}
                  pts
                </div>
              </div>
            </div>
          ))}
        {_.orderBy(drivers, "points", "desc")
          .slice(1, 3)
          .map((item, id) => (
            <div key={id}>
              <hr />
              <div className="flex justify-between mx-7 h-16 items-center">
                <div>{id + 2}</div>
                <div className="flex mr-auto px-7">
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
    </>
  );
};
