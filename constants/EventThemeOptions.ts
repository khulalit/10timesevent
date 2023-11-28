import { StaticImageData } from 'next/image';
import { LuTicket } from "react-icons/lu";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import React from 'react';

export interface EventOptionsTypes {
    index: number,
    label: string,
    Icon? : StaticImageData | null | typeof GoGlobe,
    // value : string,
    type : 'radio' | 'select' | 'editable' | 'color' | 'typeface',
}

export const EVENT_THEME_OPTIONS : EventOptionsTypes[] = [
    {
        index: 0,
        label: "Color", 
        // Icon : LuTicket,
        // value : 'free',
        type: 'color',
    },
    {
        index: 1,
        label: "Typeface", 
        // Icon : null,
        // value : 'free',
        type: 'typeface',
    },
]

export const EVENT_THEME_COLOR_OPTIONS = [
    {
        index: 0,
        label: "Minimal", 
        bg : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
    },
    {
        index: 1,
        label: "Holiday", 
        bg : 'background: radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)'
    },
    {
        index: 2,
        label: "Abstract", 
        bg : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(112,9,121,1) 35%, rgba(0,212,255,1) 100%)'
    },
    {
        index: 3,
        label: "Quantum", 
        bg : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,32,1) 35%, rgba(0,212,255,1) 100%)'
    },
]