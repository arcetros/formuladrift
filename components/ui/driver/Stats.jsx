import Icon from '../icon/'

const Item = ({ data, handleEvent, iconType }) => {
  return (
    <div
      onClick={handleEvent}
      className="flex items-center bg-coral-500 rounded-full px-4 h-10 min-w-[6rem]"
      aria-hidden="true"
    >
      <div className="flex flex-row items-center gap-x-4 mx-auto">
        {iconType && <Icon type={iconType} />}
        <p className="text-lg font-bold text-white md:text-xl">{data}</p>
      </div>
    </div>
  )
}

export const Stats = (props) => {
  const { driver, event } = props

  return (
    <div className="flex justify-between mb-10 md:mb-8 bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex gap-x-4">
        <Item
          data={driver.victories.length}
          title="wins"
          handleEvent={event}
          position="right"
          iconType="StarIcon"
        />
        <Item data={driver.age} title="years old" />
      </div>
      <div className="flex items-center">EXP</div>
    </div>
  )
}
