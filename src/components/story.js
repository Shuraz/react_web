import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from './news/News';
import Blogs from './blogs';
import NewsFeedIcon from 'react-icons/lib/ti/news';
import BlogsIcon from 'react-icons/lib/md/library-books';

const Story = () => (
  <Router>
    <div>
            <div className="App">
            <header className="App-header">
              <h1 className="App-title">Story</h1>
                    <nav className="nav nav-pills nav-justified">
                  
                  <Link className="nav-item"  to="/"><h1><NewsFeedIcon/> </h1>News Feed</Link>
                  <Link className="nav-item" to="/blog"><h1><BlogsIcon/></h1> Blogs</Link>
              
                    </nav>
            </header>
            </div>

      <Route exact path="/" component={News} />
      <Route path="/blog" component={Blogs}/>
      
    </div>
  </Router>
);

const Projects = () => (
  <div>
    <h2>List of my Projects</h2>

  <div class="jumbotron">
  <h1 class="display-6">Hello, world!</h1>
  
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  </div>
    
  </div>
);


export default Story;