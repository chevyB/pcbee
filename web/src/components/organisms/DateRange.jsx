import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import { FaArrowRight } from 'react-icons/fa';
import 'react-nice-dates/build/style.css';

function DateRangePickerExample() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div >
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        minimumLength={1}
        format="dd MMM yyyy"
        locale={enGB}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
          <div className="flex items-center">
            <input
              className={`p-2 border border-gray-300 rounded-md ${focus === START_DATE ? 'focus:outline-none focus:ring focus:border-blue-300' : ''}`}
              {...startDateInputProps}
              placeholder=""
            />
            <FaArrowRight className="mx-2 text-gray-500" />
            <input
              className={`p-2 border border-gray-300 rounded-md ${focus === END_DATE ? 'focus:outline-none focus:ring focus:border-blue-300' : ''}`}
              {...endDateInputProps}
              placeholder=""
            />
          </div>
        )}
      </DateRangePicker>
    </div>
  );
}

export default DateRangePickerExample;
