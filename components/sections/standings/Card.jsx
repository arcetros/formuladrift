import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ item, id }) => {
  return (
    <div
      className={`relative flex grow flex-col items-center justify-between text-white font-secondary container ${
        id == 0 && 'order-2'
      } ${id == 1 && 'order-1 hidden lg:flex'} ${id == 2 && 'order-3 hidden lg:flex'}`}
    >
      <div className="relative items-center h-52 lg:h-[14rem] w-[20rem] mt-2">
        <Image
          layout="fill"
          src={item.driver_img.url}
          alt={item.driver_name}
          className="object-cover"
        />
        <span
          className={`absolute bottom-[-9px] h-1 w-full ${
            id == 0 && 'lg:bg-yellow-300 bg-opacity-0'
          } ${id == 1 && 'bg-gray-200'} ${id == 2 && 'bg-yellow-600'}`}
        ></span>
      </div>
      <div className="flex flex-col items-center mx-auto py-5 px-3 w-full">
        <div className="flex flex-wrap items-center group cursor-pointer">
          <Image height="14" width="20" alt="driver_country" src={item.driver_country.url} />
          <div className="font-primary uppercase font-bold text-base group-hover:text-gray-300 ml-2">
            <Link href={`/drivers/${item.slug}`} passHref={true} className="z-40">
              <a>{item.name}</a>
            </Link>
          </div>
        </div>
        <span className="font-secondary text-gray-300 mt-1">{item.points} pts</span>
      </div>
    </div>
  )
}
