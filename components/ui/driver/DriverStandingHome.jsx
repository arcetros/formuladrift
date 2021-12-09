import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'

export const DriverStandingHome = ({ drivers }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-2">
        {_.orderBy(drivers, 'points', 'desc')
          .slice(0, 1)
          .map((item, id) => (
            <Link href={`/drivers/${item.slug}`} passHref={true} key={id} className="min-h-[20px]">
              <a className="flex justify-between items-center ">
                <p className="text-2xl text-red-500 font-bold mr-3">{id + 1}</p>
                <div className="mr-auto h-[150px] w-[150px] relative">
                  <Image
                    className="relative object-scale-down"
                    layout="fill"
                    src={item.driver_img.url}
                    alt="test"
                  />
                </div>
                <div className="">
                  <div className="mt-1 ml-4">
                    <Image width="20" height="14" src={item.driver_country.url} alt="test" />
                    <span className="ml-2 text-normal">{item.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold ml-auto mr-1">{item.points}</span> pts
                  </div>
                </div>
              </a>
            </Link>
          ))}
        <hr />
        {_.orderBy(drivers, 'points', 'desc')
          .slice(1, 5)
          .map((item, id) => (
            <Link href={`/championship/drivers-team/driver/${item.slug}`} passHref={true} key={id}>
              <a className="flex justify-between h-16 items-center border-b border-gray-300">
                <div>{id + 2}</div>
                <div className="flex mr-auto pl-5">
                  <Image width="20" height="20" src={item.driver_country.url} alt="test" />
                  <p className="pl-2 text-sm">{item.name}</p>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">{item.points}</span> pts
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  )
}
