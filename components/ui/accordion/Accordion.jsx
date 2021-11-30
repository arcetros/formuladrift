import { motion } from 'framer-motion'
import Icon from '../icon/'

export const Accordion = (props) => {
    const { setExpanded, isOpen, i, title } = props
    return (
        <motion.header
            initial={false}
            onClick={() => setExpanded(isOpen ? false : i)}
            className=" font-medium bg-gray-800 flex justify-between px-7 py-4 lg:p-5"
        >
            <p className="flex items-center text-white">{title}</p>
            <div className="bg-coral-500 p-1 lg:p-2 rounded-full">
                <span className="text-white">
                    {isOpen ? <Icon type="NegIcon" /> : <Icon type="PlusIcon" />}
                </span>
            </div>
        </motion.header>
    )
}
