import React from 'react'
import {Helmet} from "react-helmet";
import { useEffect } from 'react';


export default function Profile() {
    useEffect(() => {
      document.title = "ABOUT";
    }, []);
  return (
    <>
      <div className=''>
        <div className="">
          <section className="about-us py-5  m-auto">
            <div className="container">
              <div className="row align-items-center">
                <div className="">
                  <h2 className="font-weight-bold mb-4 text-danger ">About NOXE </h2>
                  <p className="text-light mb-4">
                    NOXE is a modern movie platform created and developed by Mohamed Elwan.
                    The website provides users with up-to-date information about trending movies and TV shows, including trailers, ratings, and overviews — all in one place.
                    NOXE is committed to providing users with the best possible experience, and we are constantly working to improve our platform and services to meet the needs of our users.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="text-danger">Our Mission</h5>
                      <p className="">
                        Our mission at NOXE is to create a seamless and enjoyable experience for movie lovers by providing accurate, up-to-date, and visually engaging information about the latest films and TV shows.
                        We aim to make movie discovery easier, faster, and more inspiring for every user.
                      </p>
                    </div> 
                    <div className="col-md-6">
                      <h5 className="text-danger">Our Vision</h5>
                      <p>Our vision is to make NOXE one of the most trusted and creative movie platforms in the digital world — a place where innovation meets entertainment.</p>
                      We aspire to connect people through cinema, helping audiences explore stories that move and inspire them.
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary mt-4">Know More</a>
                </div>
                {/* <div className="col-md-6">
                  <img src="./affiche de l'élément de film atmosphérique gris….jpeg" alt="About Us" className="img-fluid rounded shadow" />
                </div> */}
              </div>
              <div className="row mt-5">
                <div className="col-md-3 col-6 mb-4">
                  <div className="text-center">
                    <i className="bi bi-people fs-1 text-primary mb-2" />
                    <h2 className="fw-bold">12,500+</h2>
                    <p className="text-danger">Active Users</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="text-center">
                    <i className="bi bi-briefcase fs-1 text-primary mb-2" />
                    <h2 className="fw-bold">8,900+</h2>
                    <p className="text-danger">Movies Listed</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="text-center">
                    <i className="bi bi-trophy fs-1 text-primary mb-2" />
                    <h2 className="fw-bold">4,000+</h2>
                    <p className="text-danger">Daily Visits</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <div className="text-center">
                    <i className="bi bi-globe fs-1 text-primary mb-2" />
                    <h2 className="fw-bold">1,200+</h2>
                    <p className="text-danger">Positive Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
