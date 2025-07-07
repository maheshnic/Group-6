import { Phone, Mail } from 'lucide-react';

const AboutTeam = () => (
  <div className="bg-white p-6 rounded-lg shadow text-gray-800 space-y-6">
    <h2 className="text-2xl font-bold text-blue-700">Our Team</h2>
    <p>
      NIC functions under the guidance of dedicated leadership within the Ministry of Electronics & Information Technology (MeitY), led by the Hon’ble Ministers and Secretary.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Ashwini Vaishnaw */}
      <div className="border rounded-lg p-4 shadow-md flex flex-col items-center space-y-3">
  <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
    <img
      src="/Ashwini.jpg"
      alt="Shri Ashwini Vaishnaw"
      className="object-contain h-full"
    />
  </div>
  <h3 className="text-lg font-semibold text-blue-800 text-center">Shri Ashwini Vaishnaw</h3>
  <p className="text-sm font-medium text-gray-600 text-center">
    Hon'ble Minister of Railways, Information & Broadcasting, and Electronics & IT
  </p>
  <div className="text-sm space-y-1">
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24369191 (Office)</span></div>
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24362626 (Office)</span></div>
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24366070 (Fax)</span></div>
    <div className="flex items-center gap-2 mt-2"><Mail size={16} /> <span>moeit[at]gov[dot]in</span></div>
  </div>
  </div>

      {/* Jitin Prasada */}
      <div className="border rounded-lg p-4 shadow-md flex flex-col items-center space-y-3">
  <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
    <img
      src="/jitin-prasada.png"
      alt="Shri Ashwini Vaishnaw"
      className="object-contain h-full"
    />
  </div>
  <h3 className="text-lg font-semibold text-blue-800 text-center">Shri Jitin Prasada</h3>
  <p className="text-sm font-medium text-gray-600 text-center">
    Hon'ble Minister of State in the Ministry of Commerce and lndustry , and Electronics and Information Technology
  </p>
  <div className="text-sm space-y-1">
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24368757 (Office)</span></div>
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24368758 (Office)</span></div>
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24360958 (Fax)</span></div>
    <div className="flex items-center gap-2 mt-2"><Mail size={16} /> <span>mos-eit[at]gov[dot]in</span></div>
  </div>
</div>
 

      {/* S Krishnan */}
      <div className="border rounded-lg p-4 shadow-md flex flex-col items-center space-y-3">
  <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
    <img
      src="/s-krishnana.png"
      alt="Shri Ashwini Vaishnaw"
      className="object-contain h-full"
    />
  </div>
  <h3 className="text-lg font-semibold text-blue-800 text-center">Shri S Krishnan</h3>
  <p className="text-sm font-medium text-gray-600 text-center">
    Secretary , Ministry of Electronics & Information Technology
  </p>
  <div className="text-sm space-y-1">
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24364041 (Office)</span></div>
    <div className="flex items-center gap-2"><Phone size={16} /> <span>+91-11-24363134 (Office)</span></div>
    
    <div className="flex items-center gap-2 mt-2"><Mail size={16} /> <span>secretary[at]meity[dot]gov[dot]in</span></div>
  </div>
</div>
</div>
</div>
);

export default AboutTeam;
