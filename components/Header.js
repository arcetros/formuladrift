import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import Icon from "./ui/icon/";
import { HamburgerIcon, XIcon, FDLogo } from "./ui/icon/icons";
import { paths } from "../utils/navPaths";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 ${
        !top && "bg-white bg-opacity-95 shadow-md"
      }`}
    >
      <Disclosure as="nav" className={top && "bg-white"}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-5 md:px-2">
              <div className="flex justify-between items-center">
                <div className="h-20 flex items-center">
                  <div className="flex-shrink-0 lg:hidden">
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? <XIcon /> : <HamburgerIcon />}
                    </Disclosure.Button>
                  </div>
                </div>
                <div className="order-first cursor-pointer flex items-center">
                  <Link as="/" href="/" passHref={true}>
                    <div>
                      <FDLogo />
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:flex z-40 items-center">
                  <div className="">
                    <Popover className="relative">
                      <Popover.Button className="px-3 py-2 rounded font-medium text-md text-gray-500 group">
                        Championship
                      </Popover.Button>
                      <Popover.Panel className="absolute z-10 w-screen px-4 max-w-xs -left-4">
                        {({ close }) => (
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 grid-cols-1">
                              {paths.map((item, id) => (
                                <Link
                                  href={item.path}
                                  passHref={true}
                                  className="z-10"
                                  key={id}
                                >
                                  <div
                                    onClick={async () => close()}
                                    className="z-0 w-full"
                                  >
                                    <a className="w-full">{item.name}</a>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Popover>
                  </div>
                  <div>
                    <a className="px-3 py-2 rounded font-medium text-md text-gray-500">
                      News
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <Disclosure.Panel className="lg:hidden">
              {({ close }) => (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {paths.map((item, id) => (
                    <Link
                      href={item.path}
                      passHref={true}
                      className="z-10"
                      key={id}
                    >
                      <div onClick={async () => close()} className="z-0 w-full">
                        <a className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
