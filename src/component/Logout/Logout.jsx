import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthStore } from '../../Context/AuthStore';

export default function Logout() {
  const navigate = useNavigate();
  const { saveuserdata } = useContext(AuthStore);

  useEffect(() => {
    // حذف التوكن والبيانات من localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // إعادة تعيين الـ userData في Context
    saveuserdata(null);

    // إعادة التوجيه لصفحة login
    navigate('/login');
  }, []);

  return null;
}
