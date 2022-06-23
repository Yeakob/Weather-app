import React,{useState} from 'react'
import './Components/App.css'
import axios from 'axios'



export default function App() {
  const [data,setData]= useState({});
  const [location,setLocation]=useState('');
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=460a390d5a6cd5dbf80f4ba0d35a67f2`;
  const Search=(event)=>{
    if(event.key==="Enter")
    {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(data);
        
      })
    }
      
     

     
    
  }
  const dateBuilder=(d)=>{
   let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
   let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   let day=days[d.getDay()];
   let date=d.getDate();
   let month=months[d.getMonth()];
   let year=d.getFullYear();

   return `${day} ${date} ${month} ${year}`
  }

  return (

    <div className='all'>
     <main>
      <div className="search-box">
        <input type="text" 
        className='search-bar'
        placeholder='Search...'
        onChange={event => setLocation(event.target.value)}
        value={location}
        onKeyPress={Search}
        />
        
        <div className="location-box">
          <div className="location">{data.name} {data.sys? <p>{data.sys.country}</p>:null}</div>
          <div className="date">{dateBuilder(new Date())}</div>

        </div>
        <div className="weather-box ">
          <div className={(typeof data.main!="undefined")?((Math.floor(data.main.temp-273)>16)?'hot':'cool'):'temp'}>
            {data.main? <h3>{Math.floor(data.main.temp-273)}°C</h3>:null}
          </div>
          <div className="weather">
          {data.weather? <h3>{data.weather[0].main}</h3>:null}

          </div>
         
          
        </div>
      </div>
     </main>
    </div>
  )
}



