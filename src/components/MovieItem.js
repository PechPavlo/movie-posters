import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            willWatch: false
        };
    }
    handlerWillWatch = () => {
        let { movie, addWillWatch, delWillWatch } = this.props;
        if (!this.state.willWatch) {
            return (addWillWatch(movie),
                this.setState({
                    willWatch: !this.state.willWatch
                }))
        } else {
            return (delWillWatch(movie),
                this.setState({
                    willWatch: !this.state.willWatch
                }))
        }
    }
    render() {
        let { movie, delButtonHandler, addWillWatch } = this.props;
        return (
            <div className="card">
                <img
                    className="card-img-top my-card-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                    alt=""
                />
                <div className="card-body card-movie">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        <button
                            type="button"
                            className={`btn btn-${this.state.willWatch ? 'secondary' : 'warning'}`}
                            onClick={this.handlerWillWatch}
                        >
                            +
                            </button>
                    </div>
                    {/* <button 
                    type='button'
                    className="btn btn-primary"
                    onClick={delButtonHandler.bind(this, movie)}
                    >
                    Delete Movie
                    </button> */}
                </div>
            </div>
        );
    }
}

export default MovieItem;