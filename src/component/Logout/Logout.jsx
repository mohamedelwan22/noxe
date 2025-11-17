import { useContext } from 'react';
import { AuthStore } from '../../Context/AuthStore';

export default function useLogout() {
  const { saveuserdata } = useContext(AuthStore);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    saveuserdata(null);
  };

  return logout;
}
