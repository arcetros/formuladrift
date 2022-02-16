import Countdown, { zeroPad } from 'react-countdown'

export const Calendar = ({ item }) => {
  return (
    <Countdown
      date={item}
      intervalDelay={0}
      precision={3}
      renderer={(props) => {
        return (
          <div className="flex gap-x-1 text-white font-mono leading-none ">
            <div className="flex-1 mx-auto text-white w-10 md:w-15 p-0 lg:p-1 flex justify-start lg:justify-evenly items-center gap-x-1 font-mono">
              <p className="text-sm">{zeroPad(props.days)}</p>
              <p className="text-xs">days</p>
            </div>
            <div className="flex-1 text-white w-10 w-15 p-0 lg:p-1 flex justify-start lg:justify-evenly items-center gap-x-1">
              <p className="text-sm">{zeroPad(props.hours)}</p>
              <p className="text-xs">hours</p>
            </div>
            <div className="flex-1 text-white w-10 w-15 p-0 lg:p-1 flex justify-start lg:justify-evenly items-center gap-x-1">
              <p className="text-sm">{zeroPad(props.minutes)}</p>
              <p className="text-xs">mins</p>
            </div>
            <div className="flex-1  text-white w-10 w-15 p-0 lg:p-1 flex justify-start lg:justify-evenly items-center gap-x-1">
              <p className="text-sm">{zeroPad(props.seconds)}</p>
              <p className="text-xs">secs</p>
            </div>
          </div>
        )
      }}
    />
  )
}
