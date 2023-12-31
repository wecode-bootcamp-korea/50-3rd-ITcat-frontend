import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.scss';

const Datepicker = ({
  startDate,
  setStartDate,
  minDate,
  maxDate,
  onChange,
}) => {
  const handleChange = date => {
    setStartDate(date);
    onChange();
  };
  return (
    <div className="datePicker">
      <DatePicker
        selected={startDate}
        onChange={date => handleChange(date)}
        dateFormat="yyyy년 MM월 dd일"
        locale={ko}
        inline
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
      />
    </div>
  );
};

export default Datepicker;
