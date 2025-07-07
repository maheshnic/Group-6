import React, { useState } from "react";
import {
FaUser,
FaPhoneAlt,
FaEnvelope,
FaGlobe,
FaSearch
} from "react-icons/fa";

const officers = [
{
state: "Andaman And Nicobar",
name: "Shri Gautam Gupta",
designation: "Scientist-F",
phone: "03192-232733",
website: "https://andaman.nic.in",
},
{
state: "Andhra Pradesh",
name: "Shri S.V.Ch.Subba Rao",
designation: "Scientist-F",
phone: "0866-2468333",
website: "https://ap.nic.in",
},
{
state: "Arunachal Pradesh",
name: "Shri Jyotish Roy",
designation: "Scientist-F",
email: "sio-arn@nic.in",
phone: "0360-2212919",
website: "https://arunachal.nic.in",
},
{
state: "Assam",
name: "Shri Rubaiyat Ul Ali",
designation: "Scientist-F",
phone: "0361-2732894",
website: "https://assam.nic.in",
},
{
state: "Bihar",
name: "Shri Ajay Kumar",
designation: "Scientist-F",
phone: "0612-2547964",
website: "https://bihar.nic.in",
},
{
state: "Chandigarh",
name: "Shri Ramesh Kumar Gupta",
designation: "Scientist-G",
email: "sio-chdut@nic.in",
phone: "0172-2740706",
website: "https://nicchandigarh.nic.in",
},
{
state: "Chhattisgarh",
name: "Shri Tej Narayan Singh",
designation: "Scientist-G",
email: "sio-cg@nic.in",
phone: "0771-2221238",
website: "https://chhattisgarh.nic.in",
},
{
state: "Dadra And Nagar Haveli And Daman And Diu",
name: "Shri Pramod D. Borole",
designation: "Scientist-F",
email: "sio-dam@nic.in",
phone: "0260-2290385",
},
{
state: "Delhi",
name: "Shri Nittal Srinivas",
designation: "Scientist-F",
phone: "011-23392412",
},
{
state: "Goa",
name: "Shri Sameer P. Datar",
designation: "Scientist-F",
email: "sio-goa@nic.in",
phone: "0832-2411332",
website: "https://nicgoa.nic.in",
},
{
state: "Gujarat",
name: "Shri Pramod Kumar Singh",
designation: "Scientist-G",
email: "sio-guj@nic.in",
phone: "079-23252946",
website: "https://guj.nic.in",
},
{
state: "Haryana",
name: "Shri Sarbjeet Singh",
designation: "Scientist-G",
website: "https://nicharyana.nic.in",
},
{
state: "Himachal Pradesh",
name: "Shri Ajay Singh Chahal",
designation: "Scientist-G",
email: "sio-hp@nic.in",
phone: "0177-2624045",
website: "https://nichimachal.nic.in",
},
{
state: "Jammu And Kashmir",
name: "Shri Jaskaran Singh Modi",
designation: "Scientist-F",
email: "sio-jk@nic.in",
website: "https://jk.nic.in",
},
{
state: "Jharkhand",
name: "Shri Deepak Kumar",
designation: "Scientist-F",
phone: "0651-2401076",
website: "https://nicjharkhand.nic.in",
},
{
state: "Karnataka",
name: "Shri P.V. Bhat",
designation: "Scientist-G",
email: "sio-kar@nic.in",
phone: "080-22863218",
website: "https://karnataka.nic.in",
},
{
state: "Kerala",
name: "Dr. Suchitra Pyarelal",
designation: "Scientist-G",
email: "sio-ker@nic.in",
phone: "0471-2729894",
website: "https://kerala.nic.in",
},
{
state: "Ladakh",
name: "Shri Sunil Kaul",
designation: "Scientist-F",
email: "sio-ldk@nic.in",
website: "https://ladakh.nic.in",
},
{
state: "Lakshadweep",
name: "Dr. Suchitra Pyarelal",
designation: "Scientist-G",
email: "sio2-ker@nic.in",
phone: "0471-2729894",
website: "https://utl.nic.in",
},
{
state: "Madhya Pradesh",
name: "Shri Kamlesh Joshi",
designation: "Scientist-F",
phone: "0755-2551447",
website: "https://mpstate.nic.in",
},
{
state: "Maharashtra",
name: "Ms. Sapna Kapoor",
designation: "Scientist-F",
email: "sio-mah@nic.in",
phone: "022-22046934",
website: "https://maharashtra.nic.in",
},
{
state: "Manipur",
name: "Shri N. Binod Singh",
designation: "Scientist-F",
email: "sio-man@nic.in",
phone: "0385-2443167",
website: "https://manipur.nic.in",
},
{
state: "Meghalaya",
name: "Shri Santhosh V T",
designation: "Scientist-F",
email: "sio-megh@nic.in",
phone: "0364-2225501",
website: "https://meg.nic.in",
},
{
state: "Mizoram",
name: "Ms. Lallianmawii Hnamte",
designation: "Scientist-F",
email: "sio-mizo@nic.in",
phone: "0389-2314174",
website: "https://mizo.nic.in",
},
{
state: "Nagaland",
name: "Shri I. Lanusungkum Aier",
designation: "Scientist-F",
email: "sio-ngl@nic.in",
phone: "0370-2270022",
website: "https://nagaland.nic.in",
},
{
state: "Odisha",
name: "Dr. Ashok Kumar Hota",
designation: "Scientist-G",
email: "sio-ori@nic.in",
phone: "0674-2508438",
website: "https://odisha.nic.in",
},
{
state: "Puducherry",
name: "Shri Mahesh M Halyal",
designation: "Scientist-F",
phone: "0413-2229484",
website: "https://py.nic.in",
},
{
state: "Punjab",
name: "Shri Vivek Verma",
designation: "Scientist-G",
email: "sio-punjab@nic.in",
phone: "0172-2747357",
website: "https://pbsc.nic.in",
},
{
state: "Rajasthan",
name: "Shri Jitendra Kumar Verma",
designation: "Scientist-F",
email: "sio-raj@nic.in",
phone: "0141-2227992",
website: "https://raj.nic.in",
},
{
state: "Sikkim",
name: "Shri Birendra Chhetri",
designation: "Scientist-F",
website: "https://sikkim.nic.in",
},
{
state: "Tripura",
name: "Shri Achintya Kumar De",
designation: "Scientist-F",
email: "sio-trpr[at]nic[dot]in",
phone: "0381-2314640",
website: "https://tripura.nic.in",
},
{
state: "Tamil Nadu",
name: "Shri Kamalakkannan M.",
designation: "Scientist-G",
email: "sio-tn[at]nic[dot]in",
phone: "044-24908001",
website: "https://www.tn.nic.in",
},

];

const AboutOfficers = () => {
const [search, setSearch] = useState("");

const filtered = officers.filter((officer) =>
officer.state.toLowerCase().includes(search.toLowerCase())
);

return (
<div className="bg-white p-6 rounded-lg shadow text-gray-800 space-y-4">
<h2 className="text-2xl font-bold text-blue-700">State Informatics Officers</h2>
<p>
State Informatics Officers (SIOs) lead NIC’s operations at state capitals,
ensuring seamless execution of national and state-level e-Governance programs.
</p>

  <div className="flex items-center gap-2 mt-4">
    <FaSearch className="text-gray-500" />
    <input
      type="text"
      placeholder="Search by State..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full max-w-md"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
    {filtered.map((officer, i) => (
      <div key={i} className="border p-4 rounded shadow space-y-2">
        <h3 className="text-lg font-semibold text-blue-700">{officer.state}</h3>
        <p className="flex items-center"><FaUser className="mr-2 text-gray-500" />{officer.name}</p>
        <p className="text-sm text-gray-600">{officer.designation}</p>
        {officer.phone && (
          <p className="flex items-center"><FaPhoneAlt className="mr-2 text-gray-500" />{officer.phone}</p>
        )}
        {officer.email && (
          <p className="flex items-center"><FaEnvelope className="mr-2 text-gray-500" />{officer.email}</p>
        )}
        {officer.website && (
          <p className="flex items-center">
            <FaGlobe className="mr-2 text-gray-500" />
            <a
              href={officer.website}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {officer.website}
            </a>
          </p>
        )}
      </div>
    ))}
  </div>
</div>
);
};

export default AboutOfficers;