import React from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Book() {
    let maindata = useLocation()
    console.log(maindata)
    let navigation = useNavigate()
    let {source,destination,carname,cartype,fair} = maindata.state
  return (
    <div className='booking'>
      <div className="Booking_form">
        <div className='cab_details'>
            <h4>Tour: <span style={{color:'red' }}>{source} </span >&#10230; <span style={{color:'red'}}>{destination}</span></h4>
            <h4>CabName: <span style={{color:'red'}}>{carname} </span ></h4>
            <h4>CabType: <span style={{color:'red'}}>{cartype} </span >||| Fair: <span style={{color:'red'}}>{fair} </span ></h4>
            <hr></hr>
         </div>
        <h3>Enter Details To Book</h3>
       <input type="text" name="Name" id="name" placeholder='Enter Full Name' />
       <input type="tel" name="Phone" id="phone" placeholder='Enter Mobile Number'/>
       <input type="number" name="Members Number" id="mem" placeholder='Enter Number of Passengers' />
        <button id='check_cabs2' style={{width:'24rem'}} onClick={()=>navigation('/done')}>Book Now</button>
        </div>
        

    </div>
  )
}

export default Book