import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isActiveLink } from '/utils/misc'

let leagues = [
  {
    name: 'PRO',
    href: '/championship/drivers-team/pro',
  },
  {
    name: 'PRO SPEC',
    href: '/championship/drivers-team/prospec',
  },
  {
    name: 'FD Japan',
    href: '/championship/drivers-team/fd-jp',
  },
]

export const Navigation = () => {
  const { asPath } = useRouter()
  return (
    <AnimateSharedLayout>
      <div className="flex w-full gap-y-2 gap-x-3 text-center border-b border-gray-300">
        {leagues.map(({ name, href }) => {
          return (
            <Link key={name} href={href}>
              <a className="relative uppercase font-bold text-black">
                {name}
                {isActiveLink(href, asPath) && (
                  <motion.div className="absolute bg-red-500 w-full h-1" animate />
                )}
              </a>
            </Link>
          )
        })}
      </div>
    </AnimateSharedLayout>
  )
}
