import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {
    let imgBasics = "https://image.tmdb.org/t/p/w500";
    const [movieDetails, setMovieDetails] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);

    let { id } = useParams();

async function getMovieDetails(id){
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d35ae3cd41a496018e8fc5f43a486692`)
    setMovieDetails(data)
    console.log(data)
    setBackgroundImage(data.backdrop_path)
   
    }

    useEffect(()=>{
        getMovieDetails(id)
    },[])

  return (
    <>
    <div className="container-fluid p-0 MovieContainer roboto-slab-font  " style={{ backgroundImage: `url(${imgBasics}${backgroundImage})` }}>
        <div className="row movieRow " >
                <div className="col-md-4 mt-4 ">
                    <img  className="w-100 h-75 p-4 mx-4" src={`${imgBasics}${movieDetails.poster_path}`} alt="" />
                </div>
                <div className="col-md-7 mt-5 mx-4 text-white movieText">
                    <h2><b>{movieDetails.original_title}</b></h2>
                    <div className="div">
                        <p className=' d-inline '><b>Release Date: {movieDetails.release_date} </b></p>
                         <h4> Vote average: <h3 className="rounded-5  d-inline ">{movieDetails.vote_average}</h3></h4>
                         </div>
                         <p className=' fa-2x fw-lighter pt-3'> {movieDetails.tagline}</p>
                         <p className='pt-5'><span className=' fa-2x text-uppercase'> Overview </span><br />{movieDetails.overview} </p>
                </div>
        </div>
    </div>
    </>
  )
}
