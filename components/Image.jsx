import Image from "next/image";

export const ImgContainer = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const Img = ({ layout, src, alt, styles }) => {
  return (
    <Image
      layout={layout}
      src={src}
      alt={alt}
      loading="lazy"
      className={styles}
    />
  );
};

export default Img;
// object-cover rounded-lg rounded-b-none w-full
