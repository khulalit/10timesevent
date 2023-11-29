import './styles.css';
import { FaRegImage } from "react-icons/fa6";
import { useState } from 'react';

export default function EventTheme({formValues}: {formValues : any}) {

    const [image, setImage] = useState<any>();

    if(image)
        formValues['coverImage'] = image; 

    function imageReader(file: any){
        const reader = new FileReader();

        reader.onload = ()=>{

            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className="event-theme">
            <div className="image w-full min-h-[300px] relative mt-2 rounded-md" style={{background: formValues['themeBg']}}>
                    <textarea className='absolute font-extrabold bottom-0 overflow-hidden w-1/2 h-1/2 text-center text-4xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] outline-none italic bg-transparent' style={{color: formValues['Color']}}/>
                    {image && <img src={image} alt='image' className='absolute w-full h-full top-0 left-0 object-fit' />}
                <div className='absolute bottom-0 right-0'>
                    <label htmlFor='image' className=' border-[2px] broder-white rounded-md block cursor-pointer'>
                        <FaRegImage/>
                    </label>
                    <input id='image' type='file' className='hidden' onChange={(e)=>{
                        if(e.target.files)
                            imageReader(e.target.files[0])
                    }}/>
                </div>
            </div>
        </div>
    )
}
