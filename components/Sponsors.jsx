import Image from "next/image";
import { Typography } from "./Typography";

let sponsors = [
  ["1", "Manufactures"],
  ["2", "Parts"],
  ["3", "Parts"],
  ["4", "Others"],
  ["5", "Manufactures"],
  ["6", "Tires"],
  ["7", "Tires"],
  ["8", "Tires"],
  ["9", "Parts"],
  ["10", "Others"],
  ["11", "Parts"],
  ["12", "Parts"],
];

const SponsorContainer = ({ title }) => {
  return (
    <div className="relative w-full bg-white flex flex-col md:flex-row rounded">
      <div className="bg-red-500 absolute h-full w-2 rounded-l"></div>
      <div className="flex items-center py-4 px-6 rounded-lg min-w-[15ch]">
        <Typography type="sub" size="sm">
          {title}
        </Typography>
      </div>
      <div className="bg-gray-200 w-full rounded-r min-w-[10ch]">
        <div className="flex flex-row flex-wrap items-center ml-2 lg:gap-x-2 md:mx-2 min-h-[10ch]">
          {sponsors
            .filter((item) => item[1] === title)
            .map((item, id) => {
              return (
                <div
                  className="relative items-center h-[85px] w-1/2 md:w-4/12 lg:w-[165px]"
                  key={id}
                >
                  <Image
                    src={`/sponsors/${item[0]}.png`}
                    layout="fill"
                    alt={item[0]}
                    className="object-cover w-full md:rounded"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export const Sponsors = () => {
  return (
    <section className="relative w-full bg-gray-800">
      <div className="max-w-6xl p-4 mx-auto">
        <div className="flex flex-col">
          <div className="mx-auto pb-12 pt-8">
            <Typography type="primarywhite" size="lg">
              Our Sponsors
            </Typography>
          </div>
          <div className="flex flex-col gap-y-1 mb-12">
            <SponsorContainer title="Manufactures" />
            <SponsorContainer title="Tires" />
            <SponsorContainer title="Others" />
            <SponsorContainer title="Parts" />
          </div>
        </div>
      </div>
    </section>
  );
};
