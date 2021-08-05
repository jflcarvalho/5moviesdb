import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const API_KEY = '968fb5a65a952f808c953cc7b0b1a0cc'; // TMDb API Key
const number_of_movies = 3;

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const fetchMovies = async () => {
    const response = await axios(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.data;
    setMovies(data.results.sort(() => 0.5 - Math.random()).slice(0, number_of_movies));
  };

  const showDetail = async (id) => {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`
    );
    const data = response.data;
    setSelectedMovie(data);
    return data.id
  };

  const searchMovies = async (search) => {
    const response = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
    );
    const data = response.data;
    setMovies(data.results.slice(0, number_of_movies));
  }

  useEffect(() => {
    if (search.length !== 0) {
      searchMovies(search);
    }
    else {
      fetchMovies();
    }
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        showDetail,
        selectedMovie,
        setSelectedMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;