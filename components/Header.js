import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { HamburgerIcon, SearchIcon, FDLogo } from "./icons";
import { NavLink } from "../components/Link";
import { Typography } from "./Typography";

import { dropIn } from "./animations";

export default function Header() {
  const [top, setTop] = useState(true);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  let paths = {
    name: [
      ["Home", "/"],
      ["Drivers", "/drivers"],
    ],
  };

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        !top && "bg-white bg-opacity-90 shadow-lg"
      }`}
    >
      <div className="mx-auto max-w-6xl px-2 flex justify-between items-center">
        <div className="h-20 flex items-center">
          <div className="flex-shrink-0 md:hidden">
            <button
              className="bg-red-100 p-1 rounded-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HamburgerIcon />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {paths.name.map((item, id) => {
                return (
                  <Typography type="mainLink" size="lg" key={id}>
                    <Link href={item[1]} passHref={true}>
                      <a>{item[0]}</a>
                    </Link>
                  </Typography>
                );
              })}
            </div>
          </div>
        </div>
        <Link as="/" href="/" passHref={true}>
          <div className="md:order-first cursor-pointer">
            <FDLogo />
          </div>
        </Link>
        <div>
          <SearchIcon />
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden z-50 bg-red-500 fixed top-0 left-0 w-full h-screen px-8 py-4 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex flex-col justify-between text-left my-auto space-y-5">
            {paths.name.map((item, id) => {
              return (
                <Typography type="mainLink" size="lg" key={id}>
                  <Link href={item[1]} passHref={true}>
                    <a>{item[0]}</a>
                  </Link>
                </Typography>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
}
