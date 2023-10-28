import React, { useState } from 'react'
import './File.css'
import { Col, Row } from 'react-bootstrap'
import loginimage from '../assets/1.png'
import { useNavigate } from 'react-router-dom'
function Login({setusername}) {
  let [username, setUsername] = useState('')
  console.log(username)
  let navigation = useNavigate()
  const DoLogin = ()=>{
      localStorage.setItem('username', username)
      setusername(username)
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
                    <div className="form">
                        <span className="title">Login Here</span>
                        <div className="form-container">
			                <input type="email" className="input" placeholder="Email" style={{marginBottom:'2rem'}} onChange={(e)=>setUsername(e.currentTarget.value)}/>
			                <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button onClick={DoLogin}>Login</button>
                    </div>
                    <div className="form-section">
                            <p>Don't Have an account? <span onClick={()=>navigation('/signup')} className='navigation_links'>SignUp </span></p>
                    </div>
                </div>
                </Col>

        </Row>


    </div>
  )
}

export default Login