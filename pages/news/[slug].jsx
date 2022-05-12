import Image from 'next/image'
import _ from 'lodash'
import { marked } from 'marked'
import moment from 'moment'
import { fetchAPI } from '../../lib/api'
import { Layout, SubCard } from '../../components'

export default function Article({ posts, otherPosts }) {
  const currentExcluded = _.shuffle(otherPosts).filter((item) => item.id != posts.id)
  const shuffleArray = currentExcluded.sort(() => 0.5 - Math.random()).slice(0, 2)
  return (
    <Layout>
      <div className="relative max-w-[105rem] flex flex-col mx-auto w-full">
        <div className="mx-0 lg:mx-44">
          <div className="mx-4 md:mx-16 lg:mx-0 text-white mt-20">
            <h1 className="font-primary font-bold text-xl md:text-5xl lg:text-4xl mb-1">
              {posts.title}
            </h1>
            <div className="font-primary leading-relaxed mb-8">
              <p className="text-base md:text-lg font-light text-gray-500">
                {moment(posts.created_at).format('LL')}
              </p>
            </div>
            <div className="mb-6 flex items-center">
              <p className="font-primary font-bold">TAGS: </p>
              <div className="ml-1 px-1 bg-white text-gray-800 font-primary uppercase font-bold">
                News
              </div>
              <div className="ml-1 px-1 bg-white text-gray-800 font-primary uppercase font-bold">
                PRO
              </div>
            </div>
          </div>
          <div className="lg:border border-white">
            {posts ? (
              <div className="relative h-56 md:h-[25rem]">
                <Image
                  layout="fill"
                  src={posts.thumbnail.url}
                  alt={posts.title}
                  className="object-cover"
                />
              </div>
            ) : (
              'Loading'
            )}
            <section className="font-primary my-16 mx-4 md:mx-16 lg:mx-0 leading-relaxed">
              <article
                className="prose prose-white prose-md md:prose-lg lg:prose-xl mx-auto"
                dangerouslySetInnerHTML={{ __html: marked(posts.content) }}
              />
            </section>
          </div>
          <section className="flex flex-col gap-y-4 relative mt-16">
            <h1 className="font-primary font-bold text-xl md:text-2xl">Related Content</h1>
            <div className="flex flex-col lg:flex-row">
              <SubCard posts={shuffleArray} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI('/posts')

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await fetchAPI(`/posts?slug=${params.slug}`)
  const otherPosts = await fetchAPI('/posts')
  const publishedDate = moment(posts.created_at).format('ll')

  return {
    props: { posts: posts[0], publishedDate, otherPosts },
    revalidate: 1,
  }
}
