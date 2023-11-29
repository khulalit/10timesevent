import './styles.css';
import { useState } from 'react';
import dateformat from 'dateformat';

export default function DatePicker({onValue}: {onValue: Function}) {
    const [value, setValue] = useState('');
    return (
        <span className="datepicker-toggle">
            <span className="datepicker-toggle-button">{value || 'Enter date'}</span>
            <input type="date" className="datepicker-input" min={dateformat(new Date(), 'yyyy-mm-dd')} onChange={(e)=>{
                const date = dateformat(e.target.value, 'mmm d');
                onValue(date);
                setValue(dateformat(e.target.value, 'mmm d'))
            }}/>
        </span>
    )
}
