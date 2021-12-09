import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { Skeleton } from './Skeleton'

export const MainCard = ({ posts }) => {
  const rowLen = posts.length

  return (
    <>
      {posts ? (
        posts.map((item, id) => {
          if (rowLen === id + 2) {
            const url = item.thumbnail.url
            return (
              <div key={id} className="flex flex-col items-stretch shadow-xl">
                <div className="min-h-screen">
                  <div className="">
                    <Image layout="fill" src={url} alt={item.slug} className="object-cover" />
                    <div className="absolute bg-gradient-to-t from-[#111] bottom-0 left-0 h-[130%] w-full"></div>
                  </div>
                  <div className="absolute left-0 bottom-10 md:bottom-20 w-full text-white px-4">
                    <div className="flex flex-col mx-auto max-w-[130rem]">
                      <div className="mx-4 md:mx-40">
                        <p className="text-xl italic font-secondary">
                          News - {moment(item.published_at).format('LL')}
                        </p>
                        <h2 className="w-full font-primary font-bold text-lg md:text-4xl mt-4">
                          {item.title}
                        </h2>
                        <Link
                          as={`/news/${item.slug}`}
                          href="/news/[slug]"
                          passHref={true}
                          key={id}
                        >
                          <a className="border border-white w-44 h-12 mt-8 font-primary text-white hover:bg-white hover:text-black transition ease-in-out duration-200 flex">
                            <p className="m-auto">READ MORE</p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })
      ) : (
        <Skeleton sizes="h-[192px] md:h-[500px]" />
      )}
    </>
  )
}
