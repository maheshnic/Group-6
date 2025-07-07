

import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

const stateWiseData = [
  {
    state: "Andaman And Nicobar",
    name: "Shri G. Mayil Muthu Kumaran",
    email: "sc-and@nic.in",
    phone: "011-24305748",
  },
  {
    state: "Andhra Pradesh",
    name: "Dr. Rajesh Kumar Pathak",
    phone: "011-24305214",
  },
  {
    state: "Arunachal Pradesh",
    name: "Shri Dayanand Saha",
    email: "sc-arn@nic.in",
  },
  {
    state: "Assam",
    name: "Shri Ashish Vikram Asthana",
    email: "sc-asm@nic.in",
    phone: "011-24305887",
  },
  {
    state: "Bihar",
    name: "Shri Shashi Bhushan",
    phone: "011-24305471",
  },
  {
    state: "Chandigarh",
    name: "Shri Varindra Seth",
    email: "sc-chdut@nic.in",
    phone: "011-24305242",
  },
  {
    state: "Chhattisgarh",
    name: "Shri Manoj Kumar Mishra",
    email: "sc-cg@nic.in",
    phone: "011-24305388",
  },
  {
    state: "Dadra And Nagar Haveli And Daman And Diu",
    name: "Ms. Anjali Dhingra",
    email: "sc-dnhdd@nic.in",
    phone: "011-24305757",
  },
  {
    state: "Gujarat",
    name: "Ms. Alka Misra",
    email: "sc-guj@nic.in",
    phone: "011-24305395",
  },
  {
    state: "Haryana",
    name: "Shri Inder Pal Singh Sethi",
    email: "sc-hry@nic.in",
    phone: "011-24362420",
  },
  {
    state: "Himachal Pradesh",
    name: "Shri Inder Pal Singh Sethi",
    email: "sc10-del@nic.in",
    phone: "011-24362420",
  },
  {
    state: "Jammu And Kashmir",
    name: "Dr. Susheel Kumar",
    email: "sc-jk@nic.in",
    phone: "011-24305981",
  },
  {
    state: "Jharkhand",
    name: "Ms. Sharmistha Dasgupta",
    email: "sc-jhr@nic.in",
    phone: "011-24305810",
  },
  {
    state: "Kerala",
    name: "Shri Timothy Dkhar",
    email: "sc-ker@nic.in",
    phone: "011-36104821",
  },
  {
    state: "Ladakh",
    name: "Dr. Susheel Kumar",
    email: "sc-ldk@nic.in",
    phone: "011-24305981",
  },

  {
    state: "Lakshadweep",
    name: "Shri Timothy Dkhar",
    email: "sc-lak@nic.in",
    phone: "011-36104821",
  },

  {
    state: "Madhya Pradesh",
    name: "Shri V.T.V Ramana",
    email: "sc-mp@nic.in",
    phone: "011-24305516",
  },

  {
    state: "Tripura",
    name: "Dr. Deepak Saxena",
    email: "sc-tp@nic.in",
    phone: "011-22900503",
  },


];

const officerWiseData = [
  {
    name: "Ms. Alka Misra",
    title: "Scientist-G",
    states: ["Gujarat", "Tamil Nadu"],
  },
  {
    name: "Shri Alok Tiwari",
    title: "Scientist-G",
    states: ["Mizoram"],
  },
  {
    name: "Shri Amit Bhargava",
    title: "Scientist-G",
    states: ["Manipur"],
  },
  {
    name: "Ms. Anjali Dhingra",
    title: "Scientist-G",
    states: ["Dadra And Nagar Haveli And Daman And Diu"],
  },
  {
    name: "Shri Ashish Vikram Asthana",
    title: "Scientist-G",
    states: ["Assam"],
  },
  {
    name: "Shri Dayanand Saha",
    title: "Scientist-G",
    states: ["Arunachal Pradesh"],
  },
  {
    name: "Shri Deepak Saxena",
    title: "Scientist-G",
    states: ["Tripura"],
  },
  {
    name: "Shri G. Mayil Muthu Kumaran",
    title: "Scientist-G",
    states: ["Andaman And Nicobar"],
  },
  {
    name: "Shri Inder Pal Singh Sethi",
    title: "Scientist-G",
    states: ["Haryana", "Himachal Pradesh", "Punjab"],
  },
  {
    name: "Shri K.P. Pariselvan",
    title: "Scientist-G",
    states: ["Meghalaya"],
  },
  {
    name: "Shri Manoj Kumar Mishra",
    title: "Scientist-G",
    states: ["Chhattisgarh", "Uttar Pradesh"],
  },
  {
    name: "Shri Naveen Kumar",
    title: "Scientist-G",
    states: ["Nagaland"],
  },
  {
    name: "Ms. Rachna Srivastava",
    title: "Scientist-G",
    states: ["Maharashtra"],
  },
  {
    name: "Dr. Rajesh Kumar Pathak",
    title: "Scientist-G",
    states: ["Andhra Pradesh"],
  },
  {
    name: "Ms. Seemantinee Sengupta",
    title: "Scientist-G",
    states: ["Sikkim"],
  },
  {
    name: "Ms. Sharmistha Dasgupta",
    title: "Scientist-G",
    states: ["Jharkhand"],
  },
  {
    name: "Shri Shashi Bhushan",
    title: "Scientist-G",
    states: ["Bihar"],
  },
  {
    name: "Shri Shubhendu Kumar",
    title: "Scientist-G",
    states: ["Puducherry"],
  },
  {
    name: "Dr. Susheel Kumar",
    title: "Scientist-G",
    states: ["Jammu And Kashmir", "Ladakh", "Uttarakhand"],
  },
  {
    name: "Shri Timothy Dkhar",
    title: "Scientist-G",
    states: ["Kerala", "Lakshadweep", "Odisha"],
  },
  {
    name: "Shri V.T.V. Ramana",
    title: "Scientist-G",
    states: ["Madhya Pradesh", "Telangana"],
  },
  {
    name: "Shri Varindra Seth",
    title: "Scientist-G",
    states: ["Chandigarh"],
  },
  {
    name: "Shri Vinod Kumar Agrawal",
    title: "Scientist-G",
    states: ["Rajasthan"],
  },

  
];

const AboutCoordinators = () => {
  const [activeTab, setActiveTab] = useState("state");

  return (
    <div className="bg-white p-6 rounded-lg shadow text-gray-800">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">State Coordinators</h2>

      <div className="flex mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "state"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("state")}
        >
          State Wise
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "officer"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("officer")}
        >
          Officers Wise
        </button>
      </div>

      {activeTab === "state" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stateWiseData.map((entry, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow space-y-2">
              <h3 className="text-lg font-semibold text-blue-700">{entry.state}</h3>
              <p className="flex items-center"><FaUser className="mr-2 text-gray-500" />{entry.name}</p>
              {entry.phone && (
                <p className="flex items-center"><FaPhoneAlt className="mr-2 text-gray-500" />{entry.phone}</p>
              )}
              {entry.email && (
                <p className="flex items-center"><FaEnvelope className="mr-2 text-gray-500" />{entry.email}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {officerWiseData.map((officer, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-blue-700">{index + 1}. {officer.name}</h3>
              <p className="flex items-center"><FaUser className="mr-2 text-gray-500" />{officer.title}</p>
              <p className="mt-1"><strong>States:</strong> {officer.states.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutCoordinators;
