import { ImgContainer, Img } from "../../Image";

export const DriverImage = (props) => {
  const { url, name } = props;
  return (
    <ImgContainer className="relative h-[300px]  md:mb-6">
      <Img
        layout="fill"
        src={url}
        alt={name}
        styles="object-contain md:object-scale-down w-full lg:col-span-2"
      />
    </ImgContainer>
  );
};
