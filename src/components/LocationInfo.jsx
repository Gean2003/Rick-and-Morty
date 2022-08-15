import React from 'react'

const LocationInfo = ({data}) => {
 

  return (
      <div className=' w-full max-w-5xl mx-auto  text-white '>
        <div className='text-center py-3'> 
            <h3 className='text-3xl font-semibold'>{data?.name}</h3>
        </div>

        <div className=' flex justify-center flex-row gap-4 py-3 text-[11px] sm:text-base sm:gap-5'>
            <span className='flex gap-2 font-semibold '>type: <p className='font-normal'>{data?.type}</p>  </span>
            <span className='flex gap-2 font-semibold'>dimension: <p className='font-normal'> {data?.dimension}</p> </span>
            <span className='flex gap-2 font-semibold'>population: <p className='font-normal' > {data?.residents.length}</p>  </span>
        </div>
       
        
    </div>
  )
}

export default LocationInfo