const Calendar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="w-full bg-red-500 h-12 relative">
        <div className="mt-3 ml-4 text-white font-bold">Drift Calendar</div>
      </div>
      <div className="min-h-1xl"></div>
      <div className=" w-full bg-red-500 h-28 relative text-sm">
        <div className="mx-4 mt-4">
          <span className="font-bold text-white">MATCH START IN</span>
          <div className="flex justify-between">
            <div className="text-xl text-center flex w-full items-center mt-2">
              <div className="w-15 p-1 mr-0.5 bg-white text-red-600 rounded-md">
                <div className="font-mono leading-none" x-text="days">
                  00
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Days
                </div>
              </div>
              <div className="w-10 p-1 mx-0.5 bg-white text-red-600 rounded-md">
                <div className="font-mono leading-none" x-text="hours">
                  00
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  HRS
                </div>
              </div>
              <div className="w-10 p-1 mx-0.5 bg-white text-red-600 rounded-md">
                <div className="font-mono leading-none" x-text="minutes">
                  00
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Mins
                </div>
              </div>
              <div className="w-10 p-1 mx-0.5 bg-white text-red-600 rounded-md">
                <div className="font-mono leading-none" x-text="seconds">
                  00
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Secs
                </div>
              </div>
              <div className="ml-auto text-md text-white">Sponsor.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
