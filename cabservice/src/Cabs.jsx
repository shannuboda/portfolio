import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import cabdata from './assets/cabdata.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cabs() {
    let data = useLocation()
    console.log(data)
    let navigation = useNavigate()
    let cab_data  = cabdata
    console.log(data.state)
    const bookcab = (carName,carType, fair)=>{
      const cab_datanew = 
        {...data.state,
        carname:carName,
        cartype:carType,
        fair:fair,
        }
      
      navigation('/book',{state:cab_datanew})
    }
  
  return (
    <div>
        
        <div className="cabcontainer">
            {
              cab_data.map((value,index)=>(
                <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={value.cabImage} style={{width:'13rem'}}/>
                <Card.Body>
                  <Card.Title className='title'> <span>&#x20B9; 3777</span> &#x20B9; {value.rentPrice}</Card.Title>
                  <Card.Text className='carname'> {value.cabName} </Card.Text>
                  <hr></hr>
                  <Card.Text className='cartype'> {value.cabType} </Card.Text>
                  <hr></hr>
                  <div className="details">
                    <p>Include Km: &#10230; <span style={{marginLeft:'4.3rem'}}>&#x20B9; {value.includedKm}</span></p>
                    <p>Extra Fare Km: &#10230; <span style={{marginLeft:'3rem'}}>&#x20B9; {value.extraFarePerKm}</span></p>
                    <p>Driving charges: &#10230; <span style={{marginLeft:'2rem'}}>&#x20B9; {value.driverCharges}</span></p>
                    <p>Arrival Times: &#10230; <span style={{marginLeft:'2.7rem'}}> {value.Arrival_Time}</span></p>
                  </div>
                  <Button variant="outline-warning" onClick={()=>{bookcab(value.cabName,value.cabType,value.rentPrice)}}>BOOK YOUR CAB</Button>
                </Card.Body>
              </Card>
              ))
            }
             
        </div>

    </div>
  )
}

export default Cabs