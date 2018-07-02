import React, { Component } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery'
import MyPic from './mypic.png';


export default class galary extends Component {
    render() {
 
        const images = [
          {
            original: {MyPic},
            thumbnail: {MyPic},
          },
          {
            original: './pic.png',
            thumbnail: './pic.png',
          },
          {
            original: 'https://www.pexels.com/photo/nature-red-love-romantic-67636/',
            thumbnail: 'http://lorempixel.com/250/150/nature/3/'
          }
        ]
     
        return (
          <ImageGallery items={images} />
        );
      }
}
