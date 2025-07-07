import React, {useState} from "react";
const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJob, setFilterJob] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      job: "Software Engineer",
      email: "alice@example.com",
      status: "New Application",
      appliedDate: "2025-06-15",
      experience: "5 years",
      skills: ["React", "Node.js", "AWS"],
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      interviewDate: "",
    },
    {
      id: 2,
      name: "Bob Williams",
      job: "Project Manager",
      email: "bob@example.com",
      status: "New Application",
      appliedDate: "2025-06-10",
      experience: "8 years",
      skills: ["Agile", "Scrum", "Budgeting"],
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      interviewDate: "",
    },
    {
      id: 3,
      name: "Charlie Brown",
      job: "Software Engineer",
      email: "charlie@example.com",
      status: "New Application",
      appliedDate: "2025-06-20",
      experience: "3 years",
      skills: ["Python", "Django", "SQL"],
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      interviewDate: "",
    },
    {
      id: 4,
      name: "Diana Prince",
      job: "Data Analyst",
      email: "diana@example.com",
      status: "New Application",
      appliedDate: "2025-05-28",
      experience: "4 years",
      skills: ["SQL", "Tableau", "Excel"],
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      interviewDate: "",
    },
    {
      id: 5,
      name: "Eve Adams",
      job: "Project Manager",
      email: "eve@example.com",
      status: "New Application",
      appliedDate: "2025-05-15",
      experience: "10 years",
      skills: ["PMP", "Risk Management", "Leadership"],
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      interviewDate: "",
    },
  ]);

  // Filter and sort logic
  const filteredCandidates = candidates
    .filter(
      (candidate) =>
        (filterJob === "all" || candidate.job === filterJob) &&
        (candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Hired":
        return "bg-green-100 text-green-800";
      case "Shortlisted":
        return "bg-blue-100 text-blue-800";
      case "Interview Scheduled":
        return "bg-purple-100 text-purple-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "New Application":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Action handlers
  const handleScheduleInterview = (candidateId, date) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === candidateId
          ? {
              ...candidate,
              status: "Interview Scheduled",
              interviewDate: date || "To be scheduled",
            }
          : candidate
      )
    );
    setSelectedCandidate(null);
  };

  const handleShortlist = (candidateId) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, status: "Shortlisted" }
          : candidate
      )
    );
    setSelectedCandidate(null);
  };

  const handleReject = (candidateId) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, status: "Rejected" }
          : candidate
      )
    );
    setSelectedCandidate(null);
  };

  const handleHire = (candidateId) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, status: "Hired" }
          : candidate
      )
    );
    setSelectedCandidate(null);
  };

  const uniqueJobs = [...new Set(candidates.map((candidate) => candidate.job))];

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">
        List of Candidates
      </h1>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full md:w-64">
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

        <div className="flex gap-2">
          <select
            value={filterJob}
            onChange={(e) => setFilterJob(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Jobs</option>
            {uniqueJobs.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer"
                onClick={() => requestSort("name")}
              >
                <div className="flex items-center">
                  Name
                  {sortConfig.key === "name" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer"
                onClick={() => requestSort("job")}
              >
                <div className="flex items-center">
                  Job Applied
                  {sortConfig.key === "job" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer"
                onClick={() => requestSort("appliedDate")}
              >
                <div className="flex items-center">
                  Applied On
                  {sortConfig.key === "appliedDate" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{candidate.name}</p>
                        <p className="text-sm text-gray-500">
                          {candidate.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{candidate.job}</p>
                    <p className="text-sm text-gray-500">
                      {candidate.experience}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="inline-flex flex-col space-y-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          candidate.status
                        )} whitespace-nowrap`}
                      >
                        {candidate.status}
                      </span>
                      {candidate.status === "Interview Scheduled" &&
                        candidate.interviewDate && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              candidate.status
                            )} whitespace-nowrap`}
                          >
                            {candidate.interviewDate}
                          </span>
                        )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(candidate.appliedDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 flex space-x-2">
                    <button
                      onClick={() => setSelectedCandidate(candidate)}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                      title="View Details"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                  No candidates found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img
                    src={selectedCandidate.avatar}
                    alt={selectedCandidate.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedCandidate.name}
                    </h2>
                    <p className="text-gray-600">{selectedCandidate.email}</p>
                    <div className="inline-flex flex-col space-y-1 mt-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          selectedCandidate.status
                        )} whitespace-nowrap`}
                      >
                        {selectedCandidate.status}
                      </span>
                      {selectedCandidate.status === "Interview Scheduled" &&
                        selectedCandidate.interviewDate && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              selectedCandidate.status
                            )} whitespace-nowrap`}
                          >
                            Scheduled: {selectedCandidate.interviewDate}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCandidate(null)}
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

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold border-b pb-2 mb-3">
                    Application Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Position Applied</p>
                      <p className="font-medium">{selectedCandidate.job}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Application Status
                      </p>
                      <div className="inline-flex flex-col space-y-1">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            selectedCandidate.status
                          )} whitespace-nowrap`}
                        >
                          {selectedCandidate.status}
                        </span>
                        {selectedCandidate.status === "Interview Scheduled" &&
                          selectedCandidate.interviewDate && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                selectedCandidate.status
                              )} whitespace-nowrap`}
                            >
                              Scheduled: {selectedCandidate.interviewDate}
                            </span>
                          )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Applied On</p>
                      <p>
                        {new Date(
                          selectedCandidate.appliedDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p>{selectedCandidate.experience}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold border-b pb-2 mb-3">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold border-b pb-2 mb-3">
                  Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCandidate.status !== "Interview Scheduled" && (
                    <button
                      onClick={() => {
                        const date = prompt(
                          "Enter interview date (YYYY-MM-DD):"
                        );
                        if (date)
                          handleScheduleInterview(selectedCandidate.id, date);
                      }}
                      className={`flex items-center px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white`}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Schedule Interview
                    </button>
                  )}

                  <button
                    onClick={() => handleShortlist(selectedCandidate.id)}
                    disabled={selectedCandidate.status === "Shortlisted"}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      selectedCandidate.status === "Shortlisted"
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Shortlist
                  </button>

                  <button
                    onClick={() => handleReject(selectedCandidate.id)}
                    disabled={selectedCandidate.status === "Rejected"}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      selectedCandidate.status === "Rejected"
                        ? "bg-red-300 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Reject
                  </button>

                  <button
                    onClick={() => handleHire(selectedCandidate.id)}
                    disabled={selectedCandidate.status === "Hired"}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      selectedCandidate.status === "Hired"
                        ? "bg-green-300 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Hire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Candidates;