import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import _ from 'lodash'

const Card = (props) => {
  return (
    <Link href={`https://twitter.com/FormulaDrift/status/${props.data.id}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`
        ${props.col} ${props.borderLeft && 'border-0 lg:border-l border-gray-800 pl-0 lg:pl-12'} ${
          props.borderTop && 'border-0 lg:border-t border-gray-800'
        } flex flex-col justify-between gap-y-4 text-white font-primary py-8 pr-0 lg:pr-12 mx-0`}
      >
        <div className="flex items-center gap-x-4">
          <Image src="/twitterlogo.jpg" width={55} height={55} className="rounded-full" />
          <div className="flex flex-col">
            <span className="">Formula Drift</span>
            <span className="text-gray-400">@FormulaDrift</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-50 text-sm">
            {_.truncate(props.data.text, { length: 160, seperator: ' ' })}
          </p>
        </div>
        <span className="text-sm">{moment(props.data.created_at).format('llll')}</span>
      </a>
    </Link>
  )
}

export const Tweets = ({ data }) => {
  return (
    <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full flex mx-auto">
      <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-white font-primary font-bold text-xl lg:text-2xl">#FORMULADRIFT</h1>
          <div className="w-full">
            <ul className="relative flex gap-x-8 border-b border-gray-800 pb-4 mb-4 font-primary font-normal text-white text-lg md:text-lg">
              <li>INSTAGRAM</li>
              <li className="relative">
                <span className="text-red-500">TWITTER</span>
                <div className="absolute -bottom-4 w-full h-[2px] bg-red-500"></div>
                {/* Change this Soon into dynamic tabs*/}
              </li>
              <li>FACEBOOK</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <Card data={data[0]} col="col-span-1 lg:col-span-6" />
          <Card data={data[1]} borderLeft={true} col="col-span-1 lg:col-span-6" />
          <Card data={data[2]} borderTop={true} col="col-span-1 lg:col-span-6" />
          <Card data={data[3]} borderTop={true} borderLeft={true} col="col-span-1 lg:col-span-6" />
        </div>
      </div>
    </div>
  )
}
