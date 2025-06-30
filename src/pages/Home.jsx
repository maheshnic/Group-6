import React from 'react';

const Home = ({ navigate, notifications }) => {
  
  const jobAlerts = notifications.filter(notif => notif.type === 'Job Alert');
  const formReleases = notifications.filter(notif => notif.type === 'Form Release');
  const otherUpdates = notifications.filter(notif => notif.type !== 'Job Alert' && notif.type !== 'Form Release');

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full flex flex-col md:flex-row gap-8">
      {}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Public Service Portal</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8">
          Your one-stop solution for all commission-related services.
        </p>
        <img
          src="/Office.jpg"
          alt="Office Building"
          className="rounded-lg shadow-md max-w-full h-auto"
          onError={(e) => { e.target.onerror = null; e.target.src='Office.jpg'; }}
        />
        <div className="flex justify-center space-x-4 mt-8">
          {}
        </div>
      </div>

      {}
      <div className="flex-1 bg-blue-200 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col">

        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Latest Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-600">No new updates at the moment. Please check back later!</p>
        ) : (
          <div className="space-y-6 overflow-y-auto max-h-[400px] pr-2 animate-scroll">

            {}
            {jobAlerts.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <span className="mr-2 text-yellow-500">&#9888;</span> Job Alerts
                </h3>
                <ul className="list-none space-y-3">
                  {jobAlerts.map(notif => (
                    <li key={notif.id} className="bg-blue-50 p-3 rounded-md border border-blue-200">
                      <p className="text-sm font-medium text-blue-800">{notif.message}</p>
                      {notif.deadline && <p className="text-xs text-gray-600 mt-1">Deadline: <span className="font-semibold">{notif.deadline}</span></p>}
                      <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {}
            {formReleases.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <span className="mr-2 text-green-500">&#128196;</span> Form Releases
                </h3>
                <ul className="list-none space-y-3">
                  {formReleases.map(notif => (
                    <li key={notif.id} className="bg-green-50 p-3 rounded-md border border-green-200">
                      <p className="text-sm font-medium text-green-800">{notif.message}</p>
                      {notif.releaseDate && <p className="text-xs text-gray-600 mt-1">Release Date: <span className="font-semibold">{notif.releaseDate}</span></p>}
                      <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {}
            {otherUpdates.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="mr-2 text-gray-500">&#x1F4E2;</span> Other Updates
                </h3>
                <ul className="list-none space-y-3">
                  {otherUpdates.map(notif => (
                    <li key={notif.id} className="bg-gray-100 p-3 rounded-md border border-gray-200">
                      <p className="text-sm font-medium text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1">Type: {notif.type} - {notif.timestamp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
