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

  const routes = createHashRouter([
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
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
