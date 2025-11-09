import React from 'react';
import './footer.module.scss';
export default function Footer() {
return (
    <footer className="text-center text-lg-start mt-5 ">
      <div className=" d-flex justify-content-center py-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <a href='https://www.facebook.com/share/17kDQaqpbC/'>
            <i className="fab fa-facebook-f" />
        </a>
           
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
          <a href='https://www.linkedin.com/in/mohamed-elwan-9b41a8193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <i className="fab fa-linkedin" />
          </a>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <a href='https://github.com/mohamedelwan22' >
            <i className="fab fa-github" />
        </a>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <a href='https://wa.me/+201159279716' >
            <i className="fab fa-whatsapp" />
        </a>
        </button>
      </div>
      <div className="text-center text-white p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2025 Copyright:
        <a className="nav-link text-white ms-1" href="https://github.com/mohamedelwan22">MohamedElwan</a>
      </div>
    </footer>
  );
}