import Image from 'next/image'
import Icon from '../../ui/icon'

export const League = () => {
  return (
    <div className="container relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full flex mx-auto my-12">
      <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44 w-full">
        <h1 className="font-primary font-bold text-white text-lg lg:text-2xl mb-8">
          DRIFT LEAGUES
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
          <div className="col-span-1 border border-white">
            <div className="relative flex w-full h-[300px]">
              <Image
                src="/leagues/test.jpg"
                layout="fill"
                className="relative h-full w-full object-cover"
              />
            </div>
            <div className="p-3 text-white">
              <div className="flex items-center justify-between">
                <p className="font-primary font-extrabold text-lg">PRO</p>
                <div className="flex items-center gap-x-2">
                  <Icon type="UserIcon" />
                  <span className="font-secondary font-light text-gray-400">23 Drivers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-white">
            <div className="relative flex w-full h-[300px]">
              <Image
                src="/leagues/test2.jpg"
                layout="fill"
                className="relative h-full w-full object-cover"
              />
            </div>
            <div className="p-3 text-white">
              <p className="font-primary font-extrabold text-lg">PRO</p>
            </div>
          </div>
          <div className="col-span-1 border border-white">
            <div className="relative flex w-full h-[300px]">
              <Image
                src="/leagues/test3.jpg"
                layout="fill"
                className="relative h-full w-full object-cover"
              />
            </div>
            <div className="p-3 text-white">
              <p className="font-primary font-extrabold text-lg">PRO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
