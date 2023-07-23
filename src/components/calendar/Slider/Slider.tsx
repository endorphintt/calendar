import './Slider.css'

type Props = {
    setMonth: (par: number) => void;
    setYear: (par: number) => void;
    month: number;
    year: number;
}

const Slider: React.FC<Props> = ({month, year, setMonth, setYear}) => {

    const monthsList: string[] = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]

    const yearsList: number[] = [
        2021, 2022,
        2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034,
        2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046,
        2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058,
        2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070,
        2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082,
        2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094,
        2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106,
        2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118,
        2119, 2120, 2121, 2122, 2123,
    ]

    return (
        <div className='calendar__slider'>
            <div className="slider__months">
                {monthsList.map(item => <div className='slider__month'>{item}</div> )}
            </div>
            <div className="slider__years">
                {yearsList.map(item => <div className='slider__month'>{item}</div> )}
            </div>
            <div className="pass"></div>
        </div>
    )
}

export default Slider;