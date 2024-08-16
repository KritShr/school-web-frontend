import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import {convertToGregorianDate} from '../utils/ConvertDate'
import {convertToNepaliDate} from '../utils/ConvertDate'


const NepaliCalendar = () => {
  const [bsYear, setBsYear] = useState(0);
  const [bsMonth, setBsMonth] = useState(0); // Initially set to 0
  const [adYear, setAdYear] = useState('');
  const [adMonth, setAdMonth] = useState('')

  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDayOfWeek, setStartDayOfWeek] = useState(0); // Sunday = 0
  const [today, setToday] = useState({ day: 0, month: 0, year: 0 }); // Store today's date

  const [events, setEvents] = useState([])
  const limit = 5; //가져올 카드 수
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const isAuth = localStorage.getItem('isAuth');

  // Array for months in BS (Bikram Sambat)
  const bsMonths = [
    'Baisakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashwin',
    'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
  ];

  useEffect(() => {
    getTodayDate(); // Set the calendar to today's Nepali date on mount
    readyForFetchEvents();
    fetchEvents(skip, limit, loadMore, adYear, adMonth)
  }, []);

  const readyForFetchEvents = async()=>{
    const adDate = await convertToGregorianDate(today.year+'-'+today.month+'-'+today.day)
    console.log(adDate)
    setAdYear(adDate.split('-')[0]);
    setAdMonth(adDate.split('-')[1])
  }

  const fetchEvents = async (skip, limit, loadMore, year, month) => {
    console.log(year, month)

    const params = { skip, limit, year, month };
    try {
      const response = await axiosInstance.get('/events', { params });
      const fetchedEvents = response.data.events;
  
      // Convert all event dates to Nepali dates before updating the state
      const eventsWithNepaliDates = await Promise.all(
        fetchedEvents.map(async (event) => {
          const nepaliDate = await convertToNepaliDate(event.date);
          return { ...event, date: nepaliDate };
        })
      );
  
      if (loadMore) {
        setEvents([...events, ...eventsWithNepaliDates]);
      } else {
        setEvents(eventsWithNepaliDates);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleLoadMore = () =>{
    fetchEvents(skip+limit, limit, true);  
    setLoadMore(true);
    setSkip(skip+limit);
  }

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
    return hasEvent;
    
  };

  const handleDelete = async(eventId)=>{
    try {
      await axiosInstance.delete(`/events/${eventId}`);
      setEvents(events.filter(event => event._id !== eventId));
      toast.info('Delete Success!');
    } catch (error) {
      console.error(error)
      toast.error('Delete Failed...');
    }
  }

  return (
    <div className="p-4 bg-white rounded shadow-md flex space-x-8">
      {/* Calendar Section */}
      <div className="flex-1 flex-grow-2">
        
        <div className="mb-4 flex space-x-2">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Year
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
              Month
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
          {isAuth && (
            <div className="mt-2 flex justify-left gap-2 mb-1"> 
              <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={()=> handleCreate}>Create</button>
            </div>
          )}
          <ul className="space-y-2">
            {events
              .filter(event => {
                const [year, month] = event.date.split('-');
                return parseInt(year) === bsYear && parseInt(month) === bsMonth;
              })
              .map((filteredEvent, index) => (
                <li key={index} className="p-2 border border-gray-300 rounded flex justify-between">
                  <div className='flex px-3'>
                    <strong>{filteredEvent.date}</strong>: {filteredEvent.name}
                  </div>
                  
                  {isAuth && (
                    <div className="flex justify-right"> 
                      <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={()=> handleDelete(filteredEvent._id)}>Create</button>
                    </div>
                  )}
                </li>
              ))}
          </ul>
          
            <button
              className="-bg--color-silver text-white px-6 py-4 rounded-md hover:-bg--medium duration-200 text-2xl font-semibold  bottom-0 right-0 mb-4 mr-4"
              onClick={moveTo}
            >
              More
            </button> 
              
        </div>
      </div>
    </div>
  );
};

export default NepaliCalendar;
