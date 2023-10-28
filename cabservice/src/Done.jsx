import React from 'react'
import done from './assets/16.png'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './App.css'
function Done() {
  let navigation = useNavigate()
  return (
    <div className='done' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <img src={done} alt="" style={{width:'28rem'}}/>
          <h4 style={{color:'#fff'}}>Booking Confirmed</h4>
          <Button onClick={()=>navigation('/')}>Back to Home Page</Button>
    </div>
  )
}

export default Done