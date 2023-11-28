import './styles.css';
import Button from '../button';
import { useState } from 'react';

interface ModalPropsType {
    varient: 'input' | 'select' | 'color' | 'typeface',
    setValue: Function,
    options?: any,
    label: string,
    onClose: Function,
    value : any,
}

export default function Modal({ onClose, varient, setValue, value }: ModalPropsType) {
    const [filedValue, setFieldValue] = useState(''); 
    const [message, setMessage] = useState('');

    return (
        <div className="fixed top-0 left-0 w-screen h-screen modal z-10">
            <div className=' content w-[300px]  right-0 top-0 bottom-0 bg-red-300'>
                <span className='text-red-800 text-sm'>
                    {message}
                </span>
                <div className='form'>
                    <label className='font-[600] block'>Ticket</label>
                    {   varient === 'input' ? 

                            <input type="text" placeholder="Free by default.."  onChange={(e)=>{
                                setFieldValue(e.target.value)
                            }} 
                                required
                            />
                        
                        : varient === 'color' ?
                            <input type="color" placeholder="select color"  onChange={(e)=>{
                                setFieldValue(e.target.value)
                            }} 
                                required
                            />
                        : <select onChange={(e)=>{
                            setFieldValue(e.target.value)
                        }}>
                            <option value={'Public'}>
                                Select Option
                            </option>
                            <option value={'Private'}>
                               Private
                            </option>
                            <option value={'Public'}>
                                Public
                            </option>
                            
                        </select>
                    }
                    <Button text='save' tailWindClasses='w-full' onClick={()=>{
                        setValue({
                            ...value, value : filedValue
                        })
                        if(filedValue.length > 0)
                            onClose(false)
                        else setMessage('Field cannot be empty')
                    }}/>
                </div>
            </div>
        </div>
    )
}
