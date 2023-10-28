import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
function Hospital({latlng}) {
    let hospital = useLocation()
    let [routes, setRoutes] = useState({})

    console.log(hospital.state)
    const getroutedata = async (locurl)=>{
      const result1 = await fetch(locurl)
      const data1 = await result1.json()
      setRoutes(data1.features[0].properties.legs[0].steps)
    }
   useEffect(()=>{
    let locurl = `https://api.geoapify.com/v1/routing?waypoints=${latlng.lat},${latlng.lng}|${hospital.state.properties.lat},${hospital.state.properties.lon}&mode=drive&apiKey=6fac5aa7a9864c39a178b5c466212b3b`
    //let locurl = `https://api.geoapify.com/v1/routing?waypoints=14.4741539,78.8393976|${hospital.state.properties.lat},${hospital.state.properties.lon}&mode=drive&apiKey=6fac5aa7a9864c39a178b5c466212b3b`
      getroutedata(locurl)
    },[])


  return (
    <div>
          <div style={{display:'flex',}}>
          <div className='boxes_2'>
                  <div className='box_2_1'>
                  <h3 style={{fontSize:'2rem',display:'inline'}}>Hospital Address</h3>
                  <h3>{hospital.state.properties.name}</h3>
                  <div className='line'></div>
                  <p><b>User Latitude: </b>{latlng.lat}</p>
                  <p><b>User Longitude: </b>{latlng.lng} </p>
                  <p><b>User Formatted Address:</b> </p>
                  <div className='line'></div>

                  <p><b>Hospital Latitude:</b> {hospital.state.properties.lat}</p>
                  <p><b>Hospital Longitude:</b> {hospital.state.properties.lon}</p>
                  <p><b>Hospital Formatted Address:</b> {hospital.state.properties.formatted}</p>
                  <div className='line'></div>

                  <p><b>Hospital Website:</b> </p>
                  <p><b>Contact No:</b> {hospital.state.properties.datasource.raw.osm_id}</p>
                  <p><b>State:</b> {hospital.state.properties.state}</p>
                  <p><b>City:</b> {hospital.state.properties.city}</p>
              </div>
          </div>
          <div className='boxes_2'>
                  <div className='box_2_2'>
                  <h3 style={{fontSize:'2rem',display:'inline'}}>Directions</h3>
                  <Timeline position="alternate">
                  {
                      routes.length>0 && routes.map((route,index)=>(
                        <TimelineItem key={index}>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{route.instruction.text}</TimelineContent>
                      </TimelineItem>
                      ))
                    }
                    
                 </Timeline>
              </div>
          </div>
          </div>
    </div>
  )
}

export default Hospital