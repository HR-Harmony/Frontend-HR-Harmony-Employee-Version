import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TasksCalendar.css';

const localizer = momentLocalizer(moment);

const TasksCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const events = [
    {
      title: 'Meeting 1',
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 12, 0),
    },
    {
      title: 'Meeting 2',
      start: new Date(2024, 0, 20, 14, 0),
      end: new Date(2024, 0, 20, 16, 0),
    },
  ];

  return (
    <div className='calendar-container'>
      <div className='date-picker-container'>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className='calendar'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          date={selectedDate}
        />
      </div>
    </div>
  );
};

export default TasksCalendar;