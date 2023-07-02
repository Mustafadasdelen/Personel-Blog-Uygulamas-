import React, { useState, useEffect } from 'react'
import urunler from '../db/urunler.json'
import yorumlar from '../db/yorumlar.json'
import { useParams } from 'react-router-dom'

let database = [];

export default function ApiCall() {

  const [apiData, setApiData] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [personel, setPersonel] = useState(database);
  const veri = yorumlar.yorumlar;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    if (!inputValue) {
      alert("Lütfen yorum giriniz.")
      return
    }

    let yorum = inputValue;

    const userModel = { yorum: yorum }
    setPersonel([...personel, userModel])
    setInputValue("")
  };

  const { id } = useParams();

  const fetchComments = () => {
    database = [];
    for (let i = 0; i < veri.length; i++) {
      if(veri[i].id == id) {
        database = [...veri[i].yorum];
        for(let k = 0; k < veri[i].yorum.length; k++) {
          let yorum = veri[i].yorum[k];
          const userModel = { yorum: yorum };
          setPersonel(prevPersonel => [...prevPersonel, userModel]);
        }
      }
    }
  }

  useEffect(() => {
    setPersonel([]);
    let data;
    urunler.yemekler.forEach(element => {
      if(element.id == id) {
        data = element;
        fetchComments();
      }
    });

    setApiData([data]);
  }, [id]);

  return (

    <>
    <div className='flex-cont'>
    <div className='flex-container-left'>

    {apiData.map((urun) => {

     return <div key={urun.id} className='flex-item'>
    
        <h2 className='baslik' >{urun.title}</h2>

        <div className='flex-body'>
        <img src={urun.image} alt={urun.title} />
        </div>

        <p className='trf'>
          <h4 style={{marginBottom:5}}>Tarif</h4>
          {urun.tarif}
          </p>
        <h4 style={{marginTop:15}}>Yayınlanma Tarihi : {urun.tarih}</h4>
        
     </div>

    })}
    
    </div>
    <div className='flex-container-right'>
      <div style={{height:250}}>
          <h2 className='baslik' >Yorum Yap</h2>
          <input className='yorum-ekle' type="text" placeholder='Yorum ekle' value={inputValue} onChange={handleChange}/>
          <button className='yorum-btn'  onClick={handleSave}>Kaydet</button>
      </div>
     <div>
          <h2 className='baslik'   style={{marginBottom:"2.5rem"}}>Yorumlar</h2>
                    
          {personel.map((kullanici, index) => {
            return (
              <div key={index} style={{ padding: "15px", margin: "10px", border: "2px solid rgb(150, 150, 150)",borderRadius:"7px", width:"75%" }}>
                <p className='yorum'>{kullanici.yorum}</p>
              </div>
            )
          })}
      </div>
    </div>
    </div>
    
    
    </>
  )
}
