import React from 'react'
import useFetch from '../Hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)


  return ( 
     
   
    <div className=' w-[320px] bg-slate-900 rounded-xl  overflow-hidden'>
       <div className='w-full bg-black relative'>
          <img  className='w-full' src={resident?.image} alt={resident?.name} />
        
        <div className='w-2/5 bg-[#05292E] flex items-center  py-3 gap-3 h-6  absolute top-5 rounded-3xl'>
          <div className='w-5 h-5 rounded-[50%] ' style={{backgroundColor:  resident?.status === "Alive"?  "green" : resident?.status === "Dead"? "red" : "grey"  }}> </div>
          <p>{resident?.status} </p>
        </div>

        </div> 
       

        <div className='my-3 mx-3'>
          <h3 className='font-normal text-xl my-3'>{resident?.name} </h3>
          <span className='text-gray-500 '>Specie</span>
          <h4 className='mbot'>{resident?.type} </h4>
          <span className='text-gray-500 my-2'>Origin</span>
          <h4 className='mbot'>{resident?.origin.name} </h4>
          <span className='text-gray-500'>appearance in episodes</span>
          <h4 className='mbot'>{resident?.episode.length} </h4>
        </div>

      </div>

    
  )
}

export default CardResident