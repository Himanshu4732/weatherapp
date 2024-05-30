import React from 'react';
import Weatherdata from './Weatherdata';
import Diffday from './Diffday';

const Temp = 'Temp';
const Wind = 'Wind';
const Pressure = 'Pressure';

function Maincontent({ weatherData }) {
  return (
    <div>
      <div>
        <Weatherdata detail={Temp} data={(weatherData?.list[0]?.main?.temp - 273.15).toFixed(2)} />
        <Weatherdata detail={Wind} data={weatherData?.list[0]?.wind?.speed} />
        <Weatherdata detail={Pressure} data={weatherData?.list[0]?.main?.pressure} />
      </div>
      <div className='flex justify-between py-2 px-2'>
        <Diffday image={weatherData?.list[1]?.weather[0].icon} temp={(weatherData?.list[1]?.main?.temp - 273.15).toFixed(2)}/>
        <Diffday image={weatherData?.list[2]?.weather[0].icon} temp={(weatherData?.list[2]?.main?.temp - 273.15).toFixed(2)}/>
        <Diffday image={weatherData?.list[3]?.weather[0].icon} temp={(weatherData?.list[3]?.main?.temp - 273.15).toFixed(2)}/>
        <Diffday image={weatherData?.list[4]?.weather[0].icon} temp={(weatherData?.list[4]?.main?.temp - 273.15).toFixed(2)}/>
        
      </div>
      <div className='flex justify-center items-baseline pt-2'>
        <span className='text-white text-2xl font-bold'>{weatherData?.city.name}</span>
        <span className='text-white text-lg font-bold'> , {weatherData?.city.country}</span>
      </div>
    </div>
  );
}

export default Maincontent;
