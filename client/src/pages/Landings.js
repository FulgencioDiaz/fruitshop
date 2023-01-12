import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { useEffect, useState } from "react";


const apiEndpoint = `https://ejercicionasa.onrender.com/api/astronomy/landings/all`;



function Landings(){
    
    const [coordenadas, setCoordenadas] = useState([])
    const getLandings= async () =>{
        
        const result = await fetch(apiEndpoint);
        const data = await result.json()
        setCoordenadas(data)
    }
    useEffect(() => {
       
        getLandings();
      
    },[]) 

    const filters= coordenadas.filter(e => (e.geolocation ? e : console.log("error")))
    console.log(filters)

    return (
        <>
        
    <div className='box1'>
        <label>Peso</label>
        <input></input>
        <button>filtrar por peso</button>
        </div>

    <div className='box2'>
        <label>Clase</label>
        <input></input>
        <button>filtrar por clase</button>
        </div>

    <select name="select">
        <option value="value1">Fall</option>
        <option value="value2">Year</option>
    </select>
      
    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
        <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
     
        {filters.map((e,index) =>(
    <Marker key={index} position={[e.geolocation.latitude, e.geolocation.longitude]}  >
        <Popup>
        {e.name} <br /> {e.year}
        </Popup>
    </Marker>
     ))}
  

    </MapContainer>
</>
    );
  
}
    
export default Landings



