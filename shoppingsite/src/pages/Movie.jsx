import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function Movie() {
    let data = useLocation()
    let navigation = useNavigate()
    let IMAGE_API = 'https://image.tmdb.org/t/p/w500'
    console.log(data.state)
    let [latlng, setLatLng] = useState({})
    let [theaters, setTheater] = useState([])
    let theatertiming = ['10:30 AM', '2:00 PM', '6:00 PM','9:00 PM']
    useEffect(()=>{
      if('geolocation' in navigator)
      {
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatLng({
              lat:position.coords.latitude,
              lng:position.coords.longitude
            });
        })
      }
     
    },[]);
    useEffect(()=>{
      //  const GEOAPIFY = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.44202,17.3707564,5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=6e9b299ec1c64a05b163c2aa829b3395`
       const GEOAPIFY = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latlng.lng},${latlng.lat},5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=50edf76bcea941558626d79422a62ae8`
      getMyData(GEOAPIFY)
    
      },[latlng])

      let getMyData = async(URL)=>{
        let result = await fetch(URL)
        let data = await result.json()
        let features = data.features
        let names = []
        features.map((feature)=>{names.push(feature.properties.name)})
        setTheater(names)
        console.log(latlng)
        //names.push(feature.properties.name)
      }
  return (
    <div style={{overflowX:'hidden'}}>
     { console.log("Latitude: ",latlng.lat,"Longitude: ",latlng.lng)} 
      <Row >
        <Col>
              <div style={{padding:'2rem',marginLeft:'3rem'}}>
                <img src={IMAGE_API+data.state.poster_path} alt = 'Movie Image' style={{width:'20rem',height:'25rem'}}/>
                <h2>{data.state.title}</h2>
                <p style={{textAlign:'justify'}}>{data.state.overview}</p>
              </div>
        </Col>
        <Col>
       {
                 theaters.map((value)=>(
                  <div style={{margin:'2rem'}}>
                  <h3>{value}</h3>
                  <div>
                        {
                          theatertiming.map((time)=>(
                            <Button variant='primary' style={{marginRight:'1rem'}} onClick={()=>navigation('/seat', {state:data.state})}>{time}</Button>
                            
                          ))
                        }
                  </div>
                  <hr></hr>
                  </div>

                  ))  
              }
        </Col>
      </Row>
      
      
      </div>
  )
}

export default Movie