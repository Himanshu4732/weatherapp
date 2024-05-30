import React from "react";


const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getCurrentDate() {
  return new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function img_info(a) {
  return `https://openweathermap.org/img/wn/${a}@2x.png`;
}

function Contentleft({ weatherData }) {
  const day = new Date().getDay();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" p-7 flex flex-col items-center justify-center">
        <div className="day text-4xl text-white font-bold">
          <span>{weekday[day]}</span>
        </div>
        <div className="date text-md text-white font-medium ">
          <span>{getCurrentDate()}</span>
        </div>
      </div>
      <div className="p-2">
      
        <img src={img_info(weatherData.list[0]?.weather[0].icon)} alt="Weather Icon" className=" w-40 h-40"/>
        {/* <img src={img} alt="" className=" w-40 h-40 mix-blend-multiply"/> */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-5xl text-white font-bold">{((weatherData.list[0]?.main.temp)-273.15).toFixed(1)}&deg;</span>
        
        <span className="text-md text-white font-medium">{weatherData.list[0]?.weather[0].description}</span>
      </div>
    </div>
  );
}

export default Contentleft;
