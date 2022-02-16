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
    <>
      {posts.slice(0, 4).map((item, id) => {
        const currentId = id + 1
        return (
          <div
            className="relative mr-4 h-[8px] w-full border border-white z-20 hidden lg:block cursor-pointer hover:bg-gray-300"
            key={currentId}
            onClick={() => setActive(currentId)}
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
              className="pt-4 font-primary uppercase text-white font-bold hover:text-gray-200 text-sm"
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
    </>
  )
}

export default Navigation
