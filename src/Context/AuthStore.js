import { createContext, useState } from 'react'; 
import { useEffect } from 'react';
import React from 'react';


export const AuthStore = createContext(0);

export default function AuthStoreProvider(props) {
   const [userData, setUserData] = useState(null);

  let saveuserdata = () => {
    const token = localStorage.getItem('token');
    const userJson = localStorage.getItem('user');

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        setUserData(user);
        console.log("✅ User logged in:", user);
      } catch (e) {
        console.error("Failed to parse user data");
        setUserData(null);
      }
    } else {
      setUserData(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  useEffect(() => {
    saveuserdata();
  }, []);



    return <AuthStore.Provider value={{userData, logout , saveuserdata}} >
        {props.children}
    </AuthStore.Provider>
}
    