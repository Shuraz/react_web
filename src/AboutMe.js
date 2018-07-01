import React, { Component } from 'react'
import MyPic from './mypic.png';
import Pic from './pic.png'
import ProfilePic from './profilepic.png';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
 



export default class aboutme extends Component {
  render() {
    return (
        <div>

            <div className="container text-center"  id="services">
                <div className="row">
                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" src={Pic} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Responsive</h4>
                    <p>UI adopting to the device screen size.</p>
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" src={Pic} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>App-like feel</h4>
                    <p>It does not feel like a website, but rather an an app as much as possible.</p>           
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" src={Pic} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Discoverable</h4>
                    <p>Search engines and SEO optimization</p>
                    </figcaption>
                    </section>

                    <section className="col-sm-6 col-md-3">
                    <img className="img-fluid rounded-circle figure-img mx-auto" src={Pic} width={150} alt="Image"/>
                    <figcaption className="figure-caption">
                    <h4>Fast and Dynamic</h4>
                    <p>Fast, interactive and lighter dymanic website. </p>
                    </figcaption>
                    </section>

                </div> {/*---------end of row div*/}
            </div> {/*-----------end of service div*/}

            <div className="container">
                <div className="row">
                    <div className="col col-sm-4">
                                <figure>
                                <img className="img-fluid rounded border border-info" src={ProfilePic} width={250} alt="Suraj Pic"/>
                                <figcaption>
                                    <h3>Who's this guy? </h3>
                                <p>I'm the Front-End Developer for EyeCue Lab in Portland, OR. 
                                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
                                Let's make something special.</p>
                                </figcaption>
                                <a class="text-primary btn btn-outline-info btn-lg"  href="#portfolio" role="button">
                                    My LinkedIn Profile <LinkedInIcon/> </a>

                                </figure>

                    </div>

                    <div className="container alert alert-light col-sm-4" role="alert">
                        <h3>Specification </h3>

                        <h5> Core Java</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
                            Java 85%
                            </div>
                        </div>
                        <h5> JavaScript</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>
                            Java 85%
                            </div>
                        </div>
                        <h5> SQL</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>
                            Java 85%
                            </div>
                        </div>
                        <h5> React</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            Java 85%
                            </div>
                        </div>

                         <h5> Bootstrap</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            Java 85%
                            </div>
                        </div>

                           <h5> HTML</h5>
                        <div className="progress">
                            <div class=" bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            Java 85%
                            </div>
                        </div>

                           <h5> CSS</h5>
                        <div className="progress">
                            <div class="bg-info progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}>
                            Java 85%
                            </div>
                        </div>
                    

                       
                    </div>

                    <div className="container alert alert-light col-sm-4" role="alert">
                        <h3>Software Engineering</h3>

                        
                        <div className="container text-left">
                        <h5>Research</h5>
                                    <div style={{ width: '100px' }}>
                <CircularProgressbar percentage={100} text={`${100}%`} />
                                    </div>
                           
                        </div>
                       
                        <div className="container text-left">
                        <h5>Design</h5>
                                    <div style={{ width: '100px' }}>
                            <CircularProgressbar percentage={90} text={`${90}%`} />
                                    </div>
                        </div>
                        <div className="container text-left">
                        <h5>Development</h5>

                        
                                    <div style={{ width: '100px' }}>
                            <CircularProgressbar percentage={80} text={`${80}%`} />
                                    </div>
                           
                        </div>
 
                    </div>

                </div>
            </div>
        
        </div>
    )
  }
}
