import Link from 'next/link'
import Icon from '../icon/'

export const Name = (props) => {
  const { driver } = props
  return (
    <div className="w-full md:w-1/2">
      <div className="relative font-primary block md:flex my-0 md:my-auto h-full">
        <div className="m-0 md:m-auto z-20">
          <div className="mx-4 md:mx-0 font-primary">
            <h1 className="text-gray-100 text-3xl md:text-5xl font-bold uppercase">
              {driver.name}
            </h1>
            <div className="flex items-center gap-x-4 my-4">
              {driver.socialmedia.length >= 1 &&
                driver.socialmedia.map((item) => {
                  return (
                    <Link href={item.url} passHref={true} key={item.id}>
                      <a target="_blank">
                        <Icon type={item.icon} />
                      </a>
                    </Link>
                  )
                })}
            </div>
            <div className="block overflow-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-400 max-h-32 mr-0 md:mr-8 mb-8">
              <p className="font-primary text-gray-200 text-base md:text-lg mr-0 md:mr-1">
                {driver.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
