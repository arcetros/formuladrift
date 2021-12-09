import Link from 'next/link'
import Image from 'next/image'

export const DriverCard = ({ data }) => {
  const url = data.driver_country.url
  return (
    <Link
      as={`/championship/drivers-team/driver/${data.slug}`}
      href="/championship/drivers-team/driver/[driver]"
      passHref={true}
    >
      <div className="flex-1 min-w-[26ch] md:min-w-[50ch] lg:min-w-[27ch] bg-gray-100 rounded-md drop-shadow-sm cursor-pointer">
        <div className="p-4">
          <div className="relative flex items-center">
            <Image width="20" height="20" src={url} alt={data.slug} />
            <span className="mx-7">{data.name}</span>
            <span className="ml-auto font-medium text-gray-300">{data.number}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
