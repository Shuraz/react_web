import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Story from './components/story'
import Portfolio from './components/portfolio/portfolio'
import Home from './Home'



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div>
                    <nav class="navbar bg-primary navbar-dark navbar-expand-sm fixed-top" id="Menu_item1">
      <div class="container">
                <a class="navbar-brand d-sm-inline-block" href="#myPage">Profile</a>

                      <button class="navbar-toggler" type="button" 
                          data-toggle="collapse" data-target="#myTogglerNav" 
                          aria-controls="myTogglerNav" 
                          aria-expanded="false"
                          aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
              
                      <div class="collapse navbar-collapse" id="myTogglerNav" >
                            <div class="navbar-nav">
                              <a class="nav-item nav-link" href="#home">Home</a>
                              <a class="nav-item nav-link" href="#about">About</a>
                              <a class="nav-item nav-link" href="#portfolio">Portfolio</a>
                              <a class="nav-item nav-link" href="#blog">Story</a>
                              <a class="nav-item nav-link" href="#contact">Contact</a>
                            </div>
                     </div> { /* -----end of collapse*/}
                    
                    <span class="navbar-text d-none d-lg-inline-block">Hi, I'm Suraj Pokhrel, Software Developer.</span>
          </div>
      </nav>
    <div class="container-fluid">

            <div class="content" id="home">
            <h2 class=" container"> Home </h2>
              <Home/>

            </div>
......

.......
              <div className="container-fluid" id="about">
              <h2>About</h2><br/>
              <AboutMe/>
              </div>
......

               <div class="container"  id="portfolio">
              {/* <h2 class=" container" id="blog"> Blog </h2> */}

                <Portfolio/>
              </div>

              
......
     ......

              <div class="container"  id="blog">
              {/* <h2 class=" container" id="blog"> Blog </h2> */}
                <Story/>
              </div>
.....

            <div class=" container" id="contact">
                <h2 > Contact Me </h2>
                <ContactMe/>

              </div>
.......
      </div>


        <footer class="App-header container-fluid text-center">
        <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
        <span class="glyphicon glyphicon-chevron-up"></span>
  <br/><br/>
  </a>
  <p>All the Design and Code <a href="#" title="Suraj Pokhrel">mrsurajpokhrel@gmail.com</a></p>
</footer>


</div>
    );
  }
}

export default App;
