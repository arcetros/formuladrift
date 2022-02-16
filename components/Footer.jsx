import Link from 'next/link'
import { Layout, HomeLayout } from '/components/'
import Icon from './ui/icon/'

let socials = [
  { name: 'instagram', href: 'https://www.instagram.com/arcetros/' },
  { name: 'facebook', href: 'https://www.facebook.com/arcetros' },
  { name: 'twitter', href: 'https://twitter.com/arcetros' },
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

const Footer = () => {
  return (
    <Layout>
      <footer className="my-16">
        <HomeLayout>
          <div className="flex flex-col md:flex-row justify-between relative border-b border-gray-300 lg:h-[13rem] pb-12 md:pb-16">
            <div className="flex-1 font-primary font-bold text-base md:text-lg text-white">
              <ul className="uppercase flex flex-col flex-wrap h-full justify-between gap-y-1 lg:gap-0 cursor-pointer">
                <li className="hover:text-gray-300">about formula drift</li>
                <li className="hover:text-gray-300">championship</li>
                <li className="hover:text-gray-300">news</li>
                <li className="hover:text-gray-300">partners</li>
                <li className="hover:text-gray-300">contact us</li>
              </ul>
            </div>
            <div className="flex-1 font-primary font-bold text-base md:text-lg text-white">
              <ul className="uppercase flex flex-col flex-wrap gap-y-1 lg:gap-0 cursor-pointer">
                <li className="hover:text-gray-300">terms of service</li>
                <li className="hover:text-gray-300">privacy policy</li>
              </ul>
            </div>
            <div className="flex-1 relative mt-12 md:mt-0">
              <div className="relative flex flex-col h-full justify-between font-primary">
                <h1 className="text-gray-200 font-bold text-base md:text-lg uppercase">
                  Formula Drift News
                </h1>
                <p className="italic text-gray-400 flex-wrap mt-1 text-sm md:text-base">
                  Dont miss a thing, stay up to date with the latest news from us.
                </p>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full bg-transparent border-b font-primary font-normal border-gray-600 mt-2 py-2 text-base md:text-base placeholder:italic focus:outline-none text-white "
                />
                <span className="absolute bottom-2 right-0 px-3 py-1 text-white group hover:bg-white">
                  <Icon type="RightArrow" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-4">
            <div className="font-primary text-base lg:text-lg text-gray-300 italic tracking-wide">
              2021 © Arcetros, All Rights Reserved
            </div>
            <div className="flex gap-5 mt-2 md:mt-0">
              {socials.map(({ name, href }) => {
                return <SocialsIcon key={name} name={name} href={href} />
              })}
            </div>
          </div>
        </HomeLayout>
      </footer>
    </Layout>
  )
}

export default Footer
