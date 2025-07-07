// src/pages/AboutOffices.jsx
import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaGlobe, FaSearch } from "react-icons/fa";

const dataCentres = [
  { location: "Delhi", name: "Shri Shyam Sundar", designation: "Scientist-G", phone: "080-22866411" },
  { location: "Pune, Maharashtra", name: "Shri Ashok Kaul", designation: "Scientist-G", phone: "497-22866492" },
  { location: "Bhubaneshwar, Odisha", name: "Shri Choudhury Bijoya Kumar Das", designation: "Scientist-G", phone: "080-22866222" },
  { location: "Hyderabad, Telangana", name: "Shri S.V. Krishna Prasad", designation: "Scientist-F", phone: "080-21166492"},
  { location: "Chandigarh", name: "Shri Inderjit Singh", designation: "Scientist-F", phone: "489-22866192"},
  { location: "Guwahati, Assam", name: "Ms. Hiranmayee Goswami", designation: "Scientist-F", phone: "044-22223392" },
];

const focusCentres = [
  { title: "Software Development Unit", location: "Pune, Maharashtra", name: "Shri Ashok Kaul", designation: "Scientist-G", phone:"044-24234423" },
  { title: "Open Technology Group", location: "Chennai, Tamil Nadu", name: "Shri S. Senthil Kumar", designation: "Scientist-F", phone: "044-24908027" },
  { title: "Digital Government Research Centre", location: "Patna, Bihar", name: "Shri Aniruddha Pal", designation: "Scientist-F", phone:"044-89223445" },
  { title: "Mobile Competency Centre", location: "Chennai, Tamil Nadu", name: "Shri James Arulraj J", designation: "Scientist-E", phone: "044-24902580" },
  { title: "Focus Centre", location: "Kannur, Kerala", name: "Shri Andrews Varghese", designation: "Scientist-E", phone: "497-2700761" },
  { title: "Focus Centre", location: "Shimla, Himachal Pradesh", name: "Shri Sandeep Sood", designation: "Scientist-F", phone: "177-2625216" },
  { title: "Focus Centre", location: "Patna, Bihar", name: "Shri Niraj Kumar Tiwary", designation: "Scientist-E", phone:"497-8935647" },
];

const centresOfExcellence = [
  { title: "eCourts", location: "Pune, Maharashtra", name: "Shri Manoj Kumar Mishra", designation: "Scientist-G", phone: "011-24305388" },
  { title: "Artificial Intelligence", location: "Delhi", name: "Ms. Sharmistha Dasgupta", designation: "Scientist-G", phone: "011-24305211" },
  { title: "Blockchain Technology", location: "Bengaluru, Karnataka", name: "Ms. Jayanthi S", designation: "Scientist-G", phone: "080-22866492" },
  { title: "Microservices", location: "Kochi, Kerala", name: "Dr. Suchitra Pyarelal", designation: "Scientist-G", phone: "080-22866212" },
];

const stateinfo = {
description:`National Informatics Centre (NIC) provides nationwide ICT infrastructure to support e-Governance services and various initiatives of Digital India.
NIC has been associated with design and development of software for improving delivery of services undertaken by government departments at State and District level.

ICT infrastructure of NIC viz. NICNET, NKN, LAN, Mini Data Centre, Video conference studios, messaging service, Webcast facilities are the key constituents of NIC services across all 36 States/ UTs and 758 Districts.

NIC State Centres along with their respective District Centres are continually engaged in automating and accelerating e-Governance processes in close interaction with Government Departments.`,
};
const stateDetails = {

  Tripura: `NIC Tripura State Centre (TSC) was established in the year 1988 and since then has been providing value added ICT services to the Govt. of Tripura. NIC Tripura is involved in many critical eGovernance projects such as eHospital (Pan India implementation), TPDS, eDistrict, eGRAS among the major software solutions that is implemented for Govt. of Tripura.

NIC TSC has been providing high speed internet connectivity to nearly 6000 node of spread over Governors House, State Secretariat, Legislative Assembly, 8 District Magistrates Office, High Court. Our state centre also houses a state of the art Mini Data Centre providing IaaS to host different eGov Applications.

NIC TSC has been providing the service of Website Design, Development & Hosting (including security audit, remote publishing, domain registration) for State Government Portal, 8 District Portal on S3WAAS framework, Police, and 100 other State Government Departments and Organizations, created using CMS and are GIGW compliant. These websites are hosted in NIC Cloud, NIC State Mini Data Centre and State Data Centre.

NIC TSC has been a driving force towards transforming Tripura into Digital Tripura. NIC TSC is the key e-Gov apps implementer to accomplish the goal of delivering impactful e-Governance services to citizens of the State. NIC, in line with Digital India programme, always strives to extend and achieve excellence in providing e-Governance services and reliable Internet over NICNET/NKN backbone connectivity to District and Sub-district level offices in most remote part of India.`,

  Meghalaya: `NIC Meghalaya was first established in 1988 in the basement of the Addl. Secretariat building and subsequently expanded to other district headquarters. Since its inception NIC provided a host of services to the State and Central Government organizations in the state and has left no stone unturned in rendering various ICT services to the state and Central Government offices located in the region, hence laying a strong foundation for e-Governance in the State. It is from here all ICT services for the State emanate. In the year 2003, NIC Meghalaya has shifted to its own building in the Secretariat Hill which also houses the IT Department of the State Government to synergies the activities together for the development of IT in the state and this building is providing all the ICT infrastructure and services with the latest state of the art technology.`,


  Manipur: (
    <>
      <p>NIC Manipur State Centre , one of the total solution providers of Government of Manipur, is actively involved in most of the IT enabled applications and has changed the mindset of the working community in the Government to make use of the latest state of the art technology in their day to day activities to provide better services to the citizens of Manipur.

      NIC’s presence in Manipur include the State centre at New Secretriat, Imphal, District centres at the 16 districts headquarters.</p>
      <p>District centres include:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Imphal West</li>
        <li>Imphal East</li>
        <li>Bishnupur</li>
        <li>Thoubal</li>
        <li>Chandel</li>
        <li>Senapati</li>
        <li>Churachandpur</li>
        <li>Tamenglong</li>
        <li>Ukhrul</li>
        <li>Kangpokpi</li>
        <li>Noney</li>
        <li>Kakching</li>
        <li>Jiribam</li>
        <li>Kamjong</li>
        <li>Pherzawl</li>
        <li>Tengnoupal</li>
      </ul>
    </>
  ),

  Mizoram:`Perched on the high hills of north-eastern India, Mizoram is a storehouse of natural beauty with its picturesque landscape, hilly terrains, meandering streams, deep gorges as well as rich wealth of flora and fauna. Flanked by Bangladesh on the west and Myanmar on the east and south, Mizoram occupies an important strategic position having a long international boundary of 722 Kms. As per 2001 census, the total population of the state is 1,097,206 with a high literacy rate of 91.58 %. Agriculture is the main occupation and most people in Mizoram speak Mizo, the local language.

The State has been divided into eleven (11) Districts, 26 Rural Development Blocks, 23 Sub-Divisions and 3 Autonomous District Councils. Total number of villages as per 2011 census is 852 and there are 40 Assembly Constituencies.

Recognizing IT as the fastest and the most advanced vehicle of change for all-round progress and development of the State, Mizoram advocates widespread proliferation of IT in the state and supports promotion of IT in the fields of e-Governance, empowerment of people, education, industry, health, rural development, agriculture, tourism and IT enabled services.`,
 
  Nagaland:`Nagaland situated in the north-eastern India and it is considered to be one of the most remote states in the Country. Implementation of developmental work has been an uphill task due to the difficult terrain of the state and in this context, the presence of NIC in Nagaland acquires more significance. NIC State Centre was established in Nagaland in the year 1989. NIC District Centres are fully operational in all the districts of Nagaland. NIC Nagaland State Centre, located at the New Secretariat Complex, Kohima is the apex NIC body in the state and co-ordinates with the working of all the District Centres and the State Government.

NIC had pioneered in bringing IT culture to Nagaland way back in the early nineties with its nationwide satellite-based computer communication network (NICNET) and now with 10 GBPS high bandwidth OFC connectivity. It provides e-mail services, Internet access, file transfer facility, office automation, development of computer-based Management Information System (MIS), and hosting of the state websites and applications etc. NIC has helped in making the state of Nagaland a part of the Global village.`,

  Assam: (
  <>
    <p>
      The Assam State Centre of NIC works hand in hand with the Assam State Government in the areas of information and communication technology to achieve the common dream of a Digital Assam. The State Centre collaborates with the State Government in formulating ICT strategies for an efficient, effective, and robust e-Governance ecosystem.
    </p>

    <p>
      Since its inception, the State Centre has served as the ICT backbone for the Government, connecting offices with the digital world through NICNET with as many as 21,240 NICNET nodes – 12,388 in the State headquarters and 8,900 in the districts. NIC Assam also provides ultra-high-speed National Knowledge Network (NKN) links to 57 premier educational and research organizations.
    </p>

    <p>
      The State Centre has implemented a next-generation campus network and WiFi-enabled Assam Secretariat with 430 WiFi access points and secure roaming, funded by the Secretariat Administration Department.
    </p>

    <p>
      NIC Assam provides videoconferencing facilities at various levels of the Assam Government administrative hierarchy.
    </p>

    <p>
      <strong>Major initiatives and services by NIC Assam:</strong>
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        <strong>ePrastuti Framework:</strong> Standardization of Government websites, implemented in 206 websites for 55 Departments and 14 Districts.
      </li>
      <li>
        <strong>eOffice Suite:</strong> Used by all 58 Departments of the Assam Secretariat; being rolled out to Directorates and DC Offices.
      </li>
      <li>
        <strong>Manav Sampada:</strong> ICT solution for Human Resource Management in the Assam Government.
      </li>
      <li>
        <strong>GePNIC:</strong> End-to-end government e-Procurement solution.
      </li>
      <li>
        <strong>ServicePlus:</strong> Integrated e-Service delivery framework for digital services.
      </li>
      <li>
        <strong>Assam Darpan:</strong> KPI dashboard framework for CM and DMs to present performance of schemes and initiatives.
      </li>
      <li>
        <strong>Public Financial Management System (PFMS):</strong> For effective fund flow under Central Sector Projects.
      </li>
      <li>
        <strong>Public Distribution System:</strong> Custom software solutions developed by NIC Assam.
      </li>
      <li>
        <strong>SPARROW:</strong> Smart Performance Appraisal Report Recording Online Window for employee appraisal automation.
      </li>
    </ul>

    <p>
      The NIC District Centres in Assam are crucial to the success of these initiatives, serving as incubation hubs for innovation and new ICT rollouts.
    </p>

    <p>
      The Regional Centre of Excellence for Application Security was established in Guwahati in February 2018 to accelerate secure application adoption across North Eastern States.
    </p>
  </>
)
,

Sikkim: (
  <>
    <p>
      Since its inception in 1993, NIC Sikkim has been working tirelessly towards realizing the dream of e-Governance in the state. NIC Sikkim’s State and District Units are continuously engaged in various projects within State Government Departments to facilitate the use of Information and Communication Technology (ICT).
    </p>
    <p>
      The organizational setup of NIC Sikkim includes its headquarters at Tashiling, Gangtok, and four district centres in East, West, South, and North Sikkim. The organization employs a large pool of efficient technical manpower.
    </p>
    <p>
      At the State level, NIC provides informatics support to the State Government. At the District level, NIC District Informatics Offices provide support to Development, Revenue, and Judiciary administration.
    </p>
    <p>
      NIC also offers extensive training to government officials, software design and development, and provision of LAN and WAN connectivity across various government offices.
    </p>
    <p>
      The entire Secretariat complex is connected via LAN and WAN for seamless information exchange. A recent RF link enhancement has improved internet access to remote departments outside the Secretariat.
    </p>
    <p>
      Successful implementation of several key projects by NIC Sikkim has significantly advanced the state's e-Governance goals.
    </p>
    <p className="font-semibold mt-4">Following services are being provided to the State Government:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Networking Services</li>
      <li>Video Conferencing Services</li>
      <li>e-Governance Services</li>
    </ul>
  </>
)
,

  ArunachalPradesh:`Arunachal Pradesh is the largest state area-wise in the north-eastern region. Administratively the state is divided into 25 districts. The Arunachal Pradesh State Centre of National Informatics Centre is located at Civil Secretariat, Block 3, 2nd Floor, Itanagar, the State capital. NIC, districts centres are located in the district headquarters of 21 districts. The Capital district has two district centres located at Itanagar and Yupia respectively. The district centres are yet to be established at Shi Yomi, Lower Siang, Pakke Kessang, Kamle and Lepa Rada District. The request for the setting up of these centres has been submitted to NIC Hqrs.

Since the establishment of NIC, Arunachal Pradesh State Centre at Itanagar, in the month of November 1988, it has played a key role in ushering in ICT based culture in the functioning of the state government.

NIC, Arunachal Pradesh State Centre has been instrumental in the conceptualization, design, development and implementation of many ICT based applications including eOffice, eDistrict, TreasuryNet, e-Ticketing system, eProcurement, eAbkari, eCourts, eCounselling, One Nation One RC, GPF, Payroll, EoDB portal, eSamiksha, Farmer’s Portal, Hortnet, CPGRAMS, SPARROW etc., for the state government as well as in the capacity building of the government manpower. Many other projects with respect to other sectors like Finance, Cabinet Affairs, State Information Commission, Art and Culture are in pipeline.

Other value-added services like NICNET services, Mini Data Centre services, Cloud services, Video Conferencing, email are being used by the State Government extensively to drive their e-Governance activities. The network is powered by a 10Gbps PGCIL NKN link.`,

};

const AboutOffices = () => {
  const [activeTab, setActiveTab] = useState("Data Centres");
  const [selectedState, setSelectedState] = useState("Tripura");

  const renderCard = (item) => (
    <div key={item.name} className="bg-white p-4 shadow rounded space-y-2">
      <h3 className="text-lg font-semibold text-blue-700">{item.title || item.location}</h3>
      <p><FaUser className="inline mr-2" />{item.name}</p>
      <p className="text-sm">{item.designation}</p>
      {item.phone && <p><FaPhoneAlt className="inline mr-2" />{item.phone}</p>}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Data Centres": return dataCentres.map(renderCard);
      case "Focus Centres": return focusCentres.map(renderCard);
      case "Centres of Excellence": return centresOfExcellence.map(renderCard);
      case "State Centres":
        return (
          <div className="space-y-4 w-full">
            <p className="text-gray-700 whitespace-pre-line">{stateinfo.description}</p>
            <label className="block mt-4 font-semibold text-gray-700">Select State:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="p-2 border rounded shadow"
            >
              {Object.keys(stateDetails).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-bold text-blue-700">{selectedState}</h3>
              <p className="text-gray-700 whitespace-pre-wrap mt-2">{stateDetails[selectedState]}</p>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow text-gray-800 space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Our Offices</h2>
      <p>NIC offices are located in all States, Union Territories, and Districts of India. The headquarters is situated in New Delhi.</p>

      <div className="flex flex-wrap gap-2">
        {["Data Centres", "Focus Centres", "Centres of Excellence", "State Centres"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`grid gap-4 ${activeTab === "State Centres" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutOffices;
