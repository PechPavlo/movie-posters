import React from 'react';
import './App.css';
import { API_KEY_3, API_URL } from '../utils/api'
// import {moviesData} from './moviesData';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs'
import { render } from 'react-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: "revenue.desc"
    }
  }
  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}`)
      .then(response => response.json())
      .then(results => this.setState({ movies: results.results }))
  }
  componentDidMount() {
    this.getMovies()
    console.log(this.state.movies)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies()
    }
  }
  delButtonHandler = movie => {
    const updatedMovie = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updatedMovie
    });
  }
  addWillWatch = movie => {
    let myWishList = [...this.state.moviesWillWatch];
    myWishList.push(movie);
    this.setState({
      moviesWillWatch: myWishList
    });
    console.log(this.state.moviesWillWatch);
  }
  delWillWatch = movie => {
    const updatedWishList = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updatedWishList
    });
    console.log(updatedWishList)
  }

  updateSortBy = value => {
    this.setState({
      sortBy: value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sortBy={this.state.sortBy}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      // delButtonHandler={this.delButtonHandler}
                      addWillWatch={this.addWillWatch}
                      delWillWatch={this.delWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
            <ol>
              {this.state.moviesWillWatch.map((movieList) => {
                return (<li key={movieList.id}
                  onClick={this.delWillWatch.bind(this, movieList)}>
                  {movieList.title}
                </li>)
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
