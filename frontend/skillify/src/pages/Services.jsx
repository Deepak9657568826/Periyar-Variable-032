import React, { useEffect, useState } from 'react';
import '../styles/servicepage.css';
import { GrFavorite } from "react-icons/gr";
import ServiceDescription from './ServiceDescription';

function Services() {
  const [services, setServices] = useState([]);
  const url = "https://gray-xerus-sock.cyclic.app/newServices";

  function fetchData() {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setServices(data.offerServices);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-3xl font-bold mt-10 ml-10'> All Services</h2>
      </div>
      <div>
        <ul className="cards">
          {services.map((service) => (
            <li key={service._id}>
              <a href="#" className="card">
                <img src={service.backgroundPhoto} className="card__image" alt="" />
                <h2 className="card__tagline"><GrFavorite color='white'  /></h2>
                <div className="card__overlay">
                  <div className="card__header">
                    {/* Removed SVG element */}
                    <img className="card__thumb" src={service.profilePhoto} alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">{service.nameOfUser}</h3>
                      <span className="card__status">{service.timeAvailable}</span>
                    </div>
                  </div>
                  <p className="card__description">{service.detailsDescription}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ServiceDescription />
    </div>
  );
}

export default Services;
