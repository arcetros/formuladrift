import Image from 'next/image'
import moment from 'moment'
import { Calendar } from '/components/'
import Button from '../../ui/button'
import Icon from '/components/ui/icon/'

export const Schedule = ({ currentSchedule }) => {
  return (
    <div className="bg-[#111]">
      <div className="max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full flex mx-auto my-12">
        <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44 w-full">
          <div className="flex flex-col lg:flex-row gap-y-4 font-primary text-white pb-4 border-b border-gray-800">
            <div className="flex-col gap-y-4 w-full md:w-2/3 md:max-w-[30rem] ">
              <p className="font-bold text-xl lg:text-2xl">UPCOMING EVENT</p>
            </div>
            <div className="h-full my-auto lg:ml-auto w-full lg:w-1/3">
              <Calendar item={currentSchedule.started_at} />
            </div>
          </div>
          <div className="mt-8">
            <div className="relative border border-white">
              <div className="relative flex justify-between items-center px-4 lg:px-8">
                <div className="flex-col font-secondary text-white z-20">
                  <p className="font-extrabold text-base md:text-xl tracking-widest uppercase">
                    {moment(currentSchedule.started_at).format('MMMM').slice(0, 3)}
                  </p>
                  <p className="font-primary text-center text-xl md:text-2xl font-extrabold">
                    {moment(currentSchedule.started_at).format('D')}
                  </p>
                </div>
                <div className="absolute lg:relative inset-0 w-full mx-0 lg:mx-8">
                  <div className="relative h-full lg:h-[10rem] w-full group z-0 lg:z-40">
                    <Image
                      layout="fill"
                      src={currentSchedule.track.track_banner.url}
                      alt={currentSchedule.track.track_name}
                      className="relative object-cover z-20 opacity-25 lg:opacity-100"
                    />
                    <div className="hidden md:flex absolute w-full h-full bg-[#111] bg-opacity-95 z-0 lg:z-10 group-hover:z-30 cursor-pointer">
                      <div className="hidden relative lg:flex w-full h-full">
                        <h1 className="m-auto font-primary font-extrabold text-white text-2xl">
                          More Details
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white py-4 ml-0 lg:ml-8 z-40">
                  <p className="font-primary font-bold text-xs md:text-xl uppercase z-40 lg:z-0">
                    {currentSchedule.track.track_name}
                  </p>
                  <p className="text-gray-400 font-secondary text-xs md:text-base italic z-40 lg:z-0">
                    {moment(currentSchedule.started_at).format('dddd')}
                  </p>
                  <p className="text-gray-400 font-secondary text-xs md:text-base italic z-40 lg:z-0">
                    {currentSchedule.track.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative w-full">
            <Button>
              <span className="text-white group-hover:text-black">
                <Icon type="MenuAlt1" />
              </span>
              <span className="text-white text-sm md:text-base font-secondary group-hover:text-[#111]">
                MORE EVENTS
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
