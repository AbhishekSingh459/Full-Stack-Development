import "./Movie_list.css"
import movies from "./Movies"

const Movie_list = () => {
  return (
    <div className="movies-list">
        {movies.map((movies)=>(
            <div key = {movies.id} className="movie-card">
                <img src={movies.image} id="movie-img"/>
                <h1 id="movie-title">Title:{movies.title}</h1>
                <h2 id="movie-language">Language:{movies.Language}</h2>
                <h2  id="movie-cost">Cost:{movies.cost}</h2>
            </div>
            
        ))}
    </div>
  )
};

export default Movie_list