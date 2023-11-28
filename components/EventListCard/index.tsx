import './styles.css';
import { BsCameraVideo } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import PlaceImage from '@/assets/image.png';
import Image from 'next/image';
import Link from 'next/link';

export default function EventCard({event}:{event: any}) {
  return (
    <div className='card'>
        <div className='card-col'>
            <span className='time'>
                {event.startTime}
            </span>
            <p className='text-2xl text-black'>
                <Link href={'/?edit=0'}>
                    {event.EventName}
                </Link>
            </p>
            <span className=''>
                <span className='w-4 h-4 bg-blue-600 rounded-full'>

                </span>
                By User
            </span>
            <span className='card-location flex items-center gap-2'>
                <CiLocationOn />
                Virtual
            </span>
            <span className='card-location'>
                <span className="text-[12px] cursor-pointer text-white rounded-md py-1 px-2 bg-[#3D5EF1] font-semibold">
                    Invited
                </span>
            </span>
        </div>
        <div className='card-col image'>
            {event.coverImage ? <img src={event.coverImage} alt='image' className='' />: <Image src={PlaceImage} alt="image"/>}
            
        </div>
    </div>
  )
}
