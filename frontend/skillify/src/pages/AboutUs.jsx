import React from "react";
import deepakphoto from "../assets/deepakphoto.jpg";
import "../styles/aboutpage.css"

const About = () => {
  return (

    <div className="p-8"  style={{    backgroundColor: "rgb(106, 154, 196)"}}>
   
      <h2 className="text-3xl font-bold mb-4">About Skillify</h2>


      <div className="bg-gray-100 p-6 rounded-md mb-4">
        <h2 className="text-3xl font-bold mb-4">Our Story:</h2>
        <p>
        Skillify is more than just a platform; it's a catalyst for change in the way skills are exchanged. We're on a mission to empower individuals to unlock their full potential by facilitating skill exchange without the constraints of monetary transactions. Through Skillify, users can leverage their expertise to gain access to valuable skills and knowledge from others in the community. It's a vibrant ecosystem built on mutual support, collaboration, and continuous learning.
        </p>
      </div>

      <div  className="bg-gray-100 p-4 rounded-md mb-4 flex flex-col gap-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team:</h2>
        <div className="photoarrange" >
          <div className="max-w-sm">
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={deepakphoto}
              alt="rpic"
            />
            <div className="mt-6">
              <h3 className="text-lg font-bold fullstackname">Full Stack Developer</h3>
              <p></p>
            </div>
          </div>
          <div className="max-w-sm">
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={deepakphoto}
              alt="rpic"
            />
            <div className="mt-6">
              <h3 className="text-lg font-bold fullstackname">Full Stack Developer</h3>
              <p></p>
            </div>
          </div>
          <div className="max-w-sm">
            <img
              className="w-full h-72 object-cover rounded-lg"
              src={deepakphoto}
              alt="rpic"
            />
            <div className="mt-6">
              <h3 className="text-lg font-bold fullstackname">Full Stack Developer</h3>
              <p></p>
            </div>
          </div>
         
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h2 className="text-3xl font-bold mb-4">Our Mission:</h2>
        <p>
        Our mission at Skillify is to democratize access to skills and services, creating a dynamic ecosystem where everyone can contribute their expertise and benefit from others' knowledge, fostering connections and empowering individuals to achieve their goals.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h2 className="text-3xl font-bold mb-4">Why Skillify?</h2>
        <p>
        People use Skillify to access a diverse range of skills and services, build meaningful connections with others in their community, save money by exchanging expertise instead of paying for services, foster a spirit of collaboration and mutual support, learn new skills in a practical and interactive way, and contribute to a vibrant ecosystem of skill-sharing and community building.
        </p>
      </div>
    </div>
  );
};

export default About;
