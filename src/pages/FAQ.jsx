import React, {useState} from "react";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does NIC provide?",
      answer: (
        <>
          NIC offers various IT services including:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Government website development and hosting</li>
            <li>Digital governance solutions</li>
            <li>Cloud services (MeghRaj)</li>
            <li>Data analytics and management</li>
            <li>Network and security services</li>
            <li>Software development for government departments</li>
          </ul>
        </>
      ),
    },
    {
      question: "How can I report technical issues with NIC services?",
      answer: (
        <>
          You can report issues through:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <a href="https://servicedesk.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                NIC Service Desk Portal
              </a>
            </li>
            <li>Email: servicedesk[dot]nic[at]gov[dot]in</li>
            <li>Helpline: 1800-111-555 (Toll-free)</li>
          </ul>
        </>
      ),
    },
    {
      question: "How can government departments avail NIC services?",
      answer:
        "Government departments can submit service requests through their respective NIC units or through the NIC Service Desk portal. A Memorandum of Understanding (MoU) may be required for new projects.",
    },
    {
      question: "What is MeghRaj Cloud?",
      answer:
        "MeghRaj is NIC's Government of India Cloud initiative that provides secure cloud computing infrastructure for government departments. It offers IaaS, PaaS, and SaaS services tailored for government needs.",
    },
    {
      question: "How can I apply for a job at NIC?",
      answer:
        "NIC recruitment is done through UPSC for scientific/technical positions and through direct recruitment for other positions. Current openings are advertised on the NIC website (https://www.nic.in) and employment news.",
    },
    {
      question: "What is the NIC email policy?",
      answer:
        "NIC provides secure email services (@nic.in, @gov.in) for government officials. These accounts can only be created through proper authorization from the concerned department.",
    },
    {
      question: "How secure are NIC's digital services?",
      answer:
        "NIC services comply with stringent security standards including ISO 27001 certification. Regular audits, encryption, and multi-layered security protocols are implemented to protect government data.",
    },
    {
      question: "Can private organizations use NIC services?",
      answer:
        "NIC primarily serves government entities. However, some services like DigiLocker and certain APIs are available for public/private use through proper authorization and agreements.",
    },
    {
      question: "What is NIC's role in Digital India?",
      answer:
        "NIC is the technical backbone of Digital India, developing and maintaining key platforms like MyGov, eOffice, eHospital, DigiLocker, and the National Government Services Portal.",
    },
    {
      question: "How can I get training on NIC products?",
      answer: (
        <>
          NIC conducts regular training programs for government officials. Check the{" "}
          <a href="https://training.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            NIC Training Portal
          </a>{" "}
          for schedules and registration details.
        </>
      ),
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-4 text-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-semibold focus:outline-none"
            >
              {index + 1}. {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white border-t text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;