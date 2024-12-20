import React from 'react';
import '@fontsource/montserrat'; 
import './App.css'

const App = () => {
    return (
      <div className="relative overflow-hidden w-4/5 h-[800px] flex justify-center items-center mx-auto mt-[3%]">
        
   
        <img src="./images/image.png" alt="Image" className="absolute top-1/2 right-[90px] transform translate-y-[-50%] z-10 w-[612px] h-[612px] opacity-100" />
        
 
        <div className="absolute top[0%] right-0 transform rotate-[28.89deg] flex justify-center items-center opacity-100 w-[680.33px] h-[1243.68px] -top-[114.7px] left-[1000.44px] gap-0 bg-[#DA211C]"></div>
    
        <div className="absolute top-[25%] left-0 w-[708px] h-[594px] p-2 bg-white rounded-lg flex flex-col justify-start">
          <h2 className="text-6xl font-bold text-[#DA211C] tracking-wider mb-4">
            <div className="font-montserrat text-left text-7xl">
              <span>L</span>
              <span>O</span>
              <span>G</span>
              <span>I</span>
              <span>N</span>
            </div>
          </h2>
  
    
          <form className="w-full">
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Username</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Password"
              />
            </div>
  
          
            <button type="submit" className="w-64 bg-[#DA211C] text-white h-12 mt-4">
     <p className="text-center text-xl">LOGIN</p>
       </button>



          </form>
  
         
        <div className="flex justify-between items-center mt-4">
        <p className="text-left text-gray-700 text-lg font-normal"> <a href="#">Forgot password?</a></p>


     <p className="text-right text-gray-700 text-lg font-normal">
    <a href="#">Register</a>
    </p>
    </div>
        </div>
      </div>
    );
  };
  
  export default App;
  