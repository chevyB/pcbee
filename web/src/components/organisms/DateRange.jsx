import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaArrowDown } from 'react-icons/fa';

const DateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const toggleCalendar = (ref) => {
    ref.current.setOpen(true);
  };

  return (
    <div className="flex flex-row items-center justify-center mt-8">
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Set Date
        </p>
      </div>
      <div className="mr-4 relative">
        <label className="block text-sm font-medium text-gray-700">From:</label>
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            className="p-1 pl-1 border border-gray-300 rounded-md pr-8 relative"
            ref={startDateRef}
          />
          <FaArrowDown
            onClick={() => toggleCalendar(startDateRef)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">To:</label>
        <div className="relative">
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            className="p-1 pl-1 border border-gray-300 rounded-md pr-8 relative"
            ref={endDateRef}
          />
          <FaArrowDown
            onClick={() => toggleCalendar(endDateRef)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRange;
