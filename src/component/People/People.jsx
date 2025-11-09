import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { MediaStore } from '../../Context/MediaStore.js';
import styles from './people.module.scss';
export default function People() {
  let {Trendingpeople} = useContext(MediaStore);
    useEffect(() => {
      document.title = "PEOPLE";
    }, []);

  return (
    <>
          <div className="row py-5 my-3 ">
            <div className="col-md-4">
              <div className={`${styles.brdr} w-25 mb-3`}></div>
              <h2>Trending <br/>People <br/>To Watch Now</h2>
              <span className='text-info py-3'>Most Watched Actors by days</span>
              <div className={`${styles.brdr} w-100 mt-3`}></div>
            </div>
            {Trendingpeople.slice(0, 10).map((person, index) => (
              <div key={index} className="col-md-2 mb-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className="img-fluid w-100"
                />
                <h2 className='h6 my-2'>{person.name}</h2>
              </div>
            ))}
          </div>
    </>
  );
}