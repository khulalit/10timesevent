import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoaderGif from '@/assets/loader.gif';
import Image from "next/image";

export default function () {
  return (
    <div className="bg-white fixed top-0 left-0 h-screen z-30 w-full">
        <div className="left-[50%] fixed top-[50%] translate-x-[-50%] tranlate-y-[-50%]">
            <Image src={LoaderGif} alt='loader'/>
        </div>
    </div>
  )
}
