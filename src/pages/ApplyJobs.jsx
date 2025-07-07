import React, {useState} from "react";
const ApplyJobs = ({ navigate }) => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const jobList = [
    {
      vacancy: "01/2025",
      post: "Software Engineer",
      department: "Engineering",
      location: "New Delhi",
      salary: "₹56,100 - ₹1,77,500",
      deadline: "2025-07-15",
      qualifications: "Bachelor's in Computer Science or related field",
      experience: "3+ years in software development",
      skills: ["Java", "Python", "SQL", "Spring Boot", "React"],
      description:
        "The Software Engineer will be responsible for developing and maintaining software applications for government services. The role requires strong problem-solving skills and the ability to work in a team environment.",
      responsibilities: [
        "Design, develop and implement software applications",
        "Write clean, scalable code using programming languages",
        "Test and deploy applications and systems",
        "Revise, update, refactor and debug code",
        "Serve as an expert on applications and provide technical support",
      ],
      benefits: [
        "Government housing allowance",
        "Medical insurance for family",
        "Pension benefits",
        "40 days paid leave annually",
        "Professional development allowance",
      ],
    },
    {
      vacancy: "02/2025",
      post: "Project Manager",
      department: "Administration",
      location: "Multiple Locations",
      salary: "₹67,700 - ₹2,08,700",
      deadline: "2025-07-20",
      qualifications: "Master's in Management or equivalent",
      experience: "5+ years in project management",
      skills: [
        "PMP",
        "Agile",
        "Budgeting",
        "Risk Management",
        "Stakeholder Management",
      ],
      description:
        "The Project Manager will oversee government projects from conception to completion, ensuring they are completed on time and within budget while meeting all requirements.",
      responsibilities: [
        "Define project scope, goals and deliverables",
        "Develop full-scale project plans",
        "Assemble and coordinate project staff",
        "Manage project budget and resource allocation",
        "Track project deliverables using appropriate tools",
      ],
      benefits: [
        "Official vehicle with driver",
        "Housing allowance",
        "Comprehensive health coverage",
        "Education allowance for children",
        "Performance bonuses",
      ],
    },
    {
      vacancy: "03/2025",
      post: "Data Analyst",
      department: "Statistics",
      location: "Kolkata",
      salary: "₹47,600 - ₹1,51,100",
      deadline: "2025-07-10",
      qualifications: "Bachelor's in Statistics, Mathematics or related field",
      experience: "2+ years in data analysis",
      skills: ["R", "Python", "Tableau", "SQL", "Excel"],
      description:
        "The Data Analyst will be responsible for interpreting data and turning it into information which can offer ways to improve government services, thus affecting policy decisions.",
      responsibilities: [
        "Interpret data and analyze results",
        "Develop and implement data analyses and collection systems",
        "Identify patterns and trends in data sets",
        "Work alongside teams to establish business needs",
        "Define new data collection and analysis processes",
      ],
      benefits: [
        "Flexible working hours",
        "Research publication support",
        "Conference attendance allowance",
        "Health insurance",
        "Subsidized housing",
      ],
    },
  ];

  const toggleSaveJob = (vacancyNo) => {
    setSavedJobs((prev) =>
      prev.includes(vacancyNo)
        ? prev.filter((v) => v !== vacancyNo)
        : [...prev, vacancyNo]
    );
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const filteredJobs =
    filter === "saved"
      ? jobList.filter((job) => savedJobs.includes(job.vacancy))
      : jobList;

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">
          Available Job Vacancies
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            All Jobs
          </button>
          <button
            onClick={() => setFilter("saved")}
            className={`px-4 py-2 rounded-md flex items-center ${
              filter === "saved" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            <svg
              className="w-5 h-5 mr-1"
              fill={savedJobs.length > 0 ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Saved ({savedJobs.length})
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold text-blue-800 mr-3">
                      {job.post}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {job.vacancy}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    {job.department} Department • {job.location}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveJob(job.vacancy);
                  }}
                  className="text-gray-400 hover:text-yellow-500"
                  aria-label={
                    savedJobs.includes(job.vacancy) ? "Unsave job" : "Save job"
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill={
                      savedJobs.includes(job.vacancy) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Salary
                  </h3>
                  <p>{job.salary}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Application Deadline
                  </h3>
                  <p>{new Date(job.deadline).toLocaleDateString("en-IN")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Required Experience
                  </h3>
                  <p>{job.experience}</p>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-500">
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => navigate("application-form")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-colors"
                >
                  Apply Now
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleViewDetails(job)}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No jobs found
          </h3>
          <p className="mt-1 text-gray-500">
            {filter === "saved"
              ? "You haven't saved any jobs yet."
              : "There are currently no vacancies matching your criteria."}
          </p>
          {filter === "saved" && (
            <button
              onClick={() => setFilter("all")}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse all jobs
            </button>
          )}
        </div>
      )}

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    {selectedJob.post}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {selectedJob.department} Department • {selectedJob.location}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mt-2 px-2.5 py-0.5 rounded">
                    Vacancy No: {selectedJob.vacancy}
                  </span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
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
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Job Details
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Salary Range
                      </h4>
                      <p>{selectedJob.salary}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Application Deadline
                      </h4>
                      <p>
                        {new Date(selectedJob.deadline).toLocaleDateString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Required Qualifications
                      </h4>
                      <p>{selectedJob.qualifications}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">
                        Required Experience
                      </h4>
                      <p>{selectedJob.experience}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedJob.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Job Description
                </h3>
                <p className="mt-4">{selectedJob.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Key Responsibilities
                  </h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Benefits
                  </h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {selectedJob.benefits.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    navigate("application-form");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center"
                >
                  Apply Now
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyJobs;