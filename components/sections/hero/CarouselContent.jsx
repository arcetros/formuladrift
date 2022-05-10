import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import moment from 'moment'

const CarouselContent = ({ content }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full text-white md:min-h-0 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
      >
        <div className="flex flex-col gap-y-3 mx-4 md:mx-12 lg:mx-0 xl:mx-44">
          <p className="text-gray-200 text-sm md:text-base lg:text-xl italic font-secondary">
            News - {moment(content.published_at).format('LL')}
          </p>
          <h2 className="mb-3 w-full md:w-3/4 font-primary font-bold text-2xl md:text-xl lg:text-2xl xl:text-4xl">
            {content.title}
          </h2>
          <Link as={`/news/${content.slug}`} href="/news/[slug]" passHref={true} className="z-40">
            <a className="border border-white w-32 md:w-44 h-10 md:h-12 font-secondary font-normal text-white hover:bg-white hover:text-black transition ease-in-out duration-200 flex">
              <p className="text-xs md:text-base m-auto">READ MORE</p>
            </a>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CarouselContent
