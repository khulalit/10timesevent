'use client'
import './styles.css';
import DatePicker from '../DatePicker';
import { LuGlobe } from "react-icons/lu";
import { MdOutlineLayers } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import DateBanner from '../DateBanner';
import { useState } from 'react';
import Modal from '../Modal';

export default function EventDetails({formValues, setFormValues}: {formValues: any, setFormValues: Function}) {

    const [date, setDate] = useState({});
    const [session, setSession] = useState();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='event-det my-2'>
            <div className='event-details-wrapper'>
                <DateBanner month={formValues?.startDate?.substring(0,4)} date={formValues?.startDate?.substring(4) || ''} />
                <div className='event-details flex-1'>
                    <div className='start-time'>
                        <label className='label item'>
                            Start
                        </label>
                        <label className='date-label item'>
                            <DatePicker onValue={(value: string)=>{
                                setFormValues({
                                    ...formValues,
                                    startDate: value
                                })
                            }}/>
                        </label>
                        <div>
                            <input type='text'
                                onChange={(e)=>{
                                    setFormValues({
                                        ...formValues,
                                        startTime: e.target.value
                                    })
                                }}
                                className='outline-none date-label item w-fit' />
                        </div>
                    </div>
                    <div className='start-time'>
                        <label className='label item'>
                            End
                        </label>
                        <label className='date-label item'>
                            <DatePicker onValue={(value: string)=>{
                                    setFormValues({
                                        ...formValues,
                                        endDate: value
                                    })
                                }}/>
                        </label>
                        <div>
                            <input type='text'
                                onChange={(e)=>{
                                    setFormValues({
                                        ...formValues,
                                        endTime: e.target.value
                                    })
                                }}
                                className='outline-none date-label item w-fit' />
                        </div>
                    </div>
                    <div className='location-details'>
                        <label htmlFor='timezone'>
                            <LuGlobe /> GMT+05:30 Calcutta
                        </label>
                        {/* <input id='timezone' type='text' /> */}

                    </div>
                    <div className='location-details'>
                        <label htmlFor='location' onClick={()=>setOpenModal(true)}>
                            <MdOutlineLayers /> Create Multi-Session Event
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 items-center mt-4 flex-wrap'>
                <div className='location-mark min-w-[50px] grid place-content-center'>
                    <GrLocation/>
                </div>
                <div className='add-location flex-1'>
                    <input className='add-location-heading w-full bg-transparent outline-none py-2' placeholder='Add Event Location' onChange={(e)=>{
                        setFormValues({
                            ...formValues,
                            location: e.target.value 
                        })
                    }}/>
                        {/* Add Event Location
                    </div> */}
                    <div className='add-location-input'>
                        Offline location or virtual link
                    </div>
                </div>
            </div>
        </div>
    )
}
