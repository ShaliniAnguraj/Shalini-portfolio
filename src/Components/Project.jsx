import React from "react";
import foodrecipe from "../assets/portfolio/food recipe.png";
import nationalize from "../assets/portfolio/nationalize api.png";
import weatherapi from "../assets/portfolio/weather api.png"


const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: foodrecipe,
      demo : "https://gentle-mermaid-54fb57.netlify.app/",
      code : "https://github.com/ShaliniAnguraj/DAY21-FOOD-RECIPE",
     
      
    },
   
    {
      id: 2,
      src: nationalize,
      demo : "https://celadon-alpaca-77e2b1.netlify.app/",
      code : "https://github.com/ShaliniAnguraj/WEBCODE-1"
    },
    {
      id: 3,
      src: weatherapi,
      demo : "https://aquamarine-lamington-55685d.netlify.app/",
      code : "https://github.com/ShaliniAnguraj/DAY18_RESTCOUNTRY"
    },
   
  ];

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, demo, code }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target='_blank' rel='noreferrer'>
                Demo  
              </a>
              <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target='_blank' rel='noreferrer'>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Project;