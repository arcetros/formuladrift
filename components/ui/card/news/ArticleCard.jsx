import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import moment from 'moment'
import { useMobile } from '/utils/hooks/'

export const ArticleCard = ({ posts, id }) => {
  const { isMobile } = useMobile()
  return (
    <div className="mb-14 flex flex-col md:flex-row items-center w-full border border-white container">
      <Link as={`/news/${posts.slug}`} href="/news/[slug]" passHref={true} key={id}>
        <a className="text-white mx-4 my-6 md:my-0 font-primary order-2 md:order-none">
          <h3 className="font-primary font-bold text-lg md:text-xl text-white">{posts.title}</h3>
          <p className="text-sm my-1">
            <span className="font-normal">{moment(posts.published_at).format('Do MMMM YYYY')}</span>
          </p>
          <p className="flex flex-wrap italic font-thin">
            {_.truncate(posts.content, { length: isMobile ? 70 : 150, seperator: /,? +/ })}
          </p>
          <p className="text-base my-2 underline hover:text-gray-800 transition-colors">
            Read more
          </p>
        </a>
      </Link>
      <div className="relative flex flex-shrink-0 w-full md:w-1/2 h-[220px] md:h-[340px] order-1 md:order-none">
        <Image
          className="relative h-full w-full object-cover"
          layout="fill"
          src={posts.thumbnail.url}
          alt={posts.title}
        />
      </div>
    </div>
  )
}
