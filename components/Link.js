import Link from "next/link";
import { Typography } from "./Typography";

export const NavLink = ({ link, page, className }) => {
  return (
    <Link href={link} passHref={true}>
      <Typography size="lg" type="mainLink">
        {page}
      </Typography>
    </Link>
    //text-lg text-white tracking-widest font-medium
  );
};

export const NewsLink = () => {
  const links = ["All", "Series", "Media", "Moments"];
  return (
    <div className="flex justify-between my-3">
      {links.map((item, id) => {
        return (
          <Typography key={id} type="subLink" size="sm">
            {item}
          </Typography>
        );
      })}
    </div>
  );
};
