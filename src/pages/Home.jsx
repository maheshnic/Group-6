import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import './Calendar.css';

const Home = ({ navigate, notifications }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [holidays, setHolidays] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const mockHolidays =[
  { date: '2025-01-01', name: 'New Year\'s Day', type: 'gazetted', region: 'All India' },
  { date: '2025-01-26', name: 'Republic Day', type: 'gazetted', region: 'All India' },
  { date: '2025-03-17', name: 'Holi', type: 'gazetted', region: 'North India' },
  { date: '2025-04-14', name: 'Ambedkar Jayanti', type: 'restricted', region: 'All India' },
  { date: '2025-05-01', name: 'Labour Day', type: 'restricted', region: 'Most States' },
  { date: '2025-08-15', name: 'Independence Day', type: 'gazetted', region: 'All India' },
  { date: '2025-10-02', name: 'Gandhi Jayanti', type: 'gazetted', region: 'All India' },
  { date: '2025-10-20', name: 'Dussehra', type: 'gazetted', region: 'North & South India' },
  { date: '2025-10-31', name: 'Diwali', type: 'gazetted', region: 'Pan India' },
  { date: '2025-12-25', name: 'Christmas Day', type: 'gazetted', region: 'All India' }
  ]

  useEffect(() => {
  const fetchHolidays = async () => {
    try {
      const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/IN`);
      let apiData = [];

      if (res.ok) {
        const json = await res.json();
        apiData = json.map(h => ({
          date: new Date(h.date),
          type: 'gazetted',
          name: h.localName
        }));
      }

      const mockFiltered = mockHolidays
        .filter(h => new Date(h.date).getFullYear() === year)
        .map(h => ({
          ...h,
          date: new Date(h.date)
        }));

      setHolidays([...apiData, ...mockFiltered]);
    } catch (err) {
      console.error("Holiday fetch failed. Using mock data only.");
      const mockFiltered = mockHolidays
        .filter(h => new Date(h.date).getFullYear() === year)
        .map(h => ({
          ...h,
          date: new Date(h.date)
        }));
      setHolidays(mockFiltered);
    }
  };

  fetchHolidays();
}, [year]);

  const sliderImages = [
    {
      src: '/sugarcane.jpg',
      caption: 'Hon’ble Minister of Sugarcane Industries, Bihar launched the online portal of Sugarcane Mechanization Scheme.',
    },
    {
      src: '/maharashtra.jpg',
      caption: 'Hon’ble Chief Minister of Maharashtra, inaugrated the launch of eCabinet at Mantralaya, Mumbai.',
    },
    {
      src: '/parliamentary.jpeg',
      caption: 'Hon’ble Union MoS for Parliamentary Affairs, launched National e-Vidhan Application (NeVA) for the Puducherry Legislative Assembly.',
    },
    {
      src: '/gujarat.jpeg',
      caption: 'Hon’ble Chief Minister of Gujarat, launched the XGN 2.0 portal for the Gujarat Pollution Control Board.',
    },
    {
      src: '/chattisgarh1.jpeg',
      caption: 'Hon’ble CM, Chhattisgarh, launched Hostel Management Web Application for Tribal Development Department of the State.',
    },
    {
      src: '/chattisgarh2.jpeg',
      caption: 'Hon’ble Minister of Parliamentary Affairs, Govt. of Chhattisgarh, launched the official website of the Department.',
    },
  ];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? sliderImages.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 2 >= sliderImages.length ? 0 : prev + 2));
  };

  const jobAlerts = notifications.filter(notif => notif.type === 'Job Alert');
  const formReleases = notifications.filter(notif => notif.type === 'Form Release');
  const otherUpdates = notifications.filter(notif => notif.type !== 'Job Alert' && notif.type !== 'Form Release');

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Government Job Service Portal</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8">
          Your one-stop solution for applying to any job.
        </p>
        <img
          src="/Office.jpg"
          alt="Office Building"
          className="rounded-lg shadow-md max-w-full h-auto"
          onError={(e) => { e.target.onerror = null; e.target.src = 'Office.jpg'; }}
        />

        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Recent Events</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex transition-all duration-500 ease-in-out">
              {sliderImages.slice(slideIndex, slideIndex + 2).map((img, index) => (
                <div key={index} className="w-1/2 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={img.src}
                      alt={`Slide ${index}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'fallback.jpg';
                      }}
                    />
                    <div className="p-4 text-sm text-gray-700">{img.caption}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full shadow hover:bg-blue-600"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full shadow hover:bg-blue-600"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8"></div>
      </div>

      <div className="flex-1 bg-blue-200 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Latest Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-600">No new updates at the moment. Please check back later!</p>
        ) : (
          <div className="space-y-6 overflow-hidden max-h-[400px] pr-2">
            <div className="space-y-6 animate-scroll-medium">
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
          </div>
        )}

        
        <div className="mt-8 bg-white p-4 rounded-lg shadow-inner w-full">
          <div className="w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Holiday Calendar</h2>
          <Calendar
  onActiveStartDateChange={({ activeStartDate }) =>
    setYear(activeStartDate.getFullYear())
  }
  tileClassName={({ date, view }) => {
    if (view !== 'month') return null;

    const holiday = holidays.find(h => isSameDay(h.date, date));
    const day = date.getDay();

    if (holiday?.type === 'gazetted') return 'bg-red-100 ring-2 ring-red-400 text-red-800';
    if (holiday?.type === 'restricted') return 'bg-green-100 ring-2 ring-green-400 text-green-800';
    if (!holiday && (day === 0 || day === 6)) return 'bg-blue-100 ring-2 ring-blue-400 text-blue-800';
    return null;
  }}
  tileContent={({ date, view }) => {
  if (view === 'month') {
    const holiday = holidays.find(h => isSameDay(h.date, date));
    if (holiday) {
      return (
        <div className="text-[10px] text-center text-gray-700 leading-tight mt-1">
          {holiday.name.length > 12
            ? holiday.name.slice(0, 12) + '…'
            : holiday.name}
        </div>
      );
    }
  }
  return null;
}}
/>
          </div>
          <div className="mt-4 flex justify-around text-sm text-gray-700">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-200 inline-block mr-2"></span> Gazetted Holiday
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-100 inline-block mr-2"></span> Weekly Off
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-200 inline-block mr-2"></span> Restricted Holiday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
