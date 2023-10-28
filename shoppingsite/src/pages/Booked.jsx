import React from 'react'
import { Col, Row } from 'react-bootstrap'
import popcorn from '../assets/3.png'
import QR from '../assets/4.png'
function Booked() {
  return (
    <div style={{overflowX:'hidden'}} draggable="false">
        <Row style={{display:'flex',marginLeft:'4rem'}}>
            <Col>
                <div>
                    <img src={popcorn} alt="popcorn"  style={{width:'25rem',marginLeft:'4rem'}} />
                    <div style={{display:'flex',flexDirection:'column',margin:'3rem'}}>
                    <h4 style={{fontSize:'2rem'}}>Tickets Confirmed</h4>
                    <p style={{fontSize:'1rem'}}>Enjoy Your Movie</p>
                    </div>
                </div>
            </Col>
            <Col>
                    <img src={QR} alt="QR CODE" srcset="" style={{width:'20rem',marginTop:'4rem'}}/>
            </Col>
        </Row>
    </div>
  )
}

export default Booked