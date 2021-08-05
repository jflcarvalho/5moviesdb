import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Input from "../components/input";
import { MovieContext } from "../context/movie-context";
import Card from "../components/card";
import "../styles/Home.css";
import noImage from "../utils/no-image-available.png";

const Home = () => {
  const { setSearch, movies } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (document.getElementById('background_image')) {
    document.getElementById('background_image').style.backgroundImage = ''
  }

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      {/* conditional rendering */}
      {movies?.length > 0 ? (
        <div className="movies row">
          {movies?.map((movie) => {
            return (
              <Link
                to={`movies/${movie.id}`}
                className="text-link col-sm-4"
                key={movie.id}
              >
                <Card
                  key={movie.id}
                  image={
                    movie.poster_path === "N/A" || movie.poster_path == null ? noImage
                      : (`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
                  }
                  title={movie.title}
                  year={movie.release_date}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default Home;