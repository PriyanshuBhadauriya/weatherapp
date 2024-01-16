import React, { useEffect, useState } from 'react'
import './style.css'

function Tempapp() {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("");
    useEffect(() =>{
        const fetchApi=async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3ce4cef0ba6017a7e3edd433a0f64a22`;
            const response=await fetch(url);
            
            const resJson=await response.json();
            
            setCity(resJson);
            
            
        };
        fetchApi();
    },[search])
    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
      };
  return (
    <>
    <div className='box'>
        <div className='inputData'>
            <input type='search'placeholder='Enter Your City' className='inputField' value={search}  onChange={(event)=>{setSearch(event.target.value)

            }}/>
        </div>
        {!city ?(<p>No data found</p>):(
            <div>
            <div className='info'>
        <h2 className='location'>
            <i className='fas fa-street-view'></i>{search}
        </h2>
        
            
        
        
        <h1 className='temp'>{kelvinToFarenheit(city?.main?.temp)}&deg; C</h1>
        <h1 className='temp'>{kelvinToFarenheit(city?.main?.feels_like)}&deg; C</h1>
        <h1 className='temp'>{city?.sys?.country}</h1>
        <h1>{city?.visibility} Meter</h1>
        <h3 className='tempin_max'>Min :{kelvinToFarenheit(city?.main?.temp_min)}&deg; C| Max:{kelvinToFarenheit(city?.main?.temp_max)}&deg; C</h3>
    </div>
   
    <div className='wave-one'></div>
    <div className='wave-two'></div>
    <div className='wave-three'></div>
    </div>)}
   
   
   
    </div>
    
    </>
  )
}

export default Tempapp