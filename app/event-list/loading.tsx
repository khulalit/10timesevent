import LoadingGif from '@/assets/loader.gif';
import Image from 'next/image';

export default function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Image src={LoadingGif} alt="loader"/>
    </div>
  )
}
