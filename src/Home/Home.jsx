import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import MovieCart from '../MovieCart/MovieCart'

export default function Home() {
 const [movies, setMovies] = useState([])

async function getMovies(){
    let {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d35ae3cd41a496018e8fc5f43a486692')
    setMovies(data.results);
    console.log(data.results )
  }

async function searchMovie(word){
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d35ae3cd41a496018e8fc5f43a486692&query=${word}&language=en-US&page=1`)
    setMovies(data.results)
    console.log(data.results)
  }
useEffect(()=>{
  getMovies()
  
},[])
  return (
    <>
      <h2 className="text-center bg-dark text-white p-3 text-uppercase roboto-slab-font ">Most Popular Movies</h2>
      <div className="container my-2">
        <div className="row">
          {movies? movies.map( movie=> {
            return <MovieCart movie={movie} key={movie.id}/>
          })
              : <h2> You do not have any Movies</h2>}
        </div>
      </div>
    </>
  )
}
