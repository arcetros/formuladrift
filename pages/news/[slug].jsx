import Image from 'next/image'
import _ from 'lodash'
import { marked } from 'marked'
import moment from 'moment'
import { fetchAPI } from '../../lib/api'
import { Layout, Typography, SubCard } from '../../components'

export default function Article({ posts, otherPosts }) {
  const currentExcluded = _.shuffle(otherPosts).filter((item) => item.id != posts.id)
  const shuffleArray = currentExcluded.sort(() => 0.5 - Math.random()).slice(0, 2)
  return (
    <Layout>
      <div className="mx-8 lg:mx-0 text-white mt-32">
        <h1 className="font-primary font-bold text-4xl md:text-5xl lg:text-4xl mb-1">
          {posts.title}
        </h1>
        <div className="font-secondary leading-relaxed mb-6">
          <p className="font-bold">{moment(posts.created_at).format('LL')}</p>
        </div>
      </div>
      <div className="border border-white">
        {posts ? (
          <div className="relative h-56 lg:h-[25rem]">
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
        <div className="mt-14 font-light w-full text-black text-center"></div>
        <section className="mt-6 font-light leading-relaxed">
          <article
            className="prose md:prose-xl mx-auto text-white"
            dangerouslySetInnerHTML={{ __html: marked(posts.content) }}
          />
        </section>
      </div>
      <section className="relative">
        <div className="my-6 mx-4 lg:mx-0">
          <div className="relative flex items-center mb-6">
            <div className="w-2 h-full bg-red-500 absolute"></div>
            <Typography size="lg" type="primary" styles="ml-4">
              More News
            </Typography>
          </div>
          <div className="flex flex-col lg:flex-row">
            <SubCard posts={shuffleArray} />
          </div>
        </div>
      </section>
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
