import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { MediaStore } from '../../Context/MediaStore.js';
import styles from './tv.module.scss';
import {  useNavigate } from 'react-router-dom'; 

export default function Tvshow() {
    const {Trendingtv} = useContext(MediaStore);
    const navigate = useNavigate(); 
      useEffect(() => {
        document.title = "TVSHOW";
      }, []);

  return (
    <>
      <div className="row py-5 my-3">
        <div className="col-md-4">
          <div className={`${styles.brdr} w-25 mb-3`}></div>
          <h2>Trending <br/>TV Shows <br/>To Watch Now</h2>
          <span className='text-info py-3'>Most Watched TV Shows by days</span>
          <div className={`${styles.brdr} w-100 mt-3`}></div>
        </div>
        {Trendingtv.slice(0, 10).map((tv, index) => (
          <div 
            key={tv.id} 
            className="col-md-2 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/movie/${tv.id}`)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              alt={tv.name}
              className="img-fluid w-100 rounded-3 shadow"
            />
            <h2 className='h6 my-2 text-white'>{tv.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}