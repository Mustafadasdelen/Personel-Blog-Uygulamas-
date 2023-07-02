import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import urunler from '../db/urunler.json'

export default function ApiCall() {

  const [apiData, setApiData] = useState([])
  const [query, setQuery] = useState("")

  const changeState = (event) => {

    setQuery(event.target.value)
  }

  useEffect(() => {

    const apiRequest = async () => {
    
      console.log("API urun:", urunler.yemekler)
      setApiData(urunler.yemekler)

    }

    apiRequest()

  }, [])

  return (

    <>
    <div className='searchBar'>

    <input type="search" onChange={changeState} value={query} placeholder='Arama'/>

    </div>

    <div className='flex-container'>

    {apiData.map((urun) => {

     if (urun.title.toLowerCase().includes(query.toLowerCase())) {

     return <div key={urun.id} className='flex-item'>

        <div className='flex-body'>

        <img src={urun.image} alt={urun.title} />

        </div>
        <h2 className='baslik'>{urun.title}</h2>

        <div className="browse">

          <Link to={`/urunler/${urun.id}`}>
          <button>İncele</button>
          </Link>
          
        </div>
     </div>
     }

     return null

    })}
    
    </div>
    
    </>
  )
}
