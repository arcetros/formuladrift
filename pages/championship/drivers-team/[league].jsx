import React from 'react'
import _ from 'lodash'
import { fetchAPI } from '/lib/api'
import { Layout, Navigation, DriverCard } from '/components/'

export default function Index({ filteredDriver }) {
  return (
    <Layout>
      <section className="relative min-h-[40rem]">
        <div className="px-6">
          <div className="grid grid-cols-2 gap-y-7 gap-x-10 lg:grid-cols-10">
            <div className="col-span-2 lg:col-span-10 flex max-h-28">
              <Navigation />
            </div>
            <div className="col-span-2 lg:col-span-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                {filteredDriver.map((item, id) => {
                  return <DriverCard key={id} data={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = [{ league: 'pro' }, { league: 'prospec' }, { league: 'fd-jp' }]
  return {
    paths: categories.map((item) => ({
      params: {
        league: item.league,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const drivers = await fetchAPI(`/drivers?category=${params.league}`)
  const filteredDriver = _.orderBy(drivers, [(item) => item.name], ['asc'])
  return {
    props: { filteredDriver },
    revalidate: true,
  }
}
