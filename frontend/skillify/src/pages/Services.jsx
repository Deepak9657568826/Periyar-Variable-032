import React from 'react'
import '../styles/servicepage.css';
import { GrFavorite } from "react-icons/gr";
import ServiceDescription from './ServiceDescription';
function Services() {
  return (
    <div>
      
      <div>
      <ul className="cards">
  <li>
    <a href="" className="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
     <h2 className="card__tagline"><GrFavorite /></h2>
   
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
      
    </a>      
  </li>   
</ul>
      </div>
      <ServiceDescription/>
    </div>
  )
}

export default Services
