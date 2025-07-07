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

const DepartmentList = ({
  departments: initialDepartments,
  onUpdateDepartments,
}) => {
  const [departments, setDepartments] = useState(initialDepartments);
  const [expandedDept, setExpandedDept] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    canPostJobs: false,
    canApproveReject: false,
  });

  const toggleExpand = (deptId) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddDepartment = () => {
    setShowAddForm(true);
    setEditingDept(null);
    setFormData({
      name: "",
      description: "",
      canPostJobs: false,
      canApproveReject: false,
    });
  };

  const handleEditDepartment = (dept) => {
    setEditingDept(dept.id);
    setShowAddForm(true);
    setFormData({
      name: dept.name,
      description: dept.description,
      canPostJobs: dept.permissions.canPostJobs,
      canApproveReject: dept.permissions.canApproveReject,
    });
  };

  const handleDeleteDepartment = (deptId) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      const updatedDepartments = departments.filter(
        (dept) => dept.id !== deptId
      );
      setDepartments(updatedDepartments);
      onUpdateDepartments(updatedDepartments);
      setExpandedDept(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingDept) {
      // Update existing department
      const updatedDepartments = departments.map((dept) =>
        dept.id === editingDept
          ? {
              ...dept,
              name: formData.name,
              description: formData.description,
              permissions: {
                canPostJobs: formData.canPostJobs,
                canApproveReject: formData.canApproveReject,
              },
            }
          : dept
      );
      setDepartments(updatedDepartments);
      onUpdateDepartments(updatedDepartments);
    } else {
      // Add new department
      const newDepartment = {
        id: `dept${Date.now()}`,
        name: formData.name,
        description: formData.description,
        permissions: {
          canPostJobs: formData.canPostJobs,
          canApproveReject: formData.canApproveReject,
        },
      };
      const updatedDepartments = [...departments, newDepartment];
      setDepartments(updatedDepartments);
      onUpdateDepartments(updatedDepartments);
    }

    setShowAddForm(false);
    setEditingDept(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Departments</h3>
        <button
          onClick={handleAddDepartment}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          <PlusCircle size={18} className="mr-2" />
          Add Department
        </button>
      </div>

      {showAddForm && (
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold mb-4">
            {editingDept ? "Edit Department" : "Add New Department"}
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Department Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="canPostJobs"
                    name="canPostJobs"
                    checked={formData.canPostJobs}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <label
                    htmlFor="canPostJobs"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Can Post Jobs
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="canApproveReject"
                    name="canApproveReject"
                    checked={formData.canApproveReject}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <label
                    htmlFor="canApproveReject"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Can Approve/Reject
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {editingDept ? "Update Department" : "Add Department"}
              </button>
            </div>
          </form>
        </div>
      )}

      {departments.length === 0 ? (
        <div className="text-center py-12">
          <Building2 size={48} className="mx-auto text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No departments
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by creating a new department.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(dept.id)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{dept.description}</p>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  {expandedDept === dept.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>

              {expandedDept === dept.id && (
                <div className="px-6 pb-6 pt-0">
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Permissions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${
                          dept.permissions.canPostJobs
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {dept.permissions.canPostJobs
                          ? "Can Post Jobs"
                          : "Cannot Post Jobs"}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${
                          dept.permissions.canApproveReject
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {dept.permissions.canApproveReject
                          ? "Can Approve"
                          : "Cannot Approve"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditDepartment(dept);
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDepartment(dept.id);
                      }}
                      className="text-red-600 hover:text-red-800 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
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
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DepartmentList;