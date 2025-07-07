import React, { useState } from 'react';
import { FaPhoneAlt, FaUser, FaEnvelope } from 'react-icons/fa';

const AccordionItem = ({ title, children }) => {
const [isOpen, setIsOpen] = useState(false);
return (
<div className="border rounded-md mb-4">
<button
onClick={() => setIsOpen(!isOpen)}
className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 text-left text-blue-800 font-semibold"
>
{title}
<span className="text-xl">{isOpen ? '−' : '+'}</span>
</button>
{isOpen && <div className="p-4 bg-white text-gray-800 space-y-2">{children}</div>}
</div>
);
};

const InfoRow = ({ icon, label, value }) => (

<p className="flex items-center gap-2"> {icon} <span className="font-semibold">{label}:</span> {value} </p> );
const AboutGroups = () => {
return (
<div className="bg-white p-6 rounded-lg shadow text-gray-800">
<h2 className="text-2xl font-bold text-blue-700 mb-4">Groups and Divisions</h2>


  <div className="mb-6">
    <h3 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">GROUP COORDINATOR</h3>

    <AccordionItem title="Shri V.T.V. Ramana">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305516" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Cloud Operations and Services Division</li>
        <li>Cloud Technology</li>
        <li>Command and Control Centre</li>
        <li>Cyber and Information Security Audit Group</li>
        <li>Cyber and Information Security Group</li>
        <li>Data Centre ICT Infrastructure Division</li>
        <li>Data Centre Non IT Infrastructure Division</li>
        <li>Data Centre, Cloud Infrastructure and Services Group</li>
      </ul>
    </AccordionItem>
  </div>

  <div>
    <h3 className="text-xl font-bold text-gray-700 mb-2 border-b pb-1">HEAD OF THE GROUPS</h3>

    <AccordionItem title="Shri Ajay Madhukar Joshi">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="040-23494718" />
      <p className="font-semibold">Division:</p>
      <p>Mail and Messaging Division</p>
    </AccordionItem>

    <AccordionItem title="Ms. Alka Misra">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305395" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Data Exchange (DE) Informatics Division</li>
        <li>eGovernment Procurement System (APSS and GPSS)</li>
        <li>O/o DDG (Alka Misra)</li>
        <li>Web Technology Division</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Alok Tiwari">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Cyber and Information Security Analytics Division</li>
        <li>Cyber and Information Security Management Division</li>
        <li>Cyber and Information Security Systems Division</li>
        <li>eService Delivery and Transformation Division (eSDT)</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Amit Bhargava">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Geo-Spatial Technology and Services Division</li>
        <li>Ministry of Housing and Urban Affairs (MoHUA) Informatics Division</li>
        <li>Urban Development and CPWD Informatics</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Anand Swarup Srivastava">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305785" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>CPO and Mission Unit of the IVFRT Team</li>
        <li>Foreigners Registration and Tracking (FRT) Unit</li>
        <li>Immigration Unit of the IVFRT Team</li>
        <li>Network and Infrastructure Unit of the IVFRT Team</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Ms. Anjali Dhingra">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305757" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Cooperative Core Banking System (CCBS)</li>
        <li>Data Analytics (DA) Informatics Division</li>
        <li>eHRMS</li>
        <li>eOffice Project Division</li>
        <li>Municipal Corporation & NDMC</li>
        <li>O/O DDG (Anjali Dhingra)</li>
        <li>Office Automation Division</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Ashish Vikram Asthana">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305887" />
      <p className="font-semibold">Division:</p>
      <p>Data Centre Non IT Infrastructure Division, O/o DDG (Ashish Vikram Asthana)</p>
    </AccordionItem>

    <AccordionItem title="Shri Ashok Kaul">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <p className="font-semibold">Division:</p>
      <p>Software Development Coordination Division (Maharashtra)</p>
    </AccordionItem>

    <AccordionItem title="Shri C.J. Antony">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305740" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Cyber and Information Security Governance Division</li>
        <li>Ministry of Heavy Industries (MHI) Informatics Division</li>
        <li>Ministry of Minority Affairs (MoMA) Informatics Division</li>
        <li>O/o DDG (C.J. Antony)</li>
        <li>Youth Affairs, Sports and Associated Organisations</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Dayanand Saha">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>PMO Informatics Division</li>
        <li>Videoconferencing Technologies and Services Division</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Deepak Saxena">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-22900503" />
      <p className="font-semibold">Division:</p>
      <p>O/o DDG (Deepak Saxena), Procurement Section</p>
    </AccordionItem>

    <AccordionItem title="Shri G. Mayil Muthu Kumaran">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305748" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Department of Consumer Affairs (DCA) Informatics Division</li>
        <li>Department of Food and Public Distribution (DFPD)</li>
        <li>E-Mapan and E-Jagriti Projects</li>
        <li>Election Commission Informatics Division</li>
        <li>Government Instant Messaging System (GIMS-SANDES)</li>
        <li>MoCAFPD Informatics Group</li>
        <li>MoFPI Informatics Division</li>
        <li>Project Management Division</li>
        <li>Quality Assurance and API Infrastructure Management</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Inder Pal Singh Sethi">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24362420" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>CollabFiles</li>
        <li>MeitY Projects Division</li>
        <li>Ministry of External Affairs (MEA) Informatics Division</li>
        <li>O/o DDG (Inder Pal Singh Sethi)</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="Shri Joydeep Shome">
      <InfoRow icon={<FaUser />} label="Designation" value="Scientist-G" />
      <InfoRow icon={<FaPhoneAlt />} label="Phone" value="011-24305269" />
      <p className="font-semibold">Divisions:</p>
      <ul className="list-disc pl-6">
        <li>Agile Software Development Division</li>
        <li>Nodal Centre for Mobile Application Development</li>
        <li>Analytics, Quality Assurance (eTransport)</li>
        <li>Challan, mParivahan and PUCC (eTransport)</li>
        <li>Common Schemes Platform (CSP) Division</li>
      </ul>
    </AccordionItem>

  </div>
</div>
);
};

export default AboutGroups;