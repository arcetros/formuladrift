import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import Navigation from './Navigation'

export const Hero = ({ posts }) => {
  const [number, setNumber] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => setNumber((number) => number + 1), 10000)
    return () => {
      clearInterval(interval)
    }
  }, [number])

  useEffect(() => {
    if (number >= 5) {
      setNumber(1)
    }
    if (number < 1) {
      setNumber(4)
    }
  }, [number])

  return (
    <>
      {posts &&
        posts.map((item, id) => {
          const currentId = id + 1
          if (currentId === number) {
            const url = item.thumbnail.url
            return (
              <div
                key={id}
                className="relative flex lg:static min-h-[90vh] mx-auto md:min-h-screen w-full max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem]"
              >
                <div className="absolute inset-0 w-full">
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: 'easeIn', duration: 0.8 }}
                      className="relative h-[90vh] min-h-full md:h-[100vh]"
                    >
                      <Image layout="fill" src={url} alt={item.slug} className="object-cover" />
                      <div className="absolute flex bg-gradient-to-t from-[#111] -bottom-1 left-0 h-[130%] w-full">
                        <div
                          className="w-1/2 z-20 lg:hidden"
                          onClick={() => setNumber((number) => number - 1)}
                          aria-hidden={true}
                        ></div>
                        <div
                          className="w-1/2 z-20 lg:hidden"
                          onClick={() => setNumber((number) => number + 1)}
                          aria-hidden={true}
                        ></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="min-w-full flex flex-col mx-auto justify-between pt-2 mt-20 mb-12">
                  <div className="flex mx-auto w-full">
                    <div className="relative w-full mx-0 md:mx-8 lg:mx-0 xl:mx-44 ">
                      <div className="relative flex">
                        <Navigation posts={posts} active={number} setActive={setNumber} />
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    <motion.div
                      className="w-full text-white md:min-h-0 z-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: 'easeIn', duration: 0.8, delay: 0.4 }}
                    >
                      <div className="flex flex-col mx-auto mt-8">
                        <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44 ">
                          <p className="text-sm md:text-base lg:text-xl italic font-secondary">
                            News - {moment(item.published_at).format('LL')}
                          </p>
                          <h2 className="w-full md:w-3/4 font-primary font-bold text-lg md:text-xl lg:text-2xl xl:text-4xl mt-4">
                            {item.title}
                          </h2>
                          <Link
                            as={`/news/${item.slug}`}
                            href="/news/[slug]"
                            passHref={true}
                            key={id}
                            className="z-40"
                          >
                            <a className="border border-white w-32 md:w-44 h-10 md:h-12 mt-8 font-secondary font-normal text-white hover:bg-white hover:text-black transition ease-in-out duration-200 flex">
                              <p className="text-xs md:text-base m-auto">READ MORE</p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )
          }
        })}
    </>
  )
}
