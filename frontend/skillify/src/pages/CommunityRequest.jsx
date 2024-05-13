import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaPlus } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CommunityRequest = () => {
  const [request, setRequest] = useState([]);
  const url = "https://periyar-variable-032-nfcl.onrender.com/request/allRequest";

  function fetchData() {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setRequest(data.request);
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
        <h2 className='text-3xl font-bold mt-10 ml-10'> All requests</h2>
      </div>
      <div>
        <ul className="cards">
          {request.map((request) => (
            <li key={request._id}>

              <a href="#" className="card">

                <div className="bg-white">
                  <div className="card_header">
                    {/* Removed SVG element */}
                    <img className="card__thumb" src={request.image} alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">{request.userName}</h3>
                      <span  style={{color:"black", fontSize:"18px"}} className="card__status">Required help in : {request.categories}</span>

                    </div>
                  </div>
                  <p className="card__description text-black">{request.description}</p>
                </div>
              </a>
            </li>

          ))}
          <Link to="/postyourservice" className="card">
            <div style={{ border: "2px dashed white" }} className='p-10 rounded-md'>
              <div className="card_header">
                {/* Removed SVG element */}
                {/* <img className="card__thumb" src={request.userName} alt="" /> */}
                <div className="card__header-text text-center">
                  <button data-tooltip-target="tooltip-default" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaPlus color='white' /></button>
                  <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default CommunityRequest
