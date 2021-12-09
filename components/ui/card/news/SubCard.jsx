import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { Skeleton } from './Skeleton'

export const SubCard = ({ posts }) => {
  const skeletonId = [0, 1, 2]

  return (
    <>
      {posts
        ? posts
            .slice(0, 4)
            .sort((a, b) => {
              let dateA = new Date(a.published_at)
              let dateB = new Date(b.published_at)
              return dateB - dateA
            })
            .map((item, id) => {
              return (
                <Link as={`/news/${item.slug}`} href="/news/[slug]" passHref={true} key={id}>
                  <a className="mb-4 md:container md:mr-3 last:mr-0 shadow-md transform transition duration-200 hover:scale-105">
                    <div className="relative flex flex-shrink-0 w-[auto] h-[220px] md:h-[230px]">
                      <Image
                        className="relative h-full w-full object-cover rounded"
                        layout="fill"
                        src={item.thumbnail.url}
                        alt={item.title}
                      />
                    </div>

                    <div className="px-4 my-4 relative">
                      <span className="text-sm font-bold text-gray-500">
                        {moment(item.published_at).format('dddd')}
                      </span>
                      <span className="mx-1 text-sm text-gray-400">|</span>
                      <span className="text-sm text-gray-400">
                        {moment(item.published_at).format('MMM Do YY')}
                      </span>

                      <p className="font-semibold text-sm text-gray-900 mt-1">{item.title}</p>
                    </div>
                  </a>
                </Link>
              )
            })
        : skeletonId.map((id) => {
            return (
              <div key={id} className="lg:container lg:mr-3 last:mr-0">
                <Skeleton sizes="w-[auto] h-[220px] lg:h-[249px]" />
              </div>
            )
          })}
    </>
  )
}
