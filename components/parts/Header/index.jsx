import useToggle from '../../../hooks/useToggle'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import NavMenu from './NavMenu'
import Icon from '../../ui/icon'
import SocialsIcon from './SocialsIcon'

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useToggle()
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
          <SocialsIcon />
        </div>
        <div className="relative text-white text-lg ">
          <div
            className="cursor-pointer pointer-events-auto"
            onClick={setIsShowMenu}
            aria-hidden={true}
          >
            <Icon type="HamburgerIcon" />
          </div>
          <div className="hidden lg:block absolute left-[5px] top-24 z-10">
            <div className="flex flex-col items-center gap-y-5">
              <SocialsIcon />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isShowMenu && (
            <div
              className="absolute inset-0 w-full h-screen z-40 pointer-events-auto"
              aria-hidden={true}
            >
              <div
                className="w-full h-screen"
                onClick={() => setIsShowMenu(false)}
                aria-hidden
              ></div>
              <NavMenu setIsShowMenu={setIsShowMenu} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
