import { useState, useEffect, Fragment } from 'react'
import { Disclosure, Popover } from '@headlessui/react'
import Link from 'next/link'
import { HamburgerIcon, XIcon, FDLogo } from './ui/icon/icons'
import { paths, mobilePaths } from '../utils/navPaths'

export default function Header() {
    const [top, setTop] = useState(true)

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        }

        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header className={`fixed w-full bg-gray-800 z-30`}>
            <Disclosure as="nav" className={top && 'bg-gray-800'}>
                {({ open }) => (
                    <>
                        <div className="max-w-6xl px-4 md:px-2">
                            <div className="flex justify-between items-center">
                                <div className="h-20 flex items-center">
                                    <div className="flex-shrink-0 lg:hidden">
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 ">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon styles="text-white w-10 h-10" />
                                            ) : (
                                                <HamburgerIcon styles="text-white w-10 h-10" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                                <div className="px-5 hidden lg:flex justify-between items-center">
                                    <HamburgerIcon styles="text-white w-10 h-10" />
                                </div>
                                <div className="order-first md:order-none mr-auto cursor-pointer flex items-center">
                                    <Link as="/" href="/" passHref={true}>
                                        <div className="">
                                            <FDLogo />
                                        </div>
                                    </Link>
                                    <div className="hidden lg:flex z-40 items-center ml-2">
                                        <Link as="/news" href="/news" passHref={true}>
                                            <div className="px-3 py-7 font-bold text-md text-white group hover:bg-red-500 transition duration-150">
                                                NEWS
                                            </div>
                                        </Link>
                                        <Popover className="relative">
                                            <Popover.Button
                                                className={`px-3 py-7 font-bold text-md text-white group hover:bg-red-500 transition duration-150`}
                                            >
                                                CHAMPIONSHIP
                                            </Popover.Button>
                                            <Popover.Panel className="absolute z-10 w-screen top-[4.88rem] left-[-20.3rem] border-t-2 border-gray-700">
                                                {({ close }) => (
                                                    <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative flex gap-x-8 bg-gray-800 p-7">
                                                            {paths.map((item, id) => (
                                                                <Link
                                                                    href={item.path}
                                                                    passHref={true}
                                                                    className="z-10"
                                                                    key={id}
                                                                >
                                                                    <div
                                                                        onClick={async () =>
                                                                            close()
                                                                        }
                                                                        aria-hidden="true"
                                                                        className="z-0 min-w-[13rem] xl:max-w-[23rem] 2xl:max-w-[32rem] flex-shrink 2xl:flex-grow py-24"
                                                                    >
                                                                        <a className="">
                                                                            {item.name}
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </Popover.Panel>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile View */}
                        <Disclosure.Panel className="lg:hidden">
                            {({ close }) => (
                                <div className="pt-2">
                                    {mobilePaths.map((item, id) => (
                                        <Link
                                            href={item.path}
                                            passHref={true}
                                            className="z-10"
                                            key={id}
                                        >
                                            <div
                                                onClick={async () => close()}
                                                className="z-0 w-full bg-gray-700"
                                                aria-hidden="true"
                                            >
                                                <a className="text-white block px-3 py-3.5 text-sm font-semibold border-b border-gray-600">
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
    )
}
