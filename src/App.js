import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
      title = {movie.title_english} 
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      summary={movie.summary}
     />
    })
    return movies
  }


  _getMovies = async () => {
    const movies = await this._callApi() 
    this.setState({
      movies
    })
    console.log(movies)
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
   
  }
  render(){
    return(
      <div className = {this.state.movies ? "App" : "App--loading"}>
      {this.state.movies ? this._renderMovies() : 'loding'}
      </div>
    );
  }
}
 
//state를 변경하면 새롭게 render가 된다 새로운 state 와 함께
export default App;
