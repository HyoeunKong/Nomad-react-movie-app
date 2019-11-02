import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'



function Movie({title, poster, genres, summary}){
    return(
        <div className = "Movie">
            <div className = "Movie_Columns">
            <MoviePoster poster = {poster} alt ={title}/>
            </div>
            <div className ="Movie_Columns">
                <h1>{title}</h1>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre= {genre} key={index} />)}
                </div>
                 <p className="Movie_Summary">
                     {summary}</p>    
            </div>
        </div>

    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary:  PropTypes.string.isRequired
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt ={alt} title={alt} className="Movie_Poster" />
    )
}


function MovieGenre({genre}){
    return(
        <span className = "Movie__Genre">{genre}</span>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}



export default Movie