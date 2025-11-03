import React from "react";

function Donate() {
  return (
    <div>
      <div></div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
        {/* Donate & Sponsorship */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 hover:shadow-2xl transition-shadow duration-300">
          {" "}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate</h2>{" "}
          <p className="text-gray-600 mb-6">
            {" "}
            Contribute to empower young Africans with technology education.
            Every donation counts!{" "}
          </p>{" "}
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
            {" "}
            Donate Now{" "}
          </button>{" "}
        </div>{" "}
        {/* Sponsorship Card */}{" "}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 hover:shadow-2xl transition-shadow duration-300">
          {" "}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sponsorship
          </h2>{" "}
          <p className="text-gray-600 mb-6">
            {" "}
            Become a sponsor and support our mission to provide tech education
            for young Africans.{" "}
          </p>{" "}
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
            {" "}
            Become a Sponsor{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Donate;
