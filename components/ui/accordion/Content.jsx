import Link from 'next/link'
import { motion } from 'framer-motion'
import Icon from '../icon/'

export const Content = ({ content }) => {
    return (
        <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="container p-1 bg-gray-900"
            variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
            <div className="flex flex-wrap justify-between mx-5 px-1 text-white">
                {content.map((item) => {
                    return (
                        <Link href={item.url} passHref={true} key={item.id}>
                            <div className="flex flex-1 items-center gap-x-4 my-1.5">
                                <Icon type={item.icon && item.icon} />
                                <p className="capitalize">{item.icon}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </motion.section>
    )
}
