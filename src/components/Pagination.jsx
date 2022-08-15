import React from 'react'



const Pagination = ({page, setPage, maxPage}) => {

    

const handleNextPage = () =>{
    if (page <= maxPage) {
        
        setPage(page + 1)
    }else{
        return 
    }
}

    

const handlePrevPage = () =>{

    if (page === 1) {
        return
        
    }else{
        setPage(page - 1)
    }
}


  return (
    <div className='text-center my-2 p-2  text-white flex w-full justify-center gap-5 '>
        <button onClick={handlePrevPage} className='w-[50px] bg-slate-900 aspect-square my-1 rounded-[50%] flex items-center justify-center'><i className='bx bx-left-arrow-alt'></i></button>
        <h1>{page} paginas de {maxPage + 1} </h1>
        <button onClick={handleNextPage} className='w-[50px] bg-slate-900 aspect-square my-1 rounded-[50%] flex items-center justify-center'><i className='bx bx-right-arrow-alt'></i></button>
    </div>
  )
}

export default Pagination