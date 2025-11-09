import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";


export default function Register() {
    useEffect(() => {
    document.title = "REGISTER";
  }, []);
  let navigate = useNavigate();
  const [errormsg, setErrormsg] = useState('');

  const [user, setuser] = useState({
    'first-name': '',
    'last-name': '',
    'age': '',
    'email': '',
    'password': '',
  });

  // ✅ التحقق من صحة البيانات باستخدام Joi
  let validateformdata = (user) => {
    const schema = Joi.object({
      'first-name': Joi.string().alphanum().min(2).max(20).required(),
      'last-name': Joi.string().alphanum().min(2).max(20).required(),
      'age': Joi.number().min(10).max(100).required(),
      'email': Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      'password': Joi.string().min(4).max(20).pattern(/^[a-z][0-9]{3}$/).required(),
    });

    // 👇 بيرجع نتيجة التحقق
    return schema.validate(user , { abortEarly: false }); 
  };

  // ✅ حفظ القيم عند الكتابة
  let getinputvalue = (e) => {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setuser(myuser);
  };

  // ✅ إرسال النموذج
  let submitformdata = async (e) => {
    e.preventDefault();
    setErrormsg('');

    // 1️⃣ تحقق من الفورم قبل الإرسال
    const { value ,error } = validateformdata(user);
    console.log('value' , value);
    console.log('error' , error);
      if (error) {
    // 👈 في أخطاء في التحقق
    console.log("Validation Error:", error.details);
    setErrormsg(error.details[0].message); // أول خطأ
    return;
  }

  console.log("Validation Success! Clean data:", value);
    if (error) {
      setErrormsg(error.details[0].message);
      return;
    }

    try {
      // 2️⃣ جلب كل المستخدمين الحاليين من الـ mockAPI
      let { data: allUsers } = await axios.get(
        'https://68ff5c5ae02b16d1753d9abf.mockapi.io/NOXE/users'
      );

      // 3️⃣ التأكد إن الإيميل مش متسجل بالفعل
      let emailExists = allUsers.some((u) => u.email === user.email);

      if (emailExists) {
        setErrormsg('⚠️ هذا الإيميل مسجل بالفعل. حاول بإيميل آخر.');
        return;
      }

      // 4️⃣ التسجيل لو البيانات سليمة
      await axios.post(
        'https://68ff5c5ae02b16d1753d9abf.mockapi.io/NOXE/users',
        user
      );
      alert('✅ تم التسجيل بنجاح!');
      navigate('/login');
    } catch (error) {
      setErrormsg('⚠️ حدث خطأ أثناء التسجيل، حاول مرة أخرى.');
      console.error(error);
    }
  };

  // ✅ عرض الفورم
  return (
    <>
      <div className="w-75 m-auto py-5">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>REDISTER</title>
        </Helmet> */}
        <h2>Registration Form</h2>
        {errormsg ? <div className="alert alert-danger p-2">{errormsg}</div> : ''}
        <form onSubmit={submitformdata}>
          <div className="input-data my-2">
            <label htmlFor="first-name">First Name :</label>
            <input
              onChange={getinputvalue}
              type="text"
              className="form-control my-2"
              name="first-name"
              required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="last-name">Last Name :</label>
            <input
              onChange={getinputvalue}
              type="text"
              className="form-control my-2"
              name="last-name"
              required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="age">Age :</label>
            <input
              onChange={getinputvalue}
              type="number"
              className="form-control my-2"
              name="age"
              required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email :</label>
            <input
              onChange={getinputvalue}
              type="email"
              className="form-control my-2"
              name="email"
              required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password :</label>
            <input
              onChange={getinputvalue}
              type="password"
              className="form-control my-2"
              name="password"
              required
            />
          </div>
          <button className="btn btn-info mt-3 float-end">Register</button>
        </form>
      </div>
    </>
  );
}
