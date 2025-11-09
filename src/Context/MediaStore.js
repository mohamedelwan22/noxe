import { createContext, useState } from 'react'; 
import { useEffect } from 'react';
import axios from 'axios';

export const MediaStore = createContext(0);

export default function MediaStoreProvider(props) {
    const [Trendingmovies, setTrendingmovies] = useState([]);
    const [Trendingtv, setTrendingtv] = useState([]);
    const [Trendingpeople, setTrendingpeople] = useState([]);


    let getTrendingitems = async(mediatype ,callback) => {
        try {
           let {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/${mediatype}/day?language=en-US`,
            {
              params: {
                api_key: '2ca7fbc02c5b8e1ad9a101ac9b39e422',
                language: 'en-US'
              }
            }
          );
           callback(data.results);
          console.log(data.results);
        } catch (error) {
          console.error('Error:', error);
        }
      } 

      useEffect(() => {
          getTrendingitems('movie', setTrendingmovies);
          getTrendingitems('tv', setTrendingtv);
          getTrendingitems('person', setTrendingpeople);
        }, []);

    return <MediaStore.Provider value={{Trendingmovies,Trendingtv,Trendingpeople}} >
        {props.children}
    </MediaStore.Provider>
}
    