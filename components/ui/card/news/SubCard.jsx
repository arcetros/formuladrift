import Link from 'next/link'
import moment from 'moment'
import Icon from '../../../ui/icon'
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
                  <a className="flex items-center justify-between bg-gray-900 font-primary text-white py-4 px-4 mb-4 md:container md:mr-3 last:mr-0 shadow-md transform transition duration-200 hover:scale-105">
                    <div className="relative">
                      <p className="font-semibold text-sm text-gray-50 mt-1">{item.title}</p>
                      <span className="text-sm text-gray-500">
                        {moment(item.published_at).format('l')}
                      </span>
                    </div>
                    <div>
                      <Icon type="ChevronRight" />
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
