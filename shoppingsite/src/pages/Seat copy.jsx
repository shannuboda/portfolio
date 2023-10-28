import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DisplaySeat from './DisplaySeat'

function Seat() {
    let colsno = []
    //['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let moviedata = useLocation()
    let selectseates =[]
    let [noofseat,setnoofseat] = useState(0)
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
    let checkstat = e.target.checked
    if(checkstat)
    {
      console.log('checked')
      selectseates.push(e.target.name)
    }
    else
    {
      console.log('unchecked');
      selectseates = selectseates.filter((value)=>value!==e.target.name)
    }
  
    console.log(selectseates)
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
                              <input type="checkbox" className="radio-input" name ={value} value='' onChange={mydata}/>
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
                <h3>Selected Seats: {selectseates.join(',')}
                </h3>
                <h3>Total Amount Rs:{selectseates.length}</h3>
            </div>
         
        
    </div>
  )
}

export default Seat