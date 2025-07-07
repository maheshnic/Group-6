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
const LogsContent = ({ logs, onAddLog }) => {
  const [logType, setLogType] = useState("");
  const [logAction, setLogAction] = useState("");
  const [logUser, setLogUser] = useState("");
  const [logDetails, setLogDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSimulateLog = () => {
    setErrorMessage("");
    setSuccessMessage("");
    if (!logType || !logAction || !logUser || !logDetails) {
      setErrorMessage("Please fill all fields to simulate a log entry.");
      return;
    }
    onAddLog(logType, logAction, logUser, logDetails);
    setSuccessMessage("Log entry simulated successfully!");
    setLogType("");
    setLogAction("");
    setLogUser("");
    setLogDetails("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        System Logs & Audit Trail
      </h3>

      <div className="mb-6 border p-4 rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold mb-3">
          Simulate New Log Entry (For Demo)
        </h4>
        {errorMessage && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="logType"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Type
            </label>
            <select
              id="logType"
              value={logType}
              onChange={(e) => setLogType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="User Action">User Action</option>
              <option value="System Event">System Event</option>
              <option value="Security">Security</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="logAction"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Action
            </label>
            <input
              type="text"
              id="logAction"
              value={logAction}
              onChange={(e) => setLogAction(e.target.value)}
              placeholder="e.g., Login Success, Data Update"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="logUser"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              User/Source
            </label>
            <input
              type="text"
              id="logUser"
              value={logUser}
              onChange={(e) => setLogUser(e.target.value)}
              placeholder="e.g., admin@example.com, System"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="logDetails"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Details
            </label>
            <textarea
              id="logDetails"
              value={logDetails}
              onChange={(e) => setLogDetails(e.target.value)}
              rows="2"
              placeholder="Detailed description of the event"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleSimulateLog}
          className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Add Simulated Log
        </button>
      </div>

      {logs.length === 0 ? (
        <p className="text-gray-600">No log entries to display.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Timestamp
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  User/Source
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {log.timestamp}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {log.type}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {log.action}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {log.user}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default LogsContent;