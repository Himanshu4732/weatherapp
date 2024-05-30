import React from 'react'

function Weatherdata({detail,data}) {
  return (
    <div className='p-3 flex justify-between hover:bg-slate-700 transition'>
        <span className='text-white px-2 text-xl '>{detail}</span>
        <span className='text-white px-2 text-xl'>{data}</span>


    </div>
  )
}

export default Weatherdata