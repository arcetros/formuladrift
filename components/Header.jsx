import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Icon from '/components/ui/icon/'

let socials = [
  { name: 'instagram', href: 'https://www.instagram.com/formulad/' },
  { name: 'youtube', href: 'https://www.youtube.com/Formuladrift' },
  { name: 'facebook', href: 'https://www.facebook.com/FormulaDRIFT/?ref=ts' },
  { name: 'twitter', href: 'https://twitter.com/FormulaDrift' },
]

const SocialsIcon = ({ name, href }) => {
  return (
    <Link key={name} href={href} passHref={true}>
      <a target="_blank">
        <Icon type={name} />
      </a>
    </Link>
  )
}

const Item = ({ header, items }) => {
  const [toggle, setToggle] = useState(false)
  const toggleClass = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <li onClick={() => toggleClass()} aria-hidden={true}>
        {header}
      </li>
      {toggle && (
        <ul>
          {items.map((item, id) => {
            return (
              <li className="mx-2 text-gray-400 text-base my-1" key={id}>
                {item}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

const Menu = ({ setShowMenu }) => {
  return (
    <motion.div
      className="z-20 bg-[#111] w-96 absolute right-48 top-0 h-screen"
      animate={{ x: 192 }}
      transition={{ duration: 0.2, type: 'tween' }}
      initial={{ x: 500 }}
      exit={{ x: 700 }}
    >
      <div className="flex flex-col mx-6 h-full">
        <div className="relative justify-between flex items-center mt-4">
          <Icon type="FDLogo" />
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
              <li>News</li>
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
              <li>Partners</li>
              <li>Partners</li>
              <li>Partners</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mb-8">
          {socials.map(({ name, href }) => {
            return <SocialsIcon key={name} name={name} href={href} />
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full fixed top-0 z-50">
      <div className="max-w-[135rem] mx-auto flex justify-between py-6 px-8 md:px-16 items-center">
        <div className="bg-red-500 px-4 py-3.5">
          <Link href="/" className="">
            <a className="font-primary text-xl font-bold text-white">FD</a>
          </Link>
        </div>
        <div className="relative text-white text-lg">
          <div className="cursor-pointer" onClick={() => setShowMenu(true)} aria-hidden={true}>
            <Icon type="HamburgerIcon" />
          </div>
          <div className="hidden md:block absolute left-[5px] top-24 z-10">
            <div className="flex flex-col items-center gap-y-5">
              {socials.map(({ name, href }) => {
                return <SocialsIcon key={name} name={name} href={href} />
              })}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showMenu && (
            <div className="absolute inset-0 w-full h-screen z-10" aria-hidden={true}>
              <div className="w-full h-screen" onClick={() => setShowMenu(false)} aria-hidden></div>
              <Menu setShowMenu={setShowMenu} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
