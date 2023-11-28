import { StaticImageData } from 'next/image';
import { LuTicket } from "react-icons/lu";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import React from 'react';
import TicketIcon from '@/assets/eventOptions/ticket-solid.svg';
import VisibilityIcon from '@/assets/eventOptions/globe.svg';
import CapacityIcon from '@/assets/eventOptions/capacity.svg';
import ApprovalIcon from '@/assets/eventOptions/approval.svg';

export interface EventOptionsTypes {
    index: number,
    label: string,
    Icon? : StaticImageData,
    // value : string,
    type : 'radio' | 'select' | 'editable' | 'color' | 'typeface',
}

export const EVENT_OPTIONS : EventOptionsTypes[] = [
    {
        index: 0,
        label: "Tickets", 
        Icon : TicketIcon,
        // value : 'free',
        type: 'editable',
    },
    {
        index: 1,
        label: "Required Approval", 
        Icon : ApprovalIcon,
        // value : 'free',
        type: 'radio',
    },
    {
        index: 2,
        label: "Capacity", 
        Icon : CapacityIcon,
        // value : 'free',
        type: 'editable',
    },
    {
        index: 3,
        label: "Visibility", 
        Icon : VisibilityIcon,
        // value : 'free',
        type: 'select',
    },
    
]