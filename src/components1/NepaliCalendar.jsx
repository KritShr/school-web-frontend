import React, { useState, useEffect } from 'react';

const NepaliCalendar = () => {
  const [bsYear, setBsYear] = useState(0);
  const [bsMonth, setBsMonth] = useState(0); // Initially set to 0
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDayOfWeek, setStartDayOfWeek] = useState(0); // Sunday = 0
  const [today, setToday] = useState({ day: 0, month: 0, year: 0 }); // Store today's date

  // Sample events array
  const events = [
    { date: '2081-04-05', event: 'New Year Celebration' },
    { date: '2024-08-15', event: 'Company Meeting' },
    { date: '2081-04-31', event: 'Festival' },
    { date: '2081-06-25', event: 'Independence Day' },
    { date: '2081-06-28', event: 'Team Outing' },
    { date: '2081-06-29', event: 'Company Picnic' },
    { date: '2081-06-30', event: 'Board Meeting' },
    { date: '2081-06-31', event: 'Community Service' },
  ];

  // Array for months in BS (Bikram Sambat)
  const bsMonths = [
    'Baisakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashwin',
    'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
  ];

  useEffect(() => {
    getTodayDate(); // Set the calendar to today's Nepali date on mount
  }, []);

  useEffect(() => {
    if (bsYear && bsMonth) {
      fetchBSMonthStartDate(bsYear, bsMonth);
    }
  }, [bsYear, bsMonth]);

  const fetchBSMonthStartDate = async (year, month) => {
    try {
      const bsDate = `${year}-${String(month).padStart(2, '0')}-01`;
      const response = await fetch(
        `https://nepali-datetime.amitgaru.me/date/convert/bs-ad?bs_date=${bsDate}&format=%Y-%m-%d`
      );
      const data = await response.json();
      const adDate = data.data;
      generateDaysInMonth(adDate);
      calculateStartDayOfWeek(adDate);
    } catch (error) {
      console.error('Error fetching the start date:', error);
    }
  };

  const generateDaysInMonth = (adDate) => {
    const date = new Date(adDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Assume that some Nepali months have 32 days
    const nepaliMonthDays = [31, 32, 31, 32, 31, 30, 29, 30, 29, 29, 30, 30]; // Example array for days in BS months

    const daysArray = [];
    for (let i = 1; i <= nepaliMonthDays[bsMonth - 1]; i++) {
      daysArray.push(i);
    }
    setDaysInMonth(daysArray);
  };

  const calculateStartDayOfWeek = (adDate) => {
    const date = new Date(adDate);
    const startDay = date.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    setStartDayOfWeek(startDay);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed
    const day = today.getDate();

    fetch(
      `https://nepali-datetime.amitgaru.me/date/convert/ad-bs?ad_date=${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}&format=%Y-%m-%d`
    )
      .then(response => response.json())
      .then(data => {
        const [bsYear, bsMonth, bsDay] = data.data.split('-').map(Number);
        setBsYear(bsYear);
        setBsMonth(bsMonth);
        setToday({ day: bsDay, month: bsMonth, year: bsYear });
      })
      .catch(error => console.error('Error fetching today\'s BS date:', error));
  };

  const handleMonthChange = (e) => {
    setBsMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setBsYear(parseInt(e.target.value));
  };

  const checkForEvent = (day) => {
    const formattedDay = String(day).padStart(2, '0');
    const eventDate = `${bsYear}-${String(bsMonth).padStart(2, '0')}-${formattedDay}`;

    const hasEvent = events.some((event) => event.date === eventDate);

    if (hasEvent) {
        console.log('Checking event for date:', eventDate);
    }

    return hasEvent;
    
  };

  return (
    <div className="p-4 bg-white rounded shadow-md flex space-x-8">
      {/* Calendar Section */}
      <div className="flex-1 flex-grow-2">
        
        <div className="mb-4 flex space-x-2">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Select Year:
            </label>
            <input
              type="number"
              value={bsYear}
              onChange={handleYearChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Select Month:
            </label>
            <select
              value={bsMonth}
              onChange={handleMonthChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              {bsMonths.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-0.5 border-t border-l">
          <div className="py-2 border-r border-b text-center font-semibold">Sun</div>
          <div className="py-2 border-r border-b text-center font-semibold">Mon</div>
          <div className="py-2 border-r border-b text-center font-semibold">Tue</div>
          <div className="py-2 border-r border-b text-center font-semibold">Wed</div>
          <div className="py-2 border-r border-b text-center font-semibold">Thu</div>
          <div className="py-2 border-r border-b text-center font-semibold">Fri</div>
          <div className="py-2 border-r border-b text-center font-semibold">Sat</div>

          {/* Fill in the blank days at the start of the month */}
          {Array.from({ length: startDayOfWeek }).map((_, index) => (
            <div key={index} className="p-2 border-r border-b"></div>
          ))}

        {daysInMonth.map((day, index) => (
        <div
        key={index}
        className={`p-2 border-r border-b relative text-center ${
          today.day === day && today.month === bsMonth && today.year === bsYear
            ? 'border-red-500 font-bold text-red-500 -bg--color'
        : checkForEvent(day) // Bold the text if there’s an event
        ? 'font-bold'
        : ''
    }`}
  >
    {day || ''}
  </div>
))}
        </div>
      </div>

      {/* Events Section with Scrollable Area */}
      <div className="flex-1 h-full">
        <h2 className="text-xl font-bold mb-4">Events</h2>
        <div className="max-h-[31rem] overflow-y-auto">
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li key={index} className="p-2 border border-gray-300 rounded">
                <strong>{event.date}</strong>: {event.event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NepaliCalendar;
