import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Login({saveuserdata}) {
  useEffect(() => {
    document.title = "LOGIN";
  }, []);
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState('');
  
  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const getinputvalue = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const submitformdata = async (e) => {
    e.preventDefault();
    setErrormsg('');

    try {
      // ✅ امسح المسافات من الرابط!
      const { data: allUsers } = await axios.get(
        'https://68ff5c5ae02b16d1753d9abf.mockapi.io/NOXE/users'
      );

      const existingUser = allUsers.find(u => u.email === user.email);

      if (existingUser && existingUser.password === user.password) {
        const fakeToken = "fake-token-" + Date.now();
         localStorage.setItem("token", fakeToken);
        localStorage.setItem('user', JSON.stringify(existingUser));
        saveuserdata();
        navigate('/');
      } else if (!existingUser) {
        setErrormsg('Email not registered. Please register first.');
        navigate('/Register'); // اختياري — متسيبش المستخدم يهرب من الصفحة فجأة
      } else {
        setErrormsg('Invalid email or password');
      }
    } catch (error) {
      setErrormsg('⚠️ حدث خطأ أثناء تسجيل الدخول، حاول مرة أخرى.');
      console.error(error);
    }
  }; // ← دي نهاية الدالة — لازم تكون هنا!

  // 👇 ده بداية الـ return بتاع الـ component
  return (
    <>
      <div className="w-75 m-auto py-5">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>LOGIN</title>
        </Helmet> */}
        <h2>Login Form</h2>
        {errormsg ? <div className="alert alert-danger p-2">{errormsg}</div> : ''}
        <form onSubmit={submitformdata}>
          <div className="input-data my-2">
            <label htmlFor="email">Email:</label>
            <input
              onChange={getinputvalue}
              type="email"
              className="form-control my-2"
              name="email"
              required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password:</label>
            <input
              onChange={getinputvalue}
              type="password"
              className="form-control my-2"
              name="password"
              required
            />
          </div>
          <div className="float-start mt-3 ">
            don't have account ? <Link className="link-underline link-underline-opacity-0 ms-1 text-info fw-bold" to="/Register" >Register</Link>
          </div>
          <button className="btn btn-info mt-3 float-end" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}