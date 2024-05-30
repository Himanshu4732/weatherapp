import React from 'react'
function img_info(a) {
    return `https://openweathermap.org/img/wn/${a}@2x.png`;
  }

function Diffday({image,temp}) {
  return (
    <div className=' rounded-lg flex flex-col justify-center items-center border-2 border-slate-600 hover:bg-slate-950 transition'>
        <img src={img_info(image)} alt="" className='h-16 w-16' />
        <span className='text-white text-lg'>{temp}</span>


    </div>
  )
}

export default Diffday