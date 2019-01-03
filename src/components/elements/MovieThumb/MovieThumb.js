import React from "react";
import "./MovieThumb.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`
          }}
        >
          <img src={props.image} alt="moviethumb" />
        </Link>
      ) : (
        <img src={props.image} alt="moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  moveName: PropTypes.string
};

export default MovieThumb;
