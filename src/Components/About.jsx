import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-7">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white-300 shadow-blue-600">
            About
          </p>
        </div>

        <p className="text-xl pl-7 mt-10 leading-10 justify-center">
          <h3>
            <span className="text-blue-500 font-bold "> Name : </span> Shalini
            Anguraj
          </h3>
          <h3>
            <span className="text-blue-500 font-bold"> Age : </span> 21
          </h3>
          <h3>
            <span className="text-blue-500 font-bold"> Qualification : </span>{" "}
            BE
          </h3>
          <h3>
            <span className="text-blue-500 font-bold"> Specification :</span>{" "}
            Computer Science and Engineering
          </h3>
          <h3>
            <span className="text-blue-500 font-bold"> Post : </span> Full stack
            Developer
          </h3>
          <h3>
            <span className="text-blue-500 font-bold"> Languages : </span>{" "}
            English Tamil
          </h3>
        </p>
        
      </div>
    </div>
  )
};

export default About;
