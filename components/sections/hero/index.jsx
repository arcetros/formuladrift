import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navigation from './Navigation'
import CarouselContent from './CarouselContent'

export const Hero = ({ posts }) => {
  const [number, setNumber] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => setNumber((number) => number + 1), 10000)
    return () => {
      clearInterval(interval)
    }
  }, [number])

  useEffect(() => {
    if (number > 4) {
      setNumber(1)
    }
    if (number < 1) {
      setNumber(4)
    }
  }, [number])

  const handleClick = useCallback(async (direction) => {
    if (direction === 'next') {
      setTimeout(() => {
        setNumber((number) => number + 1)
      }, 300)
    } else if (direction === 'previous') {
      setTimeout(() => {
        setNumber((number) => number - 1)
      }, 300)
    } else {
      return
    }
  }, [])

  const updatedPost = useMemo(() => posts.slice(0, 4), [posts])

  return (
    <>
      {posts &&
        updatedPost.map((item, id) => {
          const currentId = id + 1
          if (currentId === number) {
            return (
              <div
                key={id}
                className="flex h-screen min-h-[576px] mx-auto w-full max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem]"
              >
                <div className="min-w-full flex flex-col mx-auto justify-between pt-2 my-16">
                  <div className="absolute inset-0 w-screen">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeIn', duration: 0.3 }}
                        className="relative h-screen min-h-[576px]"
                      >
                        <Image
                          layout="fill"
                          src={item.thumbnail.url}
                          alt={item.slug}
                          objectFit="cover"
                        />
                        <div className="absolute flex bg-gradient-to-b from-gray-900/10 to-[#111] bottom-0 left-0 h-screen lg:h-[140vh] min-h-[576px] w-full">
                          <div
                            className="w-1/2 z-20 lg:hidden"
                            onClick={() => handleClick('previous')}
                            aria-hidden={true}
                          ></div>
                          <div
                            className="w-1/2 z-20 lg:hidden"
                            onClick={() => handleClick('next')}
                            aria-hidden={true}
                          ></div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <Navigation posts={updatedPost} active={number} setActive={setNumber} />
                  <CarouselContent content={item} />
                </div>
              </div>
            )
          }
        })}
    </>
  )
}
