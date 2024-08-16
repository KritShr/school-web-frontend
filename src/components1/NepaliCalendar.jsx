import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import {convertToGregorianDate} from '../utils/ConvertDate'
import {convertToNepaliDate} from '../utils/ConvertDate'
import EventForm from './EventForm';
import { toast } from 'react-toastify';


const NepaliCalendar = () => {
  const [bsYear, setBsYear] = useState(0);
  const [bsMonth, setBsMonth] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDayOfWeek, setStartDayOfWeek] = useState(0);
  const [today, setToday] = useState({ day: 0, month: 0, year: 0 });

  const [events, setEvents] = useState([])
  const limit = 32; //가져올 카드 수
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
    getTodayDate(); 
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
          const nepaliDate = await convertToNepaliDate(event.date || ''); // Handle potential undefined date
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

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreate = () => {
    setIsFormOpen(true);
  };

  const handleSaveEvent = async (newEvent) => {
    // Convert Nepali date to Gregorian before saving
    const gregorianDate = await convertToGregorianDate(newEvent.date || ''); // Handle potential undefined date
    try {
      const response = await axiosInstance.post('/events', {
        name: newEvent.name,
        date: gregorianDate,
      });
      setEvents([...events, response.data]);
      window.location.reload();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="ml-20 mr-20 bg-white rounded-lg overflow-hidden flex space-x-4">
  
      {/* Calendar Box */}
      <div className="w-2/3 m-4 bg-gray-50 shadow-xl rounded-lg flex flex-col">
        <div className="w-full rounded-lg -bg--medium flex items-center justify-between px-6 py-3">
          <button onClick={handlePrevMonth} className="-text--default-white">Previous</button>
          <h2 className="-text--default-white font-semibold">{bsMonths[bsMonth - 1]} {bsYear}</h2>
          <button onClick={handleNextMonth} className="-text--default-white">Next</button>

        </div>
        <div className="grid grid-cols-7 gap-2 p-4 flex-grow">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div
              key={index}
              className={`text-center font-semibold ${index === 6 ? '-text--custom-red' : ''}`}
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
                style={{}}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
  
      {/* Events Box */}
      <div className="w-1/3 m-4 p-3 shadow-xl rounded-lg bg-gray-50 flex flex-col">
        <h2 className="text-3xl font-bold m-5">Events</h2>
        <div className="overflow-y-auto flex-grow max-h-[30rem]">
          <ul className="space-y-2">
            {events
              .filter(event => {
                const [year, month] = event.date.split('-');
                return parseInt(year) === bsYear && parseInt(month) === bsMonth;
              })
              .map((filteredEvent, index) => (
                <li key={index} className="font-sans p-2 border border-gray-300 rounded flex justify-between">
                  <div className='flex px-3'>
                    <strong>{filteredEvent.date}</strong>: {filteredEvent.name}
                  </div>
                        
                  {isAuth && (
                    <div className="flex justify-right"> 
                      <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={()=> handleDelete(filteredEvent._id)}>Delete</button>
                    </div>
                  )}
                </li>
              ))}
          </ul>
          
        </div>
      </div>
  
      {isFormOpen && (
        <EventForm onClose={() => setIsFormOpen(false)} onSave={handleSaveEvent} />
      )}
    </div>
  );
  
};

export default NepaliCalendar;
