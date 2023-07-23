import { spawn } from 'child_process';
import './Numbers.css'

type Props = {
    setNumber: (par: number) => void;
    nums: number[];
    num: number;
}

const Numbers: React.FC<Props> = ({setNumber, nums, num}) => {
    const week: string[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

    return (
        <div className='numbers'>
            <div className="numbers__week">
                {week.map(day => <span className='week__name'>{day}</span>)}    
            </div>
            <div className="numbers__items">
                {nums.map((n) => {
                    return(
                        <button className={n === num? 'numbers__item_active' : 'numbers__item'} onClick={() => {if(n != 0){setNumber(n)}}}>{n != 0 ? n : ''}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Numbers;