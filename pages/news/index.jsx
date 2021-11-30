import { fetchAPI } from '../../lib/api'
import { Layout, ArticleCard } from '../../components'

export default function Index({ posts }) {
    return (
        <Layout>
            <section className="text-base sm:text-lg font-light leading-relaxed text-gray-600 px-7">
                {posts
                    .sort((a, b) => {
                        let dateA = new Date(a.published_at)
                        let dateB = new Date(b.published_at)
                        return dateB - dateA
                    })
                    .map((item, id) => {
                        return <ArticleCard key={id} posts={item} />
                    })}
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
