import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import _ from 'lodash'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { HomeLayout } from '../../Layout'

const NewsGrid = ({ article, col, imgHeight, border }) => {
  return (
    <div
      className={`relative ${col} ${
        border && 'border-0 lg:border-r'
      } border-gray-800 first:px-0 pr-0 lg:first:pr-5 px-0 lg:px-5`}
    >
      <Image
        className="relative w-full object-cover"
        height={imgHeight}
        width={1000}
        src={article.thumbnail.url}
        alt={article.title}
      />
      <div className="flex flex-col gap-y-2 text-white mt-4 font-primary whitespace break-words">
        <div className="flex items-center text-sm">
          <div className="border border-red-500 bg-red-500 px-1">Formula Drift</div>
          <div className="border border-red-500 px-1">
            {moment(article.published_at).format('L')}
          </div>
        </div>
        <p className="text-lg md:text-xl font-bold">{article.title}</p>
        <p className="text-sm md:text-base text-gray-300">
          {_.truncate(article.content, { length: 300, seperator: ' ' })}
        </p>
        <Link as={`/news/${article.slug}`} href="/news/[slug]" passHref={true}>
          <a className="uppercase text-white hover:underline">Read The Article</a>
        </Link>
      </div>
    </div>
  )
}

export const News = ({ posts }) => {
  console.log(posts)
  return (
    <HomeLayout>
      <h1 className="font-primary font-bold text-white text-xl lg:text-2xl mb-8 pb-4 border-b border-gray-800">
        Other News
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-0">
        <NewsGrid
          col="col-span-1 lg:col-span-6"
          article={posts[0]}
          border={true}
          imgHeight="700px"
        />
        <NewsGrid
          col="col-span-1 lg:col-span-3"
          article={posts[1]}
          border={true}
          imgHeight="550px"
        />
        <NewsGrid
          col="col-span-1 lg:col-span-3"
          article={posts[2]}
          border={false}
          imgHeight="550px"
        />
      </div>
      <Button>
        <span className="text-white group-hover:text-black">ALL ARTICLE &amp; VIDEOS</span>
        <span className="text-white group-hover:text-black">
          <Icon type="ChevronRight" />
        </span>
      </Button>
    </HomeLayout>
  )
}
