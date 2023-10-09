import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Map = ({eventData, center, zoom }) => {
    const [locationInfo,setLocationInfo]=useState(null)

    const markers=eventData.map(ev=>{
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({id:ev.id, title:ev.title})}/>

        }
        return null
    })
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD3K_G4pF5CVdr6AymfQ30VRtf6vkqT0jc" }}
                defaultCenter={center}
                defaultZoom={zoom}>

                    {markers}

                    

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}

        </div>
    )
}

Map.defaultProps ={
    center:{
        lat:41.015137,
        lng:28.979530,
    },
    zoom:6
}

export default Map
