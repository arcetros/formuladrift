import { motion } from 'framer-motion'

export const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <div className="bg-gray-900 flex flex-col overflow-hidden top-0">
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className="max-w-[100rem] mx-auto"
      >
        {children}
      </motion.main>
    </div>
  )
}
