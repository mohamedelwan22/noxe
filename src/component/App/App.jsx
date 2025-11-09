import '../App/App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Masterlayout from '../Masterlayout/Masterlayout';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import MovieDetails from '../Movies/MovieDetails.jsx';
import People from '../People/People.jsx';
import Register from '../Register/Register.jsx';
import Network from '../Network/Network.jsx';
import Tvshow from '../Tvshow/Tvshow.jsx';
import Error from '../Error/Error.jsx';
import { useContext } from 'react';
import { AuthStore } from '../../Context/AuthStore.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { Online, Offline } from 'react-detect-offline';

function App() {
  const { userData, saveuserdata } = useContext(AuthStore);

  let routes = createHashRouter([
    {
      path: '/',
      element: <Masterlayout userData={userData} />,
      errorElement: <Error />,
      children: [
        { index: true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'tvshow', element: <ProtectedRoute userData={userData}><Tvshow /></ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute userData={userData}><Profile userData={userData} /></ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute> },
        { path: 'movie/:id', element: <ProtectedRoute userData={userData}><MovieDetails /></ProtectedRoute> },
        { path: 'network', element: <ProtectedRoute userData={userData}><Network /></ProtectedRoute> },
        { path: 'people', element: <ProtectedRoute userData={userData}><People /></ProtectedRoute> },
        { path: 'about', element: <About /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login saveuserdata={saveuserdata} /> },
      ],
    },
  ]);

  return (
    <div>
      <Online>
        <RouterProvider router={routes} />
      </Online>
      <Offline>
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 9999 }}>
          <div className="text-center text-white p-5 bg-danger rounded">
            <i className="fas fa-wifi-slash fa-5x mb-4"></i>
            <h1 className="display-4 fw-bold">No Internet Connection</h1>
            <p className="lead mt-3">
              Please check your internet connection and try again
            </p>
            <div className="spinner-border text-light mt-3" role="status">
              <span className="visually-hidden">Waiting for connection...</span>
            </div>
            <p className="mt-3 text-light">Waiting for connection...</p>
          </div>
        </div>
      </Offline>
    </div>
  );
}

export default App;
