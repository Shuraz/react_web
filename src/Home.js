import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import DownIcon from 'react-icons/lib/ti/download';
import './App.css';



import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
    
<div class="jumbotron_home text-center">
    
         <h1>Hello, I'm Suraj Pokhrel.
           
         </h1>
         
  <a class="btn btn-outline-danger btn-lg"  href="#portfolio" role="button">
   View My Work <DownIcon/>
  </a>
  <div class="typewriter text-warning">
  <h1>I am a full stack web developer.</h1> 
  </div>
  <p>I am eagerly excited to work with new exciting team and on cutting edge technology.</p> 

</div>
    );
  }
}

export default Home;
