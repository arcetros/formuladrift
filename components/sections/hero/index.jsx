import { useState, useEffect, useMemo } from 'react'
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

  const nextCarousel = () => {
    setTimeout(() => {
      setNumber((number) => number + 1)
    }, 300)
  }

  const prevCarousel = () => {
    setTimeout(() => {
      setNumber((number) => number + 1)
    }, 300)
  }

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
                className="relative flex lg:static min-h-[90vh] mx-auto md:min-h-screen w-full max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem]"
              >
                <div className="min-w-full flex flex-col mx-auto justify-between pt-2 my-16">
                  <div className="absolute inset-0 w-full">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeIn', duration: 0.3 }}
                        className="relative h-[90vh]"
                      >
                        <Image
                          layout="fill"
                          src={item.thumbnail.url}
                          alt={item.slug}
                          className="relative object-cover"
                        />
                        <div className="absolute flex bg-gradient-to-t from-[#111] -bottom-1 left-0 h-[200%] w-full">
                          <div
                            className="w-1/2 z-20 lg:hidden"
                            onClick={nextCarousel}
                            aria-hidden={true}
                          ></div>
                          <div
                            className="w-1/2 z-20 lg:hidden"
                            onClick={prevCarousel}
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
