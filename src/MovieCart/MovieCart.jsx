import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCart({movie}) {

    let imgBasics = "https://image.tmdb.org/t/p/w500"

  return (
        <div className="col-md-2 item rounded-2 shadow-lg m-3 cursor-pointer p-0 ">
            <Link to={`movieDetails/${movie.id}`} className="text-decoration-none" >
            <div className='image-item'>
                <img  className='w-100 rounded-2' src={`${imgBasics}${movie.poster_path}`} alt="" />
            <div className="average">
                {movie.vote_average} <span className='icon'><i class="fa-solid fa-star"></i></span>
            </div>
            </div>
            <div className='content'>
                <p className= "title p-0 text-uppercase fw-bolder">{movie.title}</p>
                <p className=' text-black fst-italic '>Release Date: {movie.release_date}</p>
            </div>
            </Link>
        </div>
)
}
