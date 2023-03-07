import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

function Main() {
  return (
    <>
      <main className='container' role="main">
        <App />
      </main>
    </>
  );
};

function Footer() {
  return (
    <>
      <footer className='footer' role="contentinfo">
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between'>
            <small>Made with <i className='fa fa-heart text-decor'></i> by: Danny A. Mase</small>
            <small>Copyright &copy;2023 &middot; All Rights Reserved</small>
          </div>
        </div>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Main />
      <Footer />
  </React.StrictMode>
);