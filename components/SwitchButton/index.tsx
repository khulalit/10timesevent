import './styles.css';
import { useState } from 'react';

export default function SwitchButton({setFilterBy}: {setFilterBy: Function}) {

    const [side, setSide] = useState('left');

    return (
        <div>
            <div className="switch-button">
                <span className='active'
                    style={{
                        left: side === "left" ? 0 : '50%'
                    }}
                >
                </span>
                <button className={`switch-button-case left active-case ${side === 'left' ? 'active-case ':''}`}  onClick={(e)=>{
                    setSide('left')
                    setFilterBy('upcomming')
                }}>Upcomming</button>
                <button className={`switch-button-case right active-case ${side === 'right' ? 'active-case ':''}`} onClick={()=>{
                   setSide('right')
                   setFilterBy('past')
                }}>Past</button>
            </div>
        </div>
    )
}
