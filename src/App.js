import Map from './components/Map';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {

  const [eventData, setEventData]=useState([])
  const [loading, setloading]=useState(false)

  useEffect (()=>{
    const fetchEvents = async () =>{
      setloading(true)
      const res =await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const {events} = await res.json()

      setEventData(events)
      setloading(false)
    }

    fetchEvents()


  },[])

  return (
    <div>
      <Header/>
      {!loading ? <Map eventData={eventData} />: <Loader/>}
 
    </div>
  );
}

export default App;
