import Image from "next/image";

export const DriverImage = (props) => {
  const { url, name } = props;
  return (
    <div className="relative h-[300px]  md:mb-6">
      <Image
        layout="fill"
        src={url}
        alt={name}
        className="object-contain md:object-scale-down w-full lg:col-span-2"
      />
    </div>
  );
};
