import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Header.css";

function Header() {
  return (
   <header className='header'>
    <Carousel className='slide' autoPlay={true} interval={3000} infiniteLoop={true}>
      
        <img className='img-header' src="https://evolvegamingpc.com.au/wp-content/uploads/2022/09/product-banner-cerberus.jpg" alt="Descripción 1" />
      
     
        <img className='img-header' src="https://www.omen.com/content/dam/sites/omen/worldwide/accessories/accessories-2-0/HyperX%20Product%20Banner_desktop_1920x1080_1.jpg" alt="Descripción 2" />
      
     
        <img className='img-header' src="https://www.computerlounge.co.nz/data/media/images/blog//230614-Budget-Prebuilds-Banner_2.png" alt="Descripción 2" />
      
    </Carousel>
   </header>
  )
}

export default Header;