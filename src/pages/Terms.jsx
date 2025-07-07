import React from "react";
const Terms = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800 space-y-6">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">
      Terms & Conditions
    </h1>

    <section>
      <h2 className="text-xl font-semibold mb-2">1. Use of NIC Services</h2>
      <p>
        This website and all NIC services are provided by the National Informatics Centre, 
        Ministry of Electronics and Information Technology, Government of India. By accessing 
        and using NIC services, you agree to comply with all applicable laws and these terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">2. Service Availability</h2>
      <p>
        NIC strives to maintain 24/7 availability of its services but makes no warranties 
        regarding uninterrupted access. Services may be temporarily unavailable for maintenance 
        or due to technical reasons beyond NIC's control.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">3. Data Privacy</h2>
      <p>
        NIC follows strict data protection protocols as per Government of India guidelines. 
        However, users are advised not to share sensitive personal information unless through 
        secured channels. NIC is not liable for data breaches caused by user negligence.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
      <p>
        All content, logos, and software provided through NIC services are property of 
        the Government of India unless otherwise specified. Unauthorized reproduction or 
        distribution is prohibited under the Indian Copyright Act.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">5. Acceptable Use</h2>
      <p>
        Users shall not misuse NIC services for any unlawful purpose or in any way that 
        may damage, disable, overburden, or impair any NIC server. Any violation may result 
        in termination of access and legal action.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
      <p>
        NIC shall not be liable for any direct, indirect, incidental or consequential 
        damages arising from the use of its services. Government departments using NIC 
        services are responsible for their own content and data.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">7. Amendments</h2>
      <p>
        NIC reserves the right to modify these terms at any time. Continued use of services 
        after changes constitutes acceptance of the modified terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p>
        These terms shall be governed by and construed in accordance with Indian laws. 
        Disputes shall be subject to the exclusive jurisdiction of courts in New Delhi.
      </p>
    </section>
  </div>
);

export default Terms;