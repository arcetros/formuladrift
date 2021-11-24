import Image from "next/image";

export const DriverImage = (props) => {
  const { url, name, number } = props;
  return (
    <div className="relative lg:absolute lg:top-[-1.8rem] lg:right-0 h-[255px] min-w-[300px] lg:h-[370px] lg:min-w-[460px]">
      <Image
        layout="fill"
        src={url}
        alt={name}
        className="object-contain md:object-cover lg:col-span-2 z-20"
      />
    </div>
  );
};
