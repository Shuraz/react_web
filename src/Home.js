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
      <div class="typewriter text-danger">
         <h1>Hello, I'm Suraj Pokhrel.
           
         </h1>
        
  <a class="btn btn-outline-danger btn-lg"  href="#portfolio" role="button">
   View My Work <DownIcon/>
  </a>
        </div>
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 

</div>
    );
  }
}

export default Home;
