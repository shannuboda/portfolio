import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Seat() {
    let colsno = []
    let navigation = useNavigate()
    //['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let moviedata = useLocation()
    let [seats,setseats] = useState([])
    let rows = 5
    let cols = 8
    let row = 1
    let col = 1
    let ch ='A'
    while(row <= rows)
    {
      col = 1
      while(col<=cols)
      {
        colsno.push(ch+col)
        col+=1
      }
      row+=1
      ch = String.fromCharCode((ch.charCodeAt(0))+1)
    }
    console.log(moviedata.state.title)
  const mydata = (e)=>{
    let seatName = e.target.name
    if(seats.includes(seatName))
    {
      setseats(seats.filter((seat)=>seat !== seatName))
    }
    else
    {
      setseats([...seats,seatName])
    }
  
    console.log(seats)
  }
  
  return (
    <div>
     <div>
            <h1 style={{margin:'2rem'}}>Movie Name : {moviedata.state.title}</h1>
            <h6 style={{textAlign:'center'}}>Screen Side Here</h6>
            <div className='seats' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
            {
      colsno.map((value)=>(
        <div className="radio" key={value}>
        <label className="radio-wrapper">
                              <input type="checkbox" className="radio-input" name ={value} onChange={mydata}/>
                                  <span className="radio-title">
                                    <span className="radio-icon"></span>
                                    <span className="radio-lable">{value}</span>
                                  </span>
                        </label>               
        </div>
      ))
      }       
    </div>
            </div>
            <div className='footer'>
                <h3>Selected Seats: {seats.join(',')} </h3>
                <Button variant="primary" onClick={()=>navigation('/book')}> BOOK MOVIE</Button>
                <h3>Total Amount Rs:{(seats.length)*100}</h3>
            </div>
         
        
    </div>
  )
}

export default Seat