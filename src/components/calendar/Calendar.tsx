import "./Calendar.css"
import { useState } from "react"
import Numbers from "./Numbers/Numbers";
import Slider from "./Slider/Slider";

type Props = {
    date: Date;
    calendar: boolean;
    setDate: (date: Date) => void;
    setCalendar: (par: boolean) => void;
}

const Calendar: React.FC<Props> = ({date, setDate, setCalendar, calendar}) => {
    const [num, setNum] = useState<number>(date.getDate())
    const [month, setMonth] = useState<number>(date.getMonth())
    const [year, setYear] = useState<number>(date.getFullYear())
    const [menu, setMenu] = useState<boolean>(true)

    const months = [
        {i: 0, name: 'January'}, {i: 1, name: 'February'}, {i: 2, name: 'March'}, {i: 3, name: 'April'},
        {i: 4, name: 'May'}, {i: 5, name: 'June'}, {i: 6, name: 'July'}, {i: 7, name: 'August'},
        {i: 8, name: 'September'}, {i: 9, name: 'October'}, {i: 10, name: 'November'}, {i: 11, name: 'December'},
    ]

    function getDaysInMonth(date: Date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    }
    
    function getFirstDayOfWeek(date: Date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    }
      
    const newDate = new Date(year, month, num)
    const daysInMonth = getDaysInMonth(newDate)
    const firstDayOfWeek = getFirstDayOfWeek(newDate)

    let nums: number[] = []
    for(let i = 1; i < 43; i++){
        if(i < firstDayOfWeek){
            nums.push(0)
        } else if (i >= firstDayOfWeek && i < firstDayOfWeek + daysInMonth){
            nums.push(i - firstDayOfWeek + 1)
        } else {
            nums.push(0)
        }
    }

    return (
        <div className="calendar"
            style={{display: `${calendar? 'block' : 'none'}`}}
        >
            <div className="cancel__container">
                <button onClick={() => setCalendar(false)} className="cancel"><img src="./cancel.png" alt="x" /></button>
            </div>
            <div onClick={() => setMenu(!menu)} className="calendar__header">
                <div className="calendar__month">
                    {months.filter(mon => mon.i === month)[0].name}
                </div>
                <div className="calendar__year">{year}</div>
                <button
                    style={{transform: `${menu? 'rotate(0deg)' : 'rotate(90deg)'}`}}
                    className="menuChange" 
                >{'>'}</button>
            </div>
            <div className="calendar__menu">
                {menu?
                <Numbers num={num} nums={nums} setNumber={setNum}/>
                :
                <Slider month={month} year={year} setMonth={setMonth} setYear={setYear} />
                }
            </div>
            <div className="go__container">
                <button 
                    onClick={() => {
                        setDate(new Date(year, month, num))
                        setCalendar(false)
                    }}
                    className="go"
                >go to day</button>
            </div>
        </div>
    )
}

export default Calendar;