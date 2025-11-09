import React, { useContext, useEffect } from 'react';
import { MediaStore } from '../../Context/MediaStore.js';
import styles from './movies.module.scss';
import { useNavigate } from 'react-router-dom'; 

export default function Movies() {
  const { Trendingmovies } = useContext(MediaStore);
  const navigate = useNavigate(); 
  useEffect(() => {
    document.title = "MOVIES";
  }, []);

  return (
    <>
      <div className="row py-5 my-3">
        <div className="col-md-4">
          <div className={`${styles.brdr} w-25 mb-3`}></div>
          <h2>Trending <br />Movies <br />To Watch Now</h2>
          <span className="text-info py-3">Most Watched Movies by days</span>
          <div className={`${styles.brdr} w-100 mt-3`}></div>
        </div>

        {Trendingmovies.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            className="col-md-2 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/movie/${movie.id}`)} // ✅ لما يضغط يروح لتفاصيل الفيلم
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid w-100 rounded-3 shadow"
            />
            <h2 className="h6 my-2 text-white">{movie.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
