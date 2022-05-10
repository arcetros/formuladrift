import { useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import _ from 'lodash'

const Navigation = ({ posts, active, setActive }) => {
  const variants = {
    full: {
      width: '100%',
    },
    empty: {
      width: '0%',
    },
  }

  const controls = useAnimation()
  useEffect(() => {
    const animate = () => {
      controls.start('full')
      controls.start('empty')
      controls.start('full')
    }
    animate()
  }, [controls])
  return (
    <div className="flex mx-auto w-full">
      <div className="relative w-full mx-0 md:mx-8 lg:mx-0 xl:mx-44 ">
        <div className="relative flex">
          {posts.map((item, id) => {
            const currentId = id + 1
            const handleActive = () => {
              setTimeout(() => {
                setActive(currentId)
              }, 300)
            }
            return (
              <div
                className="relative mr-4 h-[8px] w-full border border-white z-20 hidden lg:block cursor-pointer hover:bg-gray-400"
                key={currentId}
                onClick={handleActive}
                aria-hidden={true}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    className={
                      active === currentId ? 'h-full bg-white w-[0%]' : 'h-full bg-none w-[0%]'
                    }
                    variants={variants}
                    animate={controls}
                    initial="full"
                    transition={{
                      ease: 'linear',
                      duration: 10,
                    }}
                  ></motion.div>
                </AnimatePresence>
                <div
                  className="pt-4 font-primary uppercase text-gray-100 font-bold text-sm"
                  aria-hidden={true}
                >
                  {_.truncate(item.title, { length: 35, seperator: ' ' })}
                </div>
              </div>
            )
          })}
          {/* Mobile View */}
          <div className="relative mx-4 h-[8px] w-full border border-white lg:hidden">
            <AnimatePresence initial={false}>
              <motion.div
                className="h-full bg-white w-[0%]"
                variants={variants}
                animate={controls}
                initial="full"
                transition={{
                  ease: 'linear',
                  duration: 10,
                }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
