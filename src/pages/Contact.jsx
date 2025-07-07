
import React from "react";
const Contact = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800 space-y-6">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">
      Contact Us
    </h1>

    <section>
      <h2 className="text-xl font-semibold mb-2">NIC Office Address</h2>
      <p>
        National Informatics Centre A-Block, CGO Complex, Lodhi Road New Delhi –
        110 003
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Contact Numbers</h2>
      <ul className="list-disc list-inside">
        <li>
          NIC Facilitation Counter: 011-23385271 / 011-23381125 / 011-23098543
        </li>
        <li>Working hours: 10 AM to 5 PM on all working days</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Email</h2>
      <p>
        <strong>Feedback:</strong> feedback-nic@gov.in
        <br />
        <strong>Technical Help:</strong> helpdesk-nic[at]nic[dot]in
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">NIC Technical Support</h2>
      <p>
        If you face any technical issues while using the portal, contact NIC
        Service Desk:
      </p>
      <ul className="list-disc list-inside">
        <li>
          Helpdesk:{" "}
          <a
            href="https://servicedesk.nic.in"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://servicedesk.nic.in
          </a>
        </li>
        <li>Email: servicedesk[dot]nic[at]gov[dot]in</li>
        <li>Phone: 1800-111-555</li>
      </ul>
    </section>
  </div>
);
export default Contact;