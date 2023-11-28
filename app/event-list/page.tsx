'use client';
import './styles.css';
import EventCard from '@/components/EventListCard'
import SwitchButton from '@/components/SwitchButton';
import {useEffect, useState} from 'react'
import dateFormat from 'dateformat';

export default function EventList() {

  const [events, setEvents] = useState<any>(null);
  const [filterBy, setFilterBy] = useState('upcomming');
 
  useEffect(()=>{
    const eventsString = window.localStorage.getItem('formValues');
    if(!eventsString) setEvents([])
    else {
      const ev = JSON.parse(eventsString);
      setEvents(ev)
    }
  },[])

  function filterEve(event: any){
    const date = new Date(`${event.startDate} 2023 ${event.startTime}`)
      const now = new Date();
      if(filterBy === 'upcomming'){
        return date > now;
      }
      else return date < now;
  }


  return (
    <main className='min-h-screen'>
      <div className='nav flex justify-between'>
          <h1 className='text-3xl font-bold px-2 text-[#1E2528]'>
            Events
          </h1>
          <div>
            <SwitchButton setFilterBy={setFilterBy}/>
          </div>
      </div>
        {
          events &&  events.filter(filterEve).map((event:any)=> <div key={event.id} className='event-list mt-8'>
          <div className='bg-red-20 event-timeline border-dashed-2 border-[#858585]'>
            <div className='pl-2 pr-4 event-time relative'>
                <div className='dot'>
                </div>
                <span className='date block text-black font-bold'>
                  {event.startDate}
                </span>
                <span className='day text-[#858585]'>
                  {dateFormat(new Date(`${event.startDate} 2023 ${event.startTime}`), 'ddd')}
                </span>
            </div>
          </div>
          <EventCard event={event}/>
        </div> )
        }
      
      {/* <div className='event-list mt-8'>
        <div className='bg-red-20 event-timeline border-dashed-2 border-[#858585]'>
          <div className='px-2 event-time relative'>
              <div className='dot'>

              </div>
              <span className='date block text-black font-bold'>
                Dec 13
              </span>
              <span className='day text-[#858585]'>
                Wednesday
              </span>
          </div>
        </div>
        <EventCard/>
      </div> */}
    </main>
  )
}
