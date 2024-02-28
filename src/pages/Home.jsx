import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const[topMovies, setTopmMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopmMovies(data.results)
  }
  useEffect(() =>{
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`;
    getTopRatedMovies(topRatedUrl)



  },[])
  
  return (
    <div className="container">
      <h2 className="title">Melhores Avaliações:</h2>
      <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie= {movie} />)}
      </div>
    </div>
  )
}

export default Home