import React from 'react';

class MovieTabs extends React.Component {
    handleClick = (value) => () => {
        let { updateSortBy } = this.props;
        return (
            updateSortBy(value))
    }
    getClassLink = (value) => {
        let { sortBy } = this.props;
        return `nav-link ${sortBy === value ? 'active' : 'secondary'} mb-4`
    }
    render() {
        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={this.getClassLink("popularity.desc")}
                        onClick={this.handleClick("popularity.desc")}
                    >
                        Popularity desc
                </div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("revenue.desc")}
                        onClick={this.handleClick("revenue.desc")}
                    >
                        Revenue desc
                </div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("vote_average.desc")}
                        onClick={this.handleClick("vote_average.desc")}
                    >
                        Vote average desc
                </div>
                </li>
            </ul>
        );
    }

}

export default MovieTabs