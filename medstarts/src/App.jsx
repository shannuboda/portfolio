import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Hospital from './Hospital'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/medstars_logo.webp'

function App() {
  let [hospitals, setHospitals] = useState([])
  let [latlng, setLatLng] = useState({})
  let getmydata = async (URL) =>
  {
    let result = await fetch(URL)
    let data = await result.json()
    setHospitals(data.features)
  }
  useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position=>{
    var url=`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${position.coords.longitude},${position.coords.latitude},5000&bias=proximity:${position.coords.longitude},${position.coords.latitude}&limit=20&apiKey=6fac5aa7a9864c39a178b5c466212b3b`
            setLatLng({
              lat:position.coords.latitude,
              lng:position.coords.longitude
            });
            getmydata(url)
    }));
  }     
  },[])
  return (
    <>
    {console.log(latlng)}
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}><img
              alt=""
              src={Logo}
              width="190"
              height="45"
              className="d-inline-block align-top"
            /></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
          <Routes>
            <Route path='/' element={<MyApp hospitals={hospitals}></MyApp>} />
            <Route path='/hospital' element={<Hospital latlng={latlng}></Hospital>} />
           </Routes>
    </>
  )
}

let MyApp = ({hospitals})=>{
  let navigation = useNavigate()

  return(
    <>
       {console.log(hospitals)}
          <div className='boxes'>
            {
              hospitals.map((hospital,index)=>{
                return(
                  <div className='box' key={index} onClick={()=>navigation('/hospital',{state:hospital})}>
                  <h5>{hospital.properties.name}</h5>
                  <div className='line'></div>
                  <p>{hospital.properties.formatted}</p>
                  <p>Contact No: {hospital.properties.datasource.raw.osm_id}</p>  
              </div>
                )
              })
            }
          </div>
    </>
  )
}

export default App
