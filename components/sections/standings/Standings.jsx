import { useState } from 'react'
import _ from 'lodash'
import { useQuery } from 'react-query'
import Image from 'next/image'
import { Card, Navigation, ToggleButton, container } from './'
import { useMobile } from '/utils/hooks/'
import { fetchAPI } from '/lib/api'

const getDrivers = async (key) => {
  const category = key.queryKey[1].category
  if (category) {
    const drivers = await Promise.resolve(fetchAPI(`/drivers?category=${category}`))
    return drivers
  }
  const drivers = await Promise.resolve(fetchAPI('/drivers?category=pro'))
  return drivers
}

export const Standings = ({ drivers }) => {
  const { isMobile } = useMobile()
  const [category, setCategory] = useState('')

  const { data } = useQuery(['drivers', { category: category }], getDrivers, {
    initialData: drivers,
  })
  const sorted = _.orderBy(data, [(item) => item.name], ['asc'])
  const [isToggle, setIsToggle] = useState(false)
  const league = [{ title: 'pro' }, { title: 'prospec' }, { title: 'FD-JAP' }]

  return (
    <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full mx-auto">
      <div className="my-12 mx-4 md:mx-12 lg:mx-0 xl:mx-44">
        <div className="flex flex-col items-center lg:gap-x-16">
          <div className="relative w-full">
            <div className="flex justify-between lg:justify-start items-center">
              <h1 className="text-white font-primary font-bold text-lg lg:text-xl">LEADERBOARDS</h1>
              <ToggleButton isToggle={isToggle} setIsToggle={setIsToggle} />
            </div>
            <Navigation
              league={league}
              container={container}
              isToggle={isToggle}
              setCategory={setCategory}
              setIsToggle={setIsToggle}
            />
          </div>

          <div className="flex w-full md:w-1/2 lg:w-full gap-x-4 gap-y-12 mt-6 md:mt-16">
            {_.orderBy(sorted, 'points', 'desc')
              .slice(0, 3)
              .map((item, id) => {
                return <Card item={item} id={id} key={id} />
              })}
          </div>
          <div className="mt-2 lg:mt-6 w-full">
            <table className="table-auto border-collapse md:border-separate w-full">
              <thead className="">
                <tr className="text-xs font-primary font-thin text-gray-400 rounded-full">
                  <th className="px-0"> </th>
                  <th className="text-left px-1 md:px-4 py-2">Name</th>
                  <th className="text-center lg:text-left px-1 md:px-4 py-2">Number</th>
                  <th className="text-center lg:text-left px-1 md:px-4 py-2">
                    {isMobile ? 'pts' : 'Points'}
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {_.orderBy(sorted, 'points', 'desc')
                  .slice(isMobile ? 1 : 3, 8)
                  .map((item, id) => {
                    return (
                      <tr key={id} className="text-white py-10 bg-gray-800 text-xs">
                        <td className="text-bold font-secondary px-2 md:px-4 py-2">{`#${
                          isMobile ? id + 2 : id + 4
                        }`}</td>
                        <td className="flex mr-auto px-0 md:px-4 py-2 items-center">
                          <Image
                            src={item.driver_country.url}
                            alt="driver_country"
                            width="22"
                            height="20"
                          />
                          <span className="ml-2 font-secondary text-bold text-red-50">
                            {item.name}
                          </span>
                        </td>
                        <td className="px-0 md:px-4 py-2 font-secondary text-center md:text-left">
                          {item.driver_number}
                        </td>
                        <td className="font-secondary px-0 md:px-4 py-2 text-center md:text-left">
                          {item.points}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            <div className="flex w-full">
              <div className="mx-auto border border-white mt-4 md:mt-8 p-2 group hover:bg-white transition ease-in-out duration-200 cursor-pointer">
                <span className="text-white text-sm md:text-base font-secondary group-hover:text-[#111]">
                  FULL DRIVER STANDING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
