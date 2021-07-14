import React,{useEffect,useState} from 'react'
import axios from './axios';
function Row({title,fetchUrl,isLargeRow=false}) {
    const baseurl='https://image.tmdb.org/t/p/original/';
    const [movies,setMovies]=useState([])
    useEffect(()=>{
          async function fetchData(){
              const request =await axios.get(fetchUrl)
              console.log("request",request)  
              setMovies(request.data.results);
                return request
            }  
           
            fetchData();
    },[fetchUrl])
    console.log("movies",movies);
    return (
        <div className="row">
           <h2 className="poster_title">{title}</h2> 
           <div className="row__posters">
             {movies.map(movie=>(
                 <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                 key={movie.id}
                 src={`${baseurl}${isLargeRow?movie.poster_path:movie?.backdrop_path}
                 `}
                 alt={movie.name}/>
             ))} 
             </div>           
        </div>
    )
}

export default Row
