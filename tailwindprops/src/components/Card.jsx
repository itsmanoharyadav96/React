import React from "react";

//function Card({profession})
function Card( { name , profession , btnText="Visit me "}){
    
    return (
        <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center mb-5">
      {/* Profile Image */}
      <img
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        src="https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg"
        alt="Profile"
      />

      {/* Name & Role */}
      <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500">{profession}</p>

      {/* About */}
      <p className="mt-3 text-gray-600 text-sm">
        Passionate about building scalable web apps with Java, Spring Boot, and React.
      </p>

      {/* Social Buttons */}
      <div className="mt-4 flex justify-center space-x-3">
<a
        href="#"
        className="px-4 py-2 bg-blue-50 text-black rounded-lg hover:bg-blue-300 transition"
      >
        {btnText}

      </a>
        <a
          href="#"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          Message
        </a>
        
      </div>
    </div>
    </>
    )
}


export default Card
