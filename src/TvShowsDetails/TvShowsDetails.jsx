import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


export default function TvShowsDetails() {
    let imgBasics = "https://image.tmdb.org/t/p/w500";
    const [TvDetails, setTvDetails] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);

    let { id } = useParams();

async function getTvDetails(id){
    let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=d35ae3cd41a496018e8fc5f43a486692`)
    setTvDetails(data)
    console.log(data)
    setBackgroundImage(data.backdrop_path)
   
    }

    useEffect(()=>{
        getTvDetails(id)
    },[])

    return (
        <>
        <div className="container-fluid p-0 MovieContainer " style={{ backgroundImage: `url(${imgBasics}${backgroundImage})` }}>
            <div className="container-fluid containerAmg">
            <div className="row movieRow " >
                    <div className="col-md-4 mt-4 ">
                        <img  className="w-100 h-75 p-2" src={`${imgBasics}${TvDetails.poster_path}`} alt="" />
                    </div>
                    <div className="col-md-8 mt-5 text-white movieText">
                        <h2 className='d-inline'><b>{TvDetails.name}</b></h2>
                        <p className=' d-inline'><b> ({TvDetails.first_air_date})</b></p>
                        <div className="div">
                             <b> vote average: <p className="rounded-5 averagee d-inline ">{TvDetails.vote_average}</p></b>
                             </div>
                             <p>Number of episodes : {TvDetails.number_of_episodes}</p>
                             <p>Number of seasons : {TvDetails.number_of_seasons}</p>
                             <p> {TvDetails.tagline}</p>
                             <h2 className=' pt-5 fa-1x'><b>overview </b> <br />{TvDetails.overview} </h2>
                    </div>
            </div>
            </div>
        </div>
        </>
      )
}


