import Link from 'next/link'
import { motion } from 'framer-motion'
import NavLink from './NavLink'
import SocialsIcon from './SocialsIcon'
import Icon from '../../ui/icon'

const Menu = ({ setIsShowMenu }) => {
  return (
    <motion.div
      className="z-0 bg-black w-full md:w-96 absolute right-48 top-0 h-screen px-4"
      animate={{ x: 192 }}
      transition={{ duration: 0.25, type: 'tween' }}
      initial={{ x: 500 }}
      exit={{ x: 700 }}
    >
      <div className="flex flex-col justify-between mx-6 h-full pointer-events-auto">
        <div className="relative justify-between flex items-center">
          <Link href="/">
            <a>
              <Icon type="FDLogo" />
            </a>
          </Link>
          <div
            className="text-white cursor-pointer"
            onClick={() => setIsShowMenu(false)}
            aria-hidden={true}
          >
            <Icon type="XIcon" />
          </div>
        </div>
        <div className="overflow-auto mb-auto scrollbar-thin scrollbar-thumb-gray-300 my-4">
          <div className="cursor-pointer my-8">
            <ul className="font-primary font-bold flex flex-col uppercase text-xl text-gray-100 gap-y-3">
              <NavLink title="Championship" items={['PRO', 'PROSPEC', 'FD-JAPAN']} />
              <NavLink title="Drivers" href="/drivers" />
              <NavLink title="News" href="/news" />
              <NavLink
                title="About"
                items={['ABOUT FORMULA DRIFT', 'CHAMPIONSHIP', 'CONTACT US']}
              />
              <NavLink title="Events" href="/news" />
              <NavLink title="Partners" href="/news" />
              <NavLink title="Press" href="/news" />
              <NavLink title="Shop" href="/news" />
              <NavLink title="Fan Guides" href="/news" />
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-x-5">
          <SocialsIcon />
        </div>
        <div className="flex my-8 font-primary font-extrabold text-sm cursor-pointer">
          <div className="flex gap-x-4 items-center text-gray-200">
            <div className="px-5 py-1.5 border border-white hover:bg-white hover:text-black transition ease-in-out duration-200">
              SIGN IN
            </div>
            <span>Or SIGN UP</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Menu
