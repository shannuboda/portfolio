import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './File.css'

function Homepage({user}) {
  let navigation = useNavigate()
  if(!user)
  {
    navigation('/login')
  }
    let MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=35aef00d99bc89ad91523a0aa5a81697&page=2';
    let IMAGE_API = 'https://image.tmdb.org/t/p/w500'
    
    let [isloading,setIsloading] = useState(false)
    let [mymovies, setMymovies] = useState([])
    let getMyMovieData = async (URL)=>{
        setIsloading(true)
        let result = await fetch(URL)
        let data = await result.json()
        setMymovies(data.results)
        setIsloading(false)
    }
        useEffect(()=>{
        getMyMovieData(MOVIE_API)
        },[])

        if(isloading)
        {
            return(
                <h1>PLS WAIT DATA IS LOADING......</h1>
            )
        }
  return (
    <div>
         <h2 style={{padding:'1rem',textAlign:'center',color:'red',textDecoration:'underline'}}>Hurrah!!!!! Your Movies List is There</h2>
        <div className='movies'>
            {
                mymovies.map((eachmovie)=>(

                    <Card key = {eachmovie.id}>
                    <Card.Img variant="top" src={IMAGE_API+eachmovie.poster_path} />
                    <Card.Body className='card-body'>
                      <Card.Title>{eachmovie.title}</Card.Title>
                      <Card.Text>
                        {eachmovie.overview}
                      </Card.Text>
                      <Button variant="primary" onClick={()=>navigation(`/movie/${eachmovie.id}`,{state:eachmovie})}> BOOK MOVIE</Button>
                    </Card.Body>
                  </Card>
                ))
            }
         </div>
    </div>
  )
}

export default Homepage