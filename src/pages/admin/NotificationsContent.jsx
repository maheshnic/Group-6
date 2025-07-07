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
const NotificationsContent = ({ notifications, onAddNotification }) => {
  const [notifType, setNotifType] = useState("");
  const [notifMessage, setNotifMessage] = useState("");
  const [notifDeadline, setNotifDeadline] = useState("");
  const [notifReleaseDate, setNotifReleaseDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePostNotification = () => {
    setErrorMessage("");
    setSuccessMessage("");
    if (!notifType || !notifMessage) {
      setErrorMessage(
        "Please select a type and enter a message for the notification."
      );
      return;
    }

    const details = {};
    if (notifType === "Job Alert" && notifDeadline) {
      details.deadline = notifDeadline;
    }
    if (notifType === "Form Release" && notifReleaseDate) {
      details.releaseDate = notifReleaseDate;
    }

    onAddNotification(notifType, notifMessage, details);
    setSuccessMessage("Notification posted successfully!");
    setNotifType("");
    setNotifMessage("");
    setNotifDeadline("");
    setNotifReleaseDate("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Notifications & Updates
      </h3>

      <div className="mb-6 border p-4 rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold mb-3">
          Post New Notification (For Admin/Recruiters)
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
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="notifType"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Notification Type
            </label>
            <select
              id="notifType"
              value={notifType}
              onChange={(e) => {
                setNotifType(e.target.value);
                setNotifDeadline("");
                setNotifReleaseDate("");
              }}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Job Alert">Job Alert</option>
              <option value="Application Update">Application Update</option>
              <option value="System Message">System Message</option>
              <option value="Message from Recruiter">
                Message from Recruiter
              </option>
              <option value="Form Release">Form Release</option> {}
            </select>
          </div>
          {notifType === "Job Alert" && (
            <div>
              <label
                htmlFor="notifDeadline"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Submission Deadline
              </label>
              <input
                type="date"
                id="notifDeadline"
                value={notifDeadline}
                onChange={(e) => setNotifDeadline(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {notifType === "Form Release" && (
            <div>
              <label
                htmlFor="notifReleaseDate"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Release Date
              </label>
              <input
                type="date"
                id="notifReleaseDate"
                value={notifReleaseDate}
                onChange={(e) => setNotifReleaseDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="col-span-full">
            {" "}
            {}
            <label
              htmlFor="notifMessage"
              className="block text-gray-700 text-sm font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="notifMessage"
              value={notifMessage}
              onChange={(e) => setNotifMessage(e.target.value)}
              rows="3"
              placeholder="Enter notification message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handlePostNotification}
          className="mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200"
        >
          Post Notification
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-600">No notifications to display.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Recent Notifications
          </h4>
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
                  Message
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Date/Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notif) => (
                <tr
                  key={notif.id}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {notif.timestamp}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {notif.type}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {notif.message}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {notif.deadline || notif.releaseDate || "N/A"}
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
export default NotificationsContent;