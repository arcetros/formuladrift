import { fetchAPI } from '../../lib/api'
import { Layout, ArticleCard } from '../../components'
import Icon from '/components/ui/icon/'

export default function Index({ posts }) {
  return (
    <Layout>
      <section className="max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] mx-auto w-full text-base sm:text-lg font-light leading-relaxed text-gray-600 mt-32">
        <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44">
          <div className="mb-12">
            <div>
              <p className="font-primary font-bold text-6xl text-white">Featured</p>
              <p className="font-primary font-bold text-6xl text-white">News</p>
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row justify-between items-start mt-12">
              <div className="bg-gray-600 w-[100%] md:w-[95%] h-[26rem] "></div>
              <div className="flex items-center gap-2 flex-row md:flex-col justify-between w-[100%] md:w-[5%]">
                <span className="border border-white h-1 md:h-20 w-1/3 md:w-2"></span>
                <span className="border border-white h-1 md:h-20 w-1/3 md:w-2"></span>
                <span className="border border-white h-1 md:h-20 w-1/3 md:w-2"></span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-14">
              <h1 className="font-primary font-bold text-5xl text-white">News</h1>
              <div className="flex flex-col md:flex-row items-start lg:items-center justify-between mt-4">
                <div>
                  <ul className="flex gap-x-4 font-primary text-gray-500 font-bold">
                    <li>All</li>
                    <li>PRO</li>
                    <li>PROSPEC</li>
                    <li>FD JAP</li>
                  </ul>
                </div>
                <div className="flex items-center gap-x-2 mt-8 lg:mt-0">
                  <div className="border flex items-center border-white py-2 px-4 h-full">
                    <Icon type="SearchIcon" />
                  </div>
                  <div className="flex items-center border border-white py-2 px-6 gap-x-2">
                    <Icon type="MenuAlt1" />
                    <span className="font-primary text-white">ASC</span>
                  </div>
                </div>
              </div>
            </div>
            {posts
              .sort((a, b) => {
                let dateA = new Date(a.published_at)
                let dateB = new Date(b.published_at)
                return dateB - dateA
              })
              .map((item, id) => {
                return <ArticleCard key={id} posts={item} />
              })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await Promise.resolve(fetchAPI('/posts'))
  return {
    props: { posts },
    revalidate: 1,
  }
}
