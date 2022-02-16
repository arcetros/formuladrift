import { motion, AnimatePresence } from 'framer-motion'
import { listItem } from './'
import Icon from '/components/ui/icon/'

const ToggleButton = ({ isToggle, setIsToggle }) => {
  return (
    <motion.span
      className="block ml-0 lg:ml-8 text-white cursor-pointer"
      onClick={() => setIsToggle((e) => !e)}
      aria-hidden={true}
      animate={{
        rotate: isToggle ? -180 : 0,
      }}
    >
      <Icon type="ChevronDown" />
    </motion.span>
  )
}

const NavItem = ({ title, index, setCategory, setIsToggle }) => {
  const filter = () => {
    setCategory(title)
    setIsToggle((e) => !e)
  }
  return (
    <motion.div
      variants={listItem}
      key={index}
      className="font-bold flex-1 border border-white px-2 py-1 text-black bg-white font-primary uppercase cursor-pointer"
      exit={{ scale: 1, y: -30, opacity: 0 }}
      onClick={filter}
    >
      {title}
    </motion.div>
  )
}

const Navigation = ({ container, isToggle, setIsToggle, league, setCategory }) => {
  return (
    <motion.div
      initial="hidden"
      variants={container}
      animate={isToggle ? 'show' : 'hidden'}
      className={`relative lg:absolute w-full flex flex-col lg:flex-row gap-x-2 gap-y-2 mt-4`}
    >
      <AnimatePresence>
        {isToggle &&
          league.map((item, index) => {
            return (
              <NavItem
                title={item.title}
                key={index}
                index={index}
                setCategory={setCategory}
                setIsToggle={setIsToggle}
              />
            )
          })}
      </AnimatePresence>
    </motion.div>
  )
}

export { ToggleButton, NavItem, Navigation }
