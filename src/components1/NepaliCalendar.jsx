import React, { useState, useEffect } from 'react';

const NepaliCalendar = () => {
  const [bsYear, setBsYear] = useState(0);
  const [bsMonth, setBsMonth] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDayOfWeek, setStartDayOfWeek] = useState(0);
  const [today, setToday] = useState({ day: 0, month: 0, year: 0 });

  const events = [
    { date: '2081-04-05', event: 'New Year Celebration' },
    { date: '2081-04-31', event: 'Festival' },
    { date: '2081-04-25', event: 'Independence Day' },
    { date: '2081-04-25', event: 'Independence Day' },
    

  ];

  const bsMonths = [
    'Baisakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashwin',
    'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
  ];

  useEffect(() => {
    getTodayDate(); 
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

    const nepaliMonthDays = [31, 32, 31, 32, 31, 30, 29, 30, 29, 29, 30, 30];

    const daysArray = [];
    for (let i = 1; i <= nepaliMonthDays[bsMonth - 1]; i++) {
      daysArray.push(i);
    }
    setDaysInMonth(daysArray);
  };

  const calculateStartDayOfWeek = (adDate) => {
    const date = new Date(adDate);
    const startDay = date.getDay();
    setStartDayOfWeek(startDay);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
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

  const handlePrevMonth = () => {
    if (bsMonth > 1) {
      setBsMonth(bsMonth - 1);
    } else {
      setBsYear(bsYear - 1);
      setBsMonth(12);
    }
  };

  const handleNextMonth = () => {
    if (bsMonth < 12) {
      setBsMonth(bsMonth + 1);
    } else {
      setBsYear(bsYear + 1);
      setBsMonth(1);
    }
  };

  const checkForEvent = (day) => {
    const formattedDay = String(day).padStart(2, '0');
    const eventDate = `${bsYear}-${String(bsMonth).padStart(2, '0')}-${formattedDay}`;
    return events.some((event) => event.date === eventDate);
  };

  return (
    <div className="ml-20 mr-20 bg-white  rounded-lg overflow-hidden flex space-x-4">
  {/* Calendar Box */}
  <div className="w-2/3 m-4 h-[32rem] bg-gray-50 max-h-[34rem] shadow-xl rounded-lg">
    <div className="w-full rounded-lg -bg--medium flex items-center justify-between px-6 py-3 bg-gray-700">
      <button onClick={handlePrevMonth} className="-text--default-white ">Previous</button>
      <h2 className="-text--default-white font-semibold">{bsMonths[bsMonth - 1]} {bsYear}</h2>
      <button onClick={handleNextMonth} className="-text--default-white">Next</button>
    </div>
    <div className="grid grid-cols-7 gap-2 p-4">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
        <div
          key={index}
          className={`text-center font-semibold ${
            index === 6 ? '-text--custom-red' : '' // Make Saturday red
          }`}
        >
          {day}
        </div>
      ))}
      {Array.from({ length: startDayOfWeek }).map((_, index) => (
        <div key={index}></div>
      ))}
      {daysInMonth.map((day, index) => {
        const isSaturday = (index + startDayOfWeek) % 7 === 6;
        const isEvent = checkForEvent(day);
        const isToday = today.day === day && today.month === bsMonth && today.year === bsYear;

        return (
          <div
            key={index}
            className={`text-center py-2 border cursor-pointer hover:-bg--medium hover:-text--default-white ${
              isToday
                ? '-bg--medium -text--default-white'
                : isEvent && isSaturday
                ? 'font-bold -border--custom-red -text--custom-red'
                : isSaturday
                ? '-border--custom-red -text--custom-red'
                : isEvent
                ? 'font-bold'
                : ''
            }`}
            style={index >= 28 && daysInMonth.length < 31 ? { gridColumnStart: 'span 7' } : {}}
          >
            {day}
          </div>
        );
      })}
    </div>
  </div>

  {/* Events Box */}
  <div className="w-1/3 p-3 shadow-xl rounded-lg bg-gray-50 max-h-[33rem] flex flex-col">
    <h2 className="text-3xl font-bold m-5">Events</h2>
    <div className=  "overflow-y-auto flex-grow max-h-[30rem]">
    <ul className="space-y-2">
      {events.map((event, index) => (
        <li key={index} className="font-sans p-2 border border-gray-300 rounded">
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
