import React, { useState } from "react";
import {
PlusCircle,
ChevronDown,
ChevronUp,
} from "lucide-react";

const JobListContent = ({ jobs, setJobs }) => {
const [showForm, setShowForm] = useState(false);
const [expandedIndex, setExpandedIndex] = useState(null);
const [newJob, setNewJob] = useState({
title: "",
description: "",
departmentName: "",
vacancies: "",
qualifications: "",
location: "",
companyName: "",
companyWebsite: "",
positionFilled: false,
featured: false,
deadline: "",
category: "",
jobType: "",
});

const toggleExpanded = (index) => {
setExpandedIndex(expandedIndex === index ? null : index);
};

const handleChange = (e) => {
const { name, value, type, checked } = e.target;
setNewJob((prev) => ({
...prev,
[name]: type === "checkbox" ? checked : value,
}));
};

const handleAddJob = () => {
const jobWithId = { ...newJob, id: Date.now() };
setJobs((prev) => [...prev, jobWithId]);
setNewJob({
title: "",
description: "",
departmentName: "",
vacancies: "",
qualifications: "",
location: "",
companyName: "",
companyWebsite: "",
positionFilled: false,
featured: false,
deadline: "",
category: "",
jobType: "",
});
setShowForm(false);
};

return (
<div className="bg-white p-6 rounded-lg shadow-md">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-gray-800">
Available Job Postings
</h3>
<button
onClick={() => setShowForm(!showForm)}
className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
>
<PlusCircle size={18} className="mr-2" />
{showForm ? "Cancel" : "Add New Job"}
</button>
</div>

  {showForm && (
    <div className="mb-6 border p-4 rounded-lg space-y-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" value={newJob.title} onChange={handleChange} placeholder="Job Position Title" className="border p-2 rounded" />
        <input name="departmentName" value={newJob.departmentName} onChange={handleChange} placeholder="Department" className="border p-2 rounded" />
        <input name="vacancies" value={newJob.vacancies} onChange={handleChange} placeholder="Number of Vacancies" className="border p-2 rounded" />
        <input name="qualifications" value={newJob.qualifications} onChange={handleChange} placeholder="Required Qualifications" className="border p-2 rounded" />
        <input name="location" value={newJob.location} onChange={handleChange} placeholder="Job Location" className="border p-2 rounded" />
        <input name="companyName" value={newJob.companyName} onChange={handleChange} placeholder="Company Name" className="border p-2 rounded" />
        <input name="companyWebsite" value={newJob.companyWebsite} onChange={handleChange} placeholder="Company Website" className="border p-2 rounded" />
        <input name="deadline" type="date" value={newJob.expiryDate} onChange={handleChange} className="border p-2 rounded" />
        <input name="category" value={newJob.category} onChange={handleChange} placeholder="Job Category" className="border p-2 rounded" />
        <input name="jobType" value={newJob.jobType} onChange={handleChange} placeholder="Job Type" className="border p-2 rounded" />
      </div>
      <textarea name="description" value={newJob.description} onChange={handleChange} placeholder="Job Description" className="w-full border p-2 rounded" rows={4}></textarea>
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="featured" checked={newJob.featured} onChange={handleChange} />
          Feature this job
        </label>
      </div>
      <button onClick={handleAddJob} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Job
      </button>
    </div>
  )}

  {jobs.length === 0 ? (
    <p className="text-gray-600">No job postings available.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Job Title</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Department</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Vacancies</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Qualifications</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Details</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <React.Fragment key={job.id}>
              <tr className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800 font-medium">{job.title}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{job.departmentName}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{job.vacancies}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{job.qualifications}</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <button onClick={() => toggleExpanded(index)} className="text-blue-600 hover:underline">
                    {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </td>
              </tr>
              {expandedIndex === index && (
                <tr className="bg-gray-50">
                  <td colSpan={5} className="px-4 py-4 text-sm text-gray-700">
                    <div><strong>Description:</strong> {job.description}</div>
                    <div><strong>Location:</strong> {job.location}</div>
                    <div><strong>Company:</strong> {job.companyName}</div>
                    <div><strong>Website:</strong> {job.companyWebsite}</div>
                    <div><strong>Category:</strong> {job.category}</div>
                    <div><strong>Type:</strong> {job.jobType}</div>
                    <div><strong>Deadline:</strong> {job.deadline}</div>
                    <div><strong>Featured:</strong> {job.featured ? "Yes" : "No"}</div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
);
};

export default JobListContent;