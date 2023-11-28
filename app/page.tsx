'use client';
import CreateEventForm from '@/components/CreateEventForm';
import Loading from '@/components/Loading';
import NavList from '@/components/NavList';

export default function Home() {
  return (
    <main className=''>
      <NavList/>
      <CreateEventForm/>
    </main>
  )
}
