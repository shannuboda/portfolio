import React, { useState } from 'react'
import './File.css'
import { Col, Row } from 'react-bootstrap'
import loginimage from '../assets/1.png'
import { useNavigate } from 'react-router-dom'
function Signup({setusername}) {
    let navigation = useNavigate()
    let [Username, setUsername] = useState('')
    let userchange = (e)=>{
        setUsername(e.target.value)
        console.log(Username)
    }
    let DataEnter = ()=>{
        localStorage.setItem('username',Username)
        setusername(Username)
        navigation('/')
    }
  return (
    <div className='main'>
    
        <Row>
                <Col>
                    <img src={loginimage} alt="" />
                </Col>
                <Col>
                <div className="form-box">
                    <form className="form">
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form-container1">
                            <input type="text" className="input1" placeholder="Full Name" />
			                <input type="email" className="input1" placeholder="Email" onChange={userchange} />
			                <input type="password" className="input1" placeholder="Password" />
                            <input type="password" className="input1" placeholder="Confirm Password" />

                        </div>
                        <button onClick={DataEnter}>Sign up</button>
                    </form>
                    <div className="form-section">
                            <p>Have an account? <span onClick={()=>navigation('/login')} className='navigation_links'>Login </span></p>
                    </div>
                </div>
                </Col>

        </Row>


    </div>
  )
}

export default Signup