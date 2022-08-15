import { useState, useEffect } from 'react'
import axios  from "axios";
import LocationInfo from './components/LocationInfo';
import CardResident from './components/CardResident'
import Pagination from './components/Pagination'

function App() {
  const [data, setData] = useState()
  const [search, setSearch] = useState('')
   const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(5)

    


  useEffect(() => {
    let idLocation

    if (search === '') {
      idLocation = Math.floor(Math.random() * (126 - 1) + 1)
      
    }else {
    idLocation = search
    }

    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
      axios.get(URL)
        .then(res => setData(res.data))
    
  }, [search])



const searcher = e => {
 
 e.preventDefault()
  setSearch(e.target.search.value)
  setPage(1)
}

 let maxPage 
if (data) {
   maxPage = Math.floor(  data.residents.length / perpage)  
}else{
  return
}

 

  return (
    <div className="App">
      <div className='sm:w-full sm:h-[400px] sm:bg-hero-pattern sm:bg-cover sm:bg-no-repeat sm:bg-center' > </div>
        <h1 className='font_ram font-bold text-5xl text-center my-8 text-white '>Rick and Morty Wiki</h1>
        <div className='text-center max-w-5xl mx-auto'>

        <form onSubmit={searcher}>
          <input type="text" placeholder='Search' id='search' className='my-3 mx-2 w-[80%] py-2 rounded-[7px]'  />
          <button className='px-3 py-2 bg-slate-900 text-white rounded-[7px]'>SEARCH</button>
        </form>

        </div>

        <LocationInfo  data = {data} />

        <div className='w-[60%] flex mx-auto text-white  py-5 gap-4 justify-center flex-wrap '>
          { data?.residents.slice((page - 1) * perpage, (page -1) * perpage + perpage).map(url => (
            <CardResident key={url}
                          url={url} />
          ))
        }
        </div>
            <Pagination page= {page}
                    setPage={setPage}
                    maxPage ={maxPage}
                      />
    </div>
  )
}

export default App
