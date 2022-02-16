import { useState } from 'react'
import Image from 'next/image'
// import { marked } from 'marked'
// import YouTube from 'react-youtube'
import { fetchAPI } from '/lib/api'
import { WinsModal, Name, DriverImage, Layout } from '/components/'

export default function Driver({ driver }) {
  const [toggleModal, setToggleModal] = useState(false)

  const close = () => {
    setToggleModal(false)
  }
  // const opts = {
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // }
  // react-youtube ! do it soon !

  return (
    <Layout>
      <div className="absolute inset-0 w-full">
        <div className="relative h-[90vh] lg:h-[100vh] blur">
          <Image
            src={driver.driver_bg.url}
            alt={driver.name}
            layout="fill"
            className="object-cover"
          />
          <div className="absolute flex bg-gradient-to-t from-[#111] -bottom-1 left-0 h-[130%] w-full"></div>
        </div>
      </div>
      <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full mx-auto pb-12">
        <div className="flex flex-col overflow-hidden mx-4 md:mx-12 lg:mx-0 xl:mx-44">
          <main className="pt-24 lg:pt-[8rem] mb-8 pb-4">
            <div className="relative w-full mx-auto">
              <div className="border border-white">
                <div className="relative flex flex-col md:flex-row px-0 gap-y-4 md:gap-0 h-full">
                  <DriverImage
                    url={driver.driver_img.url}
                    name={driver.name}
                    number={driver.driver_number}
                  />
                  <Name driver={driver} />
                </div>
              </div>
            </div>
          </main>

          {toggleModal && <WinsModal handleClose={close} data={driver} driver={driver.slug} />}
        </div>
      </div>
    </Layout>
  )
}
export async function getStaticPaths() {
  const res = await fetchAPI('/drivers')

  return {
    paths: res.map((item) => ({
      params: {
        driver: item.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI(`/drivers?slug=${params.driver}`)

  return {
    props: { driver: res[0] },
    revalidate: 1,
  }
}
