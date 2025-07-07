import React, {useState} from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Briefcase,
  Bell,
  Settings,
  LogOut,
  PlusCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";

const CandidateList = ({ candidates }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle resume button click
  const handleResumeClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowResumeModal(true);
  };

  // Function to handle contact button click
  const handleContactClick = (candidate) => {
    alert(
      `Contacting ${candidate.name}\nEmail: ${candidate.email}\nPhone: ${candidate.contact}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Candidates</h3>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filteredCandidates.length === 0 ? (
        <div className="text-center py-12">
          <Users size={48} className="mx-auto text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            {searchTerm ? "No matching candidates found" : "No candidates"}
          </h3>
          <p className="mt-1 text-gray-500">
            {searchTerm
              ? "Try a different search term"
              : "No candidates have applied yet"}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied Jobs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={candidate.avatar}
                          alt={candidate.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {candidate.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {candidate.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {candidate.appliedJobs.length > 0 ? (
                        <ul className="list-disc pl-5">
                          {candidate.appliedJobs.map((job, index) => (
                            <li key={index}>
                              {job.jobTitle} -{" "}
                              <span
                                className={`font-medium ${
                                  job.status === "Approved"
                                    ? "text-green-600"
                                    : job.status === "Rejected"
                                    ? "text-red-600"
                                    : "text-yellow-600"
                                }`}
                              >
                                {job.status}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-gray-400 italic">
                          No applications
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleResumeClick(candidate)}
                      className="text-blue-600 hover:text-blue-900 mr-3 flex items-center"
                    >
                      <FileText size={16} className="mr-1" />
                      Resume
                    </button>
                    <button
                      onClick={() => handleContactClick(candidate)}
                      className="text-green-600 hover:text-green-900 flex items-center"
                    >
                      <Mail size={16} className="mr-1" />
                      Contact
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedCandidate.name}'s Resume
                  </h2>
                  <p className="text-gray-600">
                    {selectedCandidate.email} | {selectedCandidate.contact}
                  </p>
                </div>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Resume Preview</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => alert("Downloading resume...")}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://example.com/resume.pdf", "_blank")
                      }
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Open in new tab
                    </button>
                  </div>
                </div>

                {/* Resume content */}
                <div className="bg-gray-50 p-4 rounded border border-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="https://placehold.co/600x800/EBF4FF/333333?text=Resume+Preview"
                      alt="Resume preview"
                      className="mx-auto mb-4 max-h-full"
                    />
                    <p className="text-gray-600">
                      Sample resume for {selectedCandidate.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Application History
                </h3>
                <div className="space-y-3">
                  {selectedCandidate.appliedJobs.length > 0 ? (
                    selectedCandidate.appliedJobs.map((job, index) => (
                      <div
                        key={index}
                        className="border-b pb-3 last:border-b-0"
                      >
                        <h4 className="font-medium">{job.jobTitle}</h4>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>
                            Status:{" "}
                            <span
                              className={`font-medium ${
                                job.status === "Approved"
                                  ? "text-green-600"
                                  : job.status === "Rejected"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              {job.status}
                            </span>
                          </span>
                          <span>
                            Applied on: {new Date().toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">
                      No job applications found
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={() => handleContactClick(selectedCandidate)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <Mail size={16} className="mr-1" />
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateList;