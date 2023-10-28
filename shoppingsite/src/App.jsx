import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/2.png'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { Button } from 'react-bootstrap';
import Movie from './pages/Movie';
import Seat from './pages/Seat';
import Booked from './pages/Booked';

function App() {
  let navigation = useNavigate()
     let [user, setusername] = useState('')
     useEffect(() => {
      let usermail = localStorage.getItem('username');
      if (usermail) {
        setusername(usermail);
      }
    }, [])
    
  return (
    <>
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=>navigation('/')} style={{cursor:'pointer'}}>
            <img
              alt=""
              src={logo}
              width="40"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            <h2 style={{display:'inline'}}>TICKET BOX </h2>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          {user!=='' ? <Button onClick={()=>{
            localStorage.clear()
            navigation('/')
            location.reload()
          }}>LOGOUT</Button>:''}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/login' element={<Login setusername={setusername}></Login>}/>
        <Route path='signup' element={<Signup setusername={setusername}></Signup>} />
        <Route path='/' element={<Homepage user={user}></Homepage>} />
        <Route path='/movie/:id' element={<Movie></Movie>} />
        <Route path='/seat' element={<Seat></Seat>} />
        <Route path='/book' element={<Booked></Booked>} />

      </Routes>
      {/* <Signup></Signup>
      <Login></Login> */}
    </>
  )
}

export default App
