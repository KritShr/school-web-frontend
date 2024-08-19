import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventForm = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const formatDate = (value) => {
    // Remove non-numeric characters
    const cleanValue = value.replace(/[^0-9]/g, '');
    // Format as YYYY-MM-DD if valid
    if (cleanValue.length >= 8) {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4, 6)}-${cleanValue.slice(6, 8)}`;
    }
    return cleanValue;
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatDate(value);
    setDate(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate date format before saving
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      onSave({ name, date });
      onClose();
    } else {
      alert('Please enter a valid date in YYYY-MM-DD format.');
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 -bg--text-default-default bg-opacity-50">
      <div className="-bg--default-white p-6 rounded-md shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-6">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 text-lg rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Event Date (YYYY-MM-DD)</label>
            <input
              type="text"
              value={date}
              onChange={handleDateChange}
              className="w-full p-2 border border-gray-300 text-lg rounded-md"
              placeholder="YYYY-MM-DD"
              pattern="\d{4}-\d{2}-\d{2}"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="-bg--color-silver text-white px-6 py-4 rounded-md hover:-bg--medium duration-200 text-xl font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="-bg--color-silver text-white px-6 py-4 rounded-md hover:-bg--medium duration-200 text-xl font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EventForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EventForm;