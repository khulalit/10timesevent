'use client';
import './styles.css';
import EventDetails from '../EventDetails';
import Button from '../button';
import EventOptions from '../EventOptions';
import { EVENT_OPTIONS } from '@/constants/EventOptions';
import { useState, useId } from 'react';
import EventTheme from '../EventTheme';
import { EVENT_THEME_OPTIONS, EVENT_THEME_COLOR_OPTIONS } from '@/constants/EventThemeOptions';
import Themebanner from '../ThemeBanner';
import { validateForm } from './Validation';
import Loading from '../Loading';

export default function CreateEventForm() {

    const [formValues, setFormValues] = useState<any>({
        themeBg: EVENT_THEME_COLOR_OPTIONS[0].bg
    });
    const [selectIndex, setSelectIndex] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const id = useId();

    function handleSubmit(formValues:any){

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        const response = fetch('https://reqres.in/api/users',{
            method: "POST",
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(formValues),
        });
       
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='bg-white p-4 rounded-lg'>
            {loading && <Loading/> }
            <div className='my-6'>
                <input type='text' className='event-name-input text-[2rem] text-[#858585] font-bold outline-none' placeholder='Event Name' onChange={(e) => setFormValues({
                    ...formValues,
                    'EventName': e.target.value
                })} />
            </div>
            <div className='main-form-content'>
                <div className='min-w-[350px] flex-1'>
                    <EventDetails formValues={formValues} setFormValues={setFormValues} />

                    <p className='text-[1rem] font-bold text-[#858585] mt-4 mb-2'>
                        Event Details
                    </p>
                    <EventOptions options={EVENT_OPTIONS} formValues={formValues} />
                </div>
                <div className='min-w-[350px] flex-1'>
                    <EventTheme formValues={formValues} />
                    <div className='flex gap-4 my-4'>
                        {
                            EVENT_THEME_COLOR_OPTIONS.map((option) => <div onClick={() => {
                                setSelectIndex(option.index)
                                setFormValues({
                                    ...formValues,
                                    theme: option.label,
                                    themeBg: option.bg,
                                })
                            }} className='text-center text-sm' key={option.index}>
                                <Themebanner backgroundColor={option.bg} selected={option.index === selectIndex} />
                                <span className={`font-[600] ${option.index === selectIndex ? 'text-black' : 'text-gray-400'}`}>
                                    {option.label}
                                </span>
                            </div>)
                        }
                    </div>
                    <EventOptions options={EVENT_THEME_OPTIONS} formValues={formValues} />
                </div>
            </div>
            <Button text='Create Event' tailWindClasses='w-full md:w-1/2 mt-8' onClick={() => {
                setError('');
                const message = validateForm(formValues);
                if(message === true){
                    handleSubmit(formValues);
                    const formArrayString = window.localStorage.getItem('formValues');
                    let eventLists = [];
                    if (formArrayString) {
                        eventLists = JSON.parse(formArrayString);
                    }
                    eventLists.push({...formValues, id: id})
                    window.localStorage.setItem('formValues', JSON.stringify(eventLists))
                    return;
                }else {
                    setError(message)
                    return;
                }
                
            }} />
             { error && <div className='text-sm mt-2 font-bold text-red-500'>
                   Error : { error}
                </div> }
        </form>
    )
}
