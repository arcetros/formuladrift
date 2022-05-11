import moment from 'moment'
import _ from 'lodash'
import { fetchAPI } from '../lib/api'
import { Layout, Hero, Schedule, Standings, News, Tweets } from '../components'

export default function Home({ newPosts, currentSchedule, slicedTweets: tweets }) {
  return (
    <Layout>
      <div className="flex flex-col gap-y-8">
        <Hero posts={newPosts} />
        <News posts={newPosts} />
        <Standings />
        <Schedule currentSchedule={currentSchedule} />
        <Tweets data={tweets} />
        {/* <League /> */}
        <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full flex mx-auto my-12">
          <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44 w-full">
            <h1 className="font-primary font-bold text-white text-lg lg:text-2xl mb-8 pb-4 border-b border-gray-800">
              GET INVOLVED
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <div className="flex bg-gray-900 h-52">
                <div className="flex flex-col gap-y-1 font-primary mx-8 my-auto">
                  <p className="text-white font-bold">EVENTS</p>
                  <p className="text-gray-300 font-bold italic text-sm">
                    Find out where you can experience FD Events around the world
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 h-52">
                <div className="flex flex-col gap-y-1 font-primary mx-8 my-auto">
                  <p className="text-white font-bold">FAN GUIDE</p>
                  <p className="text-gray-300 font-bold italic text-sm">
                    Learn about how Formula Drift pointing system works and other
                  </p>
                </div>
              </div>
              <div className="flex bg-gray-900 h-52">
                <div className="flex flex-col gap-y-1 font-primary mx-8 my-auto">
                  <p className="text-white font-bold">SHOP</p>
                  <p className="text-gray-300 font-bold italic text-sm">
                    Cop the latest looks from our apparel collections and dig through our other
                    offerings
                  </p>
                </div>
              </div>
              <div className="flex bg-gray-900 h-52">
                <div className="flex flex-col gap-y-1 font-primary mx-8 my-auto">
                  <p className="text-white font-bold">NEWS LETTER</p>
                  <p className="text-gray-300 font-bold italic text-sm">
                    Sign up with your email to get the latest news in Formula Drift and updates !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Sponsors /> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [posts, schedules] = await Promise.all([fetchAPI('/posts'), fetchAPI('/schedules')])

  const tweetRes = await fetch(
    'https://api.twitter.com/2/tweets/search/recent?query=from%3AFormulaDrift&tweet.fields=created_at,entities',
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAFGGcAEAAAAAU5YR0F2CIo30AJD0OQCHgwGBxIo%3DeSLXrMx6ex4iBIn6nYFCENUaXceivSQvzDdABwPSFItdlZHwIo`,
      },
    }
  )
  const tweets = await tweetRes.json()
  const slicedTweets = tweets.data.slice(0, 4)

  const newPosts = _.orderBy(posts, ['id'], ['asc'])
  let date = new Date().toISOString()
  const dateFilter = schedules.filter((item) => item.started_at >= date)
  const newSchedule = dateFilter.sort((a, b) => new moment(a.started_at) - new moment(b.started_at))
  const currentSchedule = newSchedule[0]

  return {
    props: { newPosts, currentSchedule, slicedTweets },
  }
}
