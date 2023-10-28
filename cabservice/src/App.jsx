import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Cabs from './Cabs'
import car from './assets/car.svg'
import Book from './Book'
import Done from './Done'
function App() {
  
  return(
      <div>
         <div className='nav'>
            <div className='nav1'>
            <img src={car} alt=""/>
            <h3 style={{fontSize:'2rem',color:'white'}}>My<span style={{color:'#fdb813'}}>CABS</span></h3>
            </div>
           <div className='nav2'>
            <h3 style={{color:'white',display:'inline',marginRight:'5rem',fontSize:'2rem'}}>BOOK YOUR CAB HERE</h3>
            </div>
          </div>
       
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/cabs' element={<Cabs></Cabs>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        <Route path='/done' element={<Done></Done>}></Route>

      </Routes>

      </div>
      
  )
}
const Home = ()=>{
  let navigation = useNavigate()
  let [sourcedest, setSourceDest] = useState({})

  let changeloc = (e)=>{
      let name = e.target.name
      if(name == 'source')
      {
        setSourceDest({
          ...sourcedest,
          source:e.target.value
        })
        console.log(sourcedest)
      }
      else if(name=='destination')
      {
        setSourceDest({
          ...sourcedest,
          destination:e.target.value
        })
        console.log(sourcedest)
      }
  }
  let gocab = ()=>{
    if(sourcedest.source==null || sourcedest.destination==null)
    {
      alert('fill the all details')
    }
    else
    {
      navigation('/cabs', {state:sourcedest})
    }
  }
  return(
  <>
     
          <div className='card-container'>
                <div>
                  <h3>All India Cab Service</h3>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                      <div className="radio">
		                        <label className="radio-wrapper">
			                            <input type="radio" className="radio-input" name="batch" value="" />
			                                <span className="radio-title">
				                                <span className="radio-icon">
    
				                                </span>
				                                <span className="radio-lable">Local Cabs</span>
			                                </span>
		                        </label>
	                        </div>
                             <div className="radio">
		                        <label className="radio-wrapper">
			                            <input type="radio" className="radio-input" name="batch" value="" />
			                                <span className="radio-title">
				                                <span className="radio-icon">
                                                   
				                                </span>
				                                <span className="radio-lable">Out Of Station</span>
			                                </span>
		                        </label>
	                        </div>
                </div>
                <hr></hr>
                <div className="wrapper">
 <input type="radio" name="radio" id="option-1"/>
 <input type="radio" name="radio" id="option-2" />
   <label htmlFor="option-1" className="option option-1">
     <div className="dot"></div>
      <span>Round Trip</span>
      </label>
   <label htmlFor="option-2" className="option option-2">
     <div className="dot"></div>
      <span>One Way Trip</span>
   </label>
</div>

<p style={{textAlign:'center',marginTop:'1rem'}}>*For Multiple stops choose Round Trip</p>
      <div className="forms">
       <input type="search" name="source" id="source" placeholder='Enter Source point' onChange={changeloc} required />
       <input type="search" name="destination" id="destination" placeholder='Enter Destination point' onChange={changeloc} required />
        <button id='check_cabs' onClick={gocab}>Check Cabs</button>
        </div>

    </div>

  </>
)}

export default App
