import { useState } from 'react';
import './styles.css';

export default function RadioBtnWrapper({onChange} :{onChange : Function}) {
    const [value, setValue] = useState<Boolean>(false);

    return (
        <>
            <input type="checkbox" id="switch" onChange={(e)=>{
                onChange(e.target.checked)
            }} />
            <label htmlFor="switch">Toggle</label>
        </>
    )
}
