// import moment from 'moment'
import { fetchAPI } from '../lib/api'
import { MainCard, Layout } from '../components'

export default function Home({ posts }) {
  // let date = new Date().toISOString()
  // const test = schedules.filter((item) => item.started_at >= date)
  // const sortedArray = test.sort((a, b) => new moment(a.started_at) - new moment(b.started_at))
  return (
    <>
      <Layout>
        <div className="flex mx-auto">
          <MainCard posts={posts} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const [posts, drivers, schedules] = await Promise.all([
    fetchAPI('/posts'),
    fetchAPI('/drivers'),
    fetchAPI('/schedules'),
  ])

  return {
    props: { posts, drivers, schedules },
    revalidate: 1,
  }
}
