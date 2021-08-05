import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/movie-context";

import noImage from "../utils/no-image-available.png";
import "../styles/MoviePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const MoviePage = () => {
  let { id } = useParams();
  const { showDetail, selectedMovie, setSelectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);

    return () => {
      setSelectedMovie({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (selectedMovie.backdrop_path && document.getElementById('background_image')) {
    document.getElementById('background_image').style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`
  } else if (document.getElementById('background_image')) {
    document.getElementById('background_image').style.backgroundImage = ''
  }

  return (
    <div className="detail-container shadow">
      <div className="row">
        <div className="col-md-5">
          <div className="poster">
            {selectedMovie.poster_path === "N/A" || selectedMovie.poster_path == null ? (
              <img src={noImage} alt={selectedMovie.Title} />
            ) : (
              <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            )}
          </div>
        </div>
        <div className="col-md-7">
          <div className="info">
            <div>
              <div className="field">
                <div className="title">
                  <p className="title label-p">{selectedMovie.title}</p>
                </div>
              </div>
              <div className="field">
                <div className="label">
                  <p className="label-overview">{selectedMovie.overview}</p>
                </div>
              </div>
              <div className="field">
                <div className="label">
                  RELESEAD: <span className="label-p">{selectedMovie.release_date}</span>
                </div>
              </div>
              <div className="field">
                <div className="label">
                  GENRE: <div className="label-p">{selectedMovie.genres?.map(genre => {
                    return <span key={genre.id} className="genre-label">{genre.name}</span>
                  })}</div>
                </div>
              </div>
              <div className="field">
                <div className="label">
                  LANGUAGE(S): <span className="label-p">{selectedMovie.original_language}</span>
                </div>
              </div>
            </div>


            <div className="movie-info">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
                  <div className="movie-infos">
                    <div className="label">POPULARITY</div>
                    <div className="row">
                      <div className="col-auto">
                        <FontAwesomeIcon icon={faChartLine} color="#0d8035" />
                      </div>
                      <div className="col text-left">
                        <div><span>{selectedMovie.popularity}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="movie-infos">
                    <div className="label">DURATION</div>
                    <div className="row">
                      <div className="col-auto">
                        <FontAwesomeIcon icon={faClock} color="#0d5d80" />
                      </div>
                      <div className="col text-left">
                        <div><span>{Math.floor(selectedMovie.runtime / 60)}h</span><span>{selectedMovie.runtime % 60}mins</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-md-left justify-content-center">
                  <div className="movie-infos">
                    <div className="label">RATING</div>
                    <div className="row">
                      <div className="col-auto">
                        <FontAwesomeIcon icon={faStarSolid} color='#edd040' />
                      </div>
                      <div className="col text-left">
                        <div><span id="value">{selectedMovie.vote_average}</span><span className="text-muted">/10</span></div>
                        <div className="text-secondary">{selectedMovie.vote_count}</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;