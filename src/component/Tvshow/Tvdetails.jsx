import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tvDetails, setTvDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "TV Show Details";

    async function getTvDetails() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}`,
          {
            params: {
              api_key: '2ca7fbc02c5b8e1ad9a101ac9b39e422', // ✅ الصح
              language: 'en-US'
            }
          }
        );
        setTvDetails(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
        setError("Failed to load TV show details");
      } finally {
        setLoading(false);
      }
    }
    
    getTvDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-white mt-5">
        <i className="fas fa-spinner fa-spin fa-3x"></i>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white mt-5">
        <div className="alert alert-danger">{error}</div>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  if (!tvDetails) {
    return <div className="text-center text-white mt-5">No movie found</div>;
  }

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-light mb-3"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>
      
      <div className="row align-items-center text-white">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
            alt={tvDetails.title}
            className="w-100 rounded-3 shadow"
          />
        </div>
        
        <div className="col-md-8">
          <h2>{tvDetails.title}</h2>
          <p className="text-info">{tvDetails.overview}</p>
          
          <ul className="list-unstyled">
            <li className="text-info my-4  " ><strong className="text-warning">Rating:</strong> ⭐ {tvDetails.vote_average.toFixed(1)}/10</li>
            <li  className="text-info my-4 "><strong className="text-warning">Release Date:</strong> {tvDetails.release_date}</li>
            <li className="text-info my-4 "><strong className="text-warning">Language:</strong> {tvDetails.original_language.toUpperCase()}</li>
            <li className="text-info my-4 "><strong className="text-warning">Runtime:</strong> {tvDetails.runtime} minutes</li>
          </ul>
          
          {tvDetails.genres && (
            <div className="mt-3">
              <strong >Genres:</strong>
              {tvDetails.genres.map((genre) => (
                <span key={genre.id} className="badge bg-primary me-2 ms-2">
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}