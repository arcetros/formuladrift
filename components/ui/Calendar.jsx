import Image from "next/image";
import moment from "moment";
import Countdown, { zeroPad } from "react-countdown";

const Calendar = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-gray-900 rounded shadow-md flex flex-col justify-between h-full">
      <div className="w-full bg-gray-800 h-12 relative rounded-t">
        <div className="mt-3 ml-4 text-white font-bold">Drift Calendar</div>
      </div>
      <div className="min-h-[30ch]">
        <div className="mx-auto p-7">
          <div className="relative flex flex-col flex-shrink-1 h-[200px] w-auto">
            <Image
              layout="fill"
              src={item.track.track_logo.url}
              alt={item.track.track_name}
              className="object-contain w-full"
            />
          </div>
          <div className="flex w-full">
            <div className="mx-auto bg-red-600 px-6 py-3 text-white font-medium rounded">
              Schedule
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-gray-800 h-28 relative rounded-b text-sm">
        <div className="mx-4 mt-4">
          <span className="font-bold text-white">MATCH START IN</span>
          <div className="flex justify-between">
            <div className="text-xl text-center flex w-full items-center mt-2">
              <Countdown
                date={item.started_at}
                intervalDelay={0}
                precision={3}
                renderer={(props) => {
                  return (
                    <>
                      <div className="w-15 p-1 mr-0.5 bg-white text-gray-800 rounded-md">
                        <div className="font-mono leading-none" x-text="days">
                          {zeroPad(props.days)}
                        </div>
                        <div className="font-mono uppercase text-sm leading-none">
                          Days
                        </div>
                      </div>
                      <div className="w-10 p-1 mx-0.5 bg-white text-gray-800 rounded-md">
                        <div className="font-mono leading-none" x-text="hours">
                          {zeroPad(props.hours)}
                        </div>
                        <div className="font-mono uppercase text-sm leading-none">
                          HRS
                        </div>
                      </div>
                      <div className="w-10 p-1 mx-0.5 bg-white text-gray-800 rounded-md">
                        <div
                          className="font-mono leading-none"
                          x-text="minutes"
                        >
                          {zeroPad(props.minutes)}
                        </div>
                        <div className="font-mono uppercase text-sm leading-none">
                          Mins
                        </div>
                      </div>
                      <div className="w-10 p-1 mx-0.5 bg-white text-gray-800 rounded-md">
                        <div
                          className="font-mono leading-none"
                          x-text="seconds"
                        >
                          {zeroPad(props.seconds)}
                        </div>
                        <div className="font-mono uppercase text-sm leading-none">
                          Secs
                        </div>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
