import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Icon from '/components/ui/icon/'

export default function Header() {
  let socials = [
    { name: 'instagram', href: 'https://www.instagram.com/formulad/' },
    { name: 'youtube', href: 'https://www.youtube.com/Formuladrift' },
    { name: 'facebook', href: 'https://www.facebook.com/FormulaDRIFT/?ref=ts' },
    { name: 'twitter', href: 'https://twitter.com/FormulaDrift' },
  ]

  const SocialsIcon = ({ name, href }) => {
    return (
      <Link key={name} href={href} passHref={true}>
        <a target="_blank" className="pointer-events-auto">
          <Icon type={name} />
        </a>
      </Link>
    )
  }

  const Item = ({ header, items, href }) => {
    const [toggle, setToggle] = useState(false)
    const toggleClass = () => {
      setToggle(!toggle)
    }
    return (
      <>
        <li onClick={() => toggleClass()} aria-hidden={true}>
          {href ? <Link href={href}>{header}</Link> : header}
        </li>
        {items &&
          toggle &&
          items.map((item, id) => {
            return (
              <ul key={id}>
                <li className="mx-2 text-gray-400 text-base">{item}</li>
              </ul>
            )
          })}
      </>
    )
  }

  const Menu = ({ setShowMenu }) => {
    return (
      <motion.div
        className="z-0 bg-[#111] w-full md:w-96 absolute right-48 top-0 h-screen"
        animate={{ x: 192 }}
        transition={{ duration: 0.2, type: 'tween' }}
        initial={{ x: 500 }}
        exit={{ x: 700 }}
      >
        <div className="flex flex-col mx-12 md:mx-6 h-full pointer-events-auto">
          <div className="relative justify-between flex items-center mt-4 ">
            <a href="/">
              <Icon type="FDLogo" />
            </a>
            <div
              className="text-white cursor-pointer"
              onClick={() => setShowMenu(false)}
              aria-hidden={true}
            >
              <Icon type="XIcon" />
            </div>
          </div>
          <div className="overflow-auto whitespace-nowrap mb-12 mt-4 scrollbar-thin scrollbar-thumb-gray-400">
            <div className="">
              <ul className="font-primary font-extrabold flex flex-col uppercase text-lg text-white gap-y-2">
                <Item
                  header="Championship"
                  items={['Drivers & Teams', 'PRO', 'PROSPEC', 'FD-JAPAN']}
                />
                <Item header="News" href="/news" />

                <li>Store</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-5 items-center mb-8">
            {socials.map(({ name, href }) => {
              return <SocialsIcon key={name} name={name} href={href} />
            })}
          </div>
        </div>
      </motion.div>
    )
  }

  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full fixed top-0 z-[99] pointer-events-none">
      <div className="min-w-full mx-auto flex justify-between py-2 lg:py-6 px-4 xl:px-16 items-center bg-gray-900 bg-opacity-95 lg:bg-none lg:bg-opacity-0 ">
        <div className="bg-red-500 px-0.5 py-0.5 lg:px-2 lg:py-2.5">
          <Link href="/" className="">
            <a className="font-primary text-base lg:text-xl font-bold text-white flex items-center pointer-events-auto">
              FD
            </a>
          </Link>
        </div>
        <div className="hidden md:flex lg:hidden items-center gap-x-5">
          {socials.map(({ name, href }) => {
            return <SocialsIcon key={name} name={name} href={href} />
          })}
        </div>
        <div className="relative text-white text-lg ">
          <div
            className="cursor-pointer pointer-events-auto"
            onClick={() => setShowMenu(true)}
            aria-hidden={true}
          >
            <Icon type="HamburgerIcon" />
          </div>
          <div className="hidden lg:block absolute left-[5px] top-24 z-10">
            <div className="flex flex-col items-center gap-y-5">
              {socials.map(({ name, href }) => {
                return <SocialsIcon key={name} name={name} href={href} />
              })}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showMenu && (
            <div
              className="absolute inset-0 w-full h-screen z-40 pointer-events-auto"
              aria-hidden={true}
            >
              <div className="w-full h-screen" onClick={() => setShowMenu(false)} aria-hidden></div>
              <Menu setShowMenu={setShowMenu} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
