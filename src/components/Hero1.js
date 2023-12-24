import React from 'react';

export default function Hero1() {
  return (
    <div>
      <section>
        <img className="hidden md:block md:w-screen md:h-[45rem]" src="https://images.pexels.com/photos/3765113/pexels-photo-3765113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="md:absolute md:top-36 p-10 md:left-44 font-medium bg-white flex flex-col md:items-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center p-7">
              <i className="ri-taxi-fill text-2xl"></i>
              <div>Ride</div>
            </div>
            <div className="flex flex-col items-center p-7">
              <i className="ri-base-station-line text-2xl"></i>
              <div>Drive or deliver</div>
            </div>
            <div className="flex flex-col items-center p-7">
              <i className="ri-key-fill text-2xl"></i>
              <div>Rent your fleet</div>
            </div>
          </div>
          <hr />
          <div className="text-5xl font-semibold py-10">Request a ride now</div>
          <div className="pr-8 space-y-2">
            <input className="bg-gray-200 w-full h-10" />
            <input className="bg-gray-200 w-full h-10" />
          </div>
          <div className="py-10 md:space-x-4 flex flex-col md:flex-row space-y-2 pr-8">
            <button className="bg-black text-white md:py-3 px-5 py-3 w-full md:w-fit rounded-xl hover:opacity-80">Request now</button>
            <button className="bg-gray-200 px-5 py-3 rounded-xl hover:opacity-80">Schedule for later</button>
          </div>
        </div>
      </section>
    </div>
  );
}
