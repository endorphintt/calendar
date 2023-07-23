import { useState } from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';

function App() {
  const defaultDate = new Date()
  const [date, setDate] = useState<Date>(defaultDate)
  const [calendar, setCalendar] = useState<boolean>(true)

  return (
    <div
      className="App"
    >
      <Calendar 
        calendar={calendar}
        setCalendar={setCalendar}
        setDate={setDate} 
        date={date}
      />
    </div>
  );
}

export default App;
