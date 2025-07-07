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
const SettingsContent = ({
  adminUser,
  onUpdateAdminProfile,
  onUpdateAdminPassword,
  departments,
  onUpdateDepartmentPermissions,
}) => {
  const [adminEmail, setAdminEmail] = useState(adminUser.email || "");
  const [adminId, setAdminId] = useState(adminUser.adminId || "admin-001");
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [tempDepartmentPermissions, setTempDepartmentPermissions] = useState(
    () => {
      const perms = {};
      departments.forEach((dept) => {
        perms[dept.id] = { ...dept.permissions };
      });
      return perms;
    }
  );
  const [deptMessage, setDeptMessage] = useState("");
  const [deptError, setDeptError] = useState("");

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setProfileMessage("");
    setProfileError("");
    if (!adminEmail || !adminId) {
      setProfileError("Email and Admin ID cannot be empty.");
      return;
    }

    onUpdateAdminProfile({ ...adminUser, email: adminEmail, adminId: adminId });
    setProfileMessage("Admin profile updated successfully!");
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    setPasswordMessage("");
    setPasswordError("");

    if (!newPassword || !confirmNewPassword) {
      setPasswordError("Please fill in both new password fields.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError("New password and confirm password do not match.");
      return;
    }

    onUpdateAdminPassword(newPassword);
    setPasswordMessage("Password updated successfully!");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handlePermissionChange = (deptId, permissionType) => {
    setTempDepartmentPermissions((prev) => ({
      ...prev,
      [deptId]: {
        ...prev[deptId],
        [permissionType]: !prev[deptId][permissionType],
      },
    }));
  };

  const handleSaveDepartmentPermissions = () => {
    setDeptMessage("");
    setDeptError("");
    onUpdateDepartmentPermissions(tempDepartmentPermissions);
    setDeptMessage("Department permissions updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Account Settings
      </h3>

      <div className="mb-8 p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">
          Admin Profile
        </h4>
        {profileError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {profileError}
          </div>
        )}
        {profileMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {profileMessage}
          </div>
        )}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label
              htmlFor="adminEmail"
              className="block text-gray-700 font-semibold mb-2"
            >
              Admin Email
            </label>
            <input
              type="email"
              id="adminEmail"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="adminId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Admin ID
            </label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>

      <div className="mb-8 p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">
          Change Password
        </h4>
        {passwordError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {passwordError}
          </div>
        )}
        {passwordMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {passwordMessage}
          </div>
        )}
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              minLength="8"
              aria-label="New Password"
            />
          </div>
          <div>
            <label
              htmlFor="confirmNewPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              minLength="8"
              aria-label="Confirm New Password"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Update Password
          </button>
        </form>
      </div>

      <div className="p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">
          Department Permissions
        </h4>
        {deptError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {deptError}
          </div>
        )}
        {deptMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {deptMessage}
          </div>
        )}
        {departments.length === 0 ? (
          <p className="text-gray-600">
            No departments to manage permissions for.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                    Department
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                    Can Post Jobs
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                    Can Approve/Reject
                  </th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr
                    key={dept.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm text-gray-800 font-medium">
                      {dept.name}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <input
                        type="checkbox"
                        checked={
                          tempDepartmentPermissions[dept.id]?.canPostJobs ||
                          false
                        }
                        onChange={() =>
                          handlePermissionChange(dept.id, "canPostJobs")
                        }
                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                      />
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <input
                        type="checkbox"
                        checked={
                          tempDepartmentPermissions[dept.id]
                            ?.canApproveReject || false
                        }
                        onChange={() =>
                          handlePermissionChange(dept.id, "canApproveReject")
                        }
                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSaveDepartmentPermissions}
              className="mt-6 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Save Permissions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SettingsContent;