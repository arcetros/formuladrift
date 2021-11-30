import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import moment from 'moment'

export const ArticleCard = ({ posts, id }) => {
    return (
        <div className="mb-14 flex flex-col md:flex-row w-full">
            <Link as={`/news/${posts.slug}`} href="/news/[slug]" passHref={true} key={id}>
                <a className="w-full text-gray-500 sm:w-1/2 lg:w-1/2 container">
                    <h3 className="text-2xl text-gray-600">{posts.title}</h3>
                    <p className="text-sm my-1">
                        <span>{moment(posts.published_at).format('Do MMMM YYYY')}</span>
                        <span> - </span>
                        <span>{posts.duration}</span>
                    </p>
                    <p>{_.truncate(posts.content, { length: 84, seperator: /,? +/ })}</p>
                    <p className="text-base my-2 underline hover:text-gray-800 transition-colors">
                        Read more
                    </p>
                </a>
            </Link>
            <div className="relative flex flex-shrink-0 w-full lg:w-1/2 h-[220px] md:h-[230px]">
                <Image
                    className="relative h-full w-full object-cover rounded"
                    layout="fill"
                    src={posts.thumbnail.url}
                    alt={posts.title}
                />
            </div>
        </div>
    )
}
