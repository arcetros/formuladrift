import { motion } from 'framer-motion'

export const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <div className="bg-[#111]">
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className="flex flex-col mx-auto overflow-hidden"
      >
        {children}
      </motion.main>
    </div>
  )
}

export const HomeLayout = ({ children }) => {
  return (
    <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] mx-auto">
      <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44">{children}</div>
    </div>
  )
}
