import { useState, useCallback } from 'react'
import _ from 'lodash'
import { useQuery } from 'react-query'
import Image from 'next/image'
import Tab from './Tab'
import { Card } from './Card'
import { useMobile } from '/utils/hooks/'
import { fetchAPI } from '/lib/api'

const leagues = ['pro', 'prospec', 'fd-jap']

// const getDrivers = async (key) => {
//   const category = key.queryKey[1].category
//   if (category) {
//     const drivers = await Promise.resolve(fetchAPI(`/drivers?category=${category}`))
//     return drivers
//   }
//   const drivers = await Promise.resolve(fetchAPI('/drivers?category=pro'))
//   return drivers
// }

export const Standings = ({ drivers }) => {
  const [active, setActive] = useState(leagues[0])
  const { isMobile } = useMobile()

  const getDrivers = useCallback(async (key) => {
    const category = key.queryKey[1].category
    if (category) {
      const drivers = await Promise.resolve(fetchAPI(`/drivers?category=${category}`))
      return drivers
    }
    const drivers = await Promise.resolve(fetchAPI('/drivers?category=pro'))
    return drivers
  }, [])

  const { data } = useQuery(['drivers', { category: active }], getDrivers, {
    initialData: drivers,
  })
  const sorted = _.orderBy(data, [(item) => item.name], ['asc'])

  return (
    <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full mx-auto">
      <div className="my-12 mx-4 md:mx-12 lg:mx-0 xl:mx-44">
        <div className="flex flex-col items-center lg:gap-x-16">
          <div className="relative w-full pb-4 border-b border-gray-800">
            <div className="flex flex-col gap-y-6 items-start md:items-center md:flex-row justify-between">
              <h1 className="text-white font-primary font-bold text-xl lg:text-2xl">
                LEADERBOARDS
              </h1>
              <div className="flex items-center gap-x-8">
                {leagues.map((item, key) => (
                  <Tab key={key} active={active === item} onClick={() => setActive(item)}>
                    {item}
                  </Tab>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex w-full mx-auto md:w-1/2 lg:w-full gap-x-4 mt-6 md:mt-16">
              {_.orderBy(sorted, 'points', 'desc')
                .slice(0, 3)
                .map((item, id) => {
                  return <Card item={item} id={id} key={id} />
                })}
            </div>
            <div className="flex flex-col mt-2 lg:mt-6 w-full">
              <table className="table-auto border-collapse md:border-separate w-full">
                <thead className="">
                  <tr className="text-xs font-primary font-thin text-gray-400 rounded-full">
                    <th className="px-0"> </th>
                    <th className="text-left px-1 md:px-4 py-2">Name</th>
                    <th className="text-right px-1 md:px-4 py-2">{isMobile ? 'Num' : 'Number'}</th>
                    <th className="text-right px-1 md:px-4 py-2">{isMobile ? 'pts' : 'Points'}</th>
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
                          <td className="pr-2 md:px-4 py-2 font-secondary text-right">
                            {item.driver_number}
                          </td>
                          <td className="font-secondary pr-2 md:px-4 py-2 text-right">
                            {item.points}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
              <a className="mx-auto mt-8 text-white font-primary ">SEE ALL STANDINGS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
