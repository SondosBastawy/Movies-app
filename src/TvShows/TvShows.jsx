import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



export default function TvShows() {

let imgBasics = "https://image.tmdb.org/t/p/w500"
const [tvShows, setTvShows] = useState([]);

async function getTvShows(){
    let {data} = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=d35ae3cd41a496018e8fc5f43a486692')
    setTvShows(data.results)
    
}

useEffect(()=>{
getTvShows();
},[])


return (
    <>
        <h2 className="text-center bg-dark text-white p-2 text-uppercase roboto-slab-font ">Most Popular Tv Shows</h2>
        <div className="container">
        <div className="row">
          {tvShows? tvShows.map((tvShow)=><div key={tvShow.id} className="col-md-2 item rounded-2 shadow-lg m-3 px-1">
            <Link to={`/tvDetails/${tvShow.id}`} className='text-decoration-none text-black'>
              <div className='image-item'>
                <img  className='w-100 rounded-2' src={`${imgBasics}${tvShow.poster_path}`} alt="" />
              <div className="average ">
                {tvShow.vote_average} <span className='icon'><i class="fa-solid fa-star"></i></span>
              </div>
              </div>
              <div className='content'>
                <p><b>{tvShow.name}</b></p>
              <p className= ''>Release Date: {tvShow.first_air_date}</p>
              </div>
            </Link>
            </div>)
              : ""}
        </div>
      </div>

    </>
  )
}
