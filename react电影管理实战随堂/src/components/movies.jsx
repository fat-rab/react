import React, { Component } from "react";
import ListGroup from "./list/listGroup";
import MoviesTable from "./table/moviesTable";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      seletedGenre: "全部电影",
    };
  }
  handleGenreSelect = (selectItem) => {
    this.setState({
      seletedGenre: selectItem,
    });
  };
  handleLike = (movie) => {
    //多层嵌套所以用两次解构
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies,
    });
  };
  getPageDate = () => {
    const { movies, seletedGenre } = this.state;
    const filterd =
      seletedGenre && seletedGenre !== "全部电影"
        ? movies.filter((movie) => {
            return movie.genres.indexOf(seletedGenre) >= 0;
          })
        : movies;
    return { totalCount: filterd.length, movies: filterd };
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
    });
  }
  render() {
    const { genres, seletedGenre } = this.state;
    const { movies, totalCount } = this.getPageDate();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={seletedGenre}
            onItemSelect={this.handleGenreSelect}
          ></ListGroup>
        </div>

        {totalCount ? (
          <div className="col">
            <div>一共有{totalCount}部电影</div>
            <MoviesTable movies={movies} onLike={this.handleLike}></MoviesTable>
          </div>
        ) : (
          <div>没有电影</div>
        )}
      </div>
    );
  }
}

export default Movies;
