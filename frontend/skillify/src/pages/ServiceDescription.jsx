import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CommunityRequest from './CommunityRequest';
// eslint-disable-next-line react/prop-types
const ServiceDescription = () => {
  const [service, setService] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { id } = useParams()
  const url = `https://periyar-variable-032-nfcl.onrender.com/oneServices/${id}`;

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setService(data.offerService); 
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (<>
   {service.map((service)=>(
 <div key={service._id} className='ml-40 mr-40 mt-20 mb-20 flex justify-between'>
 <div className="p-10 bg-white md:w-1/2">
   <h2 className="font-bold mb-2 text-2xl">{service.categoriesOfHelp}</h2>
   <div className="bg-white rounded-lg shadow-lg">
     <img src={service.backgroundPhoto} alt="" className="rounded-t-lg"/>
     <div className="p-6">
       <h2 className="font-bold mb-2 text-2xl">Description</h2>
       <p className="mb-2">{service.detailsDescription}</p>
     </div>
     <div className='p-6'>
       <div className='mb-4'>
         <h3 className="text-lg font-bold">Address</h3>
         <span>{service.address}</span>
       </div>
       <hr />
       <div className='mt-4'>
         <h3 className="text-lg font-bold">Availability & Preferences</h3>
         <span>{service.timeAvailable}</span>
         <br/>
         <span>{service.timePreference}</span>
         <h2>Contact Number : <span style={{fontWeight:"bold"}}>09857458562</span> </h2>
       </div>
     </div>
   </div>
 </div>

  <div style={{height:"400px",width:"500px"}}className="max-w-xs rounded-2xl  border bg-white p-10 text-center shadow-lg">
    <img className="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg" src={service.profilePhoto} alt="profile picture" />
    <h1 className="text-2xl font-semibold text-slate-800">{service.nameOfUser}</h1>
    <h2 className="font-semibold text-slate-500">{service.categoriesOfHelp}</h2>
    <span className="inline-block flex p-8 justify-center">
      <a href="#"><i className="fa-brands text-2xl fa-linkedin text-slate-500 hover:text-slate-800">
      <FaLinkedin /></i></a>
      <a href="#"><i className="text-2xl fa-brands fa-twitter text-slate-500 hover:text-slate-800"><FaXTwitter /></i></a>
    </span>
    <p className=" text-xl font-normal text-slate-800">
      {service.address}
    </p>
    
  </div>
</div>

   ))}
   <CommunityRequest/>
   </>
  );
}

export default ServiceDescription;
