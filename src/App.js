import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from './NavBar';
import MainImage from './MainImage';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Review from './Review';
import Error from './Error';
import { BrowserRouter , Routes ,Route, Link,  Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='content'>
      <MainImage/>
      <About/>
      <Menu/>
      <Order/>
      <Review/>
      </div>
      
    </div>
  );
}

export default App;
