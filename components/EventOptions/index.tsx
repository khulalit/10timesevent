'use client';
import { EventOptionsTypes } from '@/constants/EventOptions';
import { EventOptionsTypes as EventThemeOptionsTypes } from '@/constants/EventThemeOptions';
import { LuPencil } from "react-icons/lu";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import './styles.css';
import RadioBtnWrapper from '../RadioBtnWrapper';
import Modal from '../Modal';
import { useState } from 'react';
import Image from 'next/image';

export default function EventOptions({ options, formValues }: { options: EventOptionsTypes[] , formValues: any }) {

    const [openModal, setOpenModal] = useState(false);
    const [varient, setVarient] = useState<'input' | 'select' | 'color'>('input');
    const [valueToBeAlter, setValueToBeAlter] = useState<{key: string, value: string | boolean | number}>({
        key: '',
        value: ''
    });

    if(valueToBeAlter.key && valueToBeAlter.value){
        formValues[valueToBeAlter.key] = valueToBeAlter.value
    }


    function optionsRender(type: string, options : any){

        switch(type){
            case 'editable' : 
                return (
                    <button onClick={()=>{
                        setVarient('input');setOpenModal(true); 
                        setValueToBeAlter(options)
                    }}
                    >
                        <LuPencil/>
                    </button>
                )

            case 'radio' :
                return (
                    <RadioBtnWrapper onChange={(value:boolean)=>{
                        setValueToBeAlter({...options, value: value})
                    }} />
                )

            case 'select' : 
                return (
                    <button onClick={()=>{
                        setVarient('select');
                        setOpenModal(true);
                        setValueToBeAlter(options)
                    }} 
                    > 
                        <RiArrowDownDoubleFill />
                    </button>
                )
            case 'color' :
                return (
                    <button onClick={()=>{
                        setVarient('color');
                        setOpenModal(true);
                        setValueToBeAlter(options)
                    }} 
                    > 
                        <RiArrowDownDoubleFill/>
                    </button>
                )

            default : 
                return (
                    <button onClick={()=>{
                        setVarient('input');setOpenModal(true); 
                        setValueToBeAlter(options)
                    }}
                    >
                        <RiArrowDownDoubleFill/>
                    </button>
                )
        }
    }

    return (
        <ul className='event-options-list'>
            { openModal && 
                <Modal label='' setValue={setValueToBeAlter} value={valueToBeAlter} varient={varient} options={[]} onClose={setOpenModal}/>
            }
            {options.map(({ label, index, type, Icon }) => <li key={index} className='list relative'>
                <div className='icon'>
                    {/* <Icon/> */}
                    {Icon && <Image src={Icon} alt="icon" className='mr-2' width={20} height={20}/>}
                    {
                        type === 'color' && <div className='w-6 h-6 rounded-full mr-2' style={{background: formValues[label] || '#4f4f4f'}}>

                        </div>
                    }
                    {
                        type === 'typeface' && <div className=' mr-2 font-bold' style={{color: '#4f4f4f'}}>
                            Ag
                        </div>
                    }
                </div>
                <p className={`label`}>
                    {label}
                </p>
                <div className='value flex items-center gap-2'>
                    <span className='value-label'>                        
                        {label !== 'Required Approval' &&  formValues[label]}
                    </span>
                    {
                        optionsRender(type, {key: label, value: ''})
                    }

                </div>
            </li>)}
        </ul>
    )
}
