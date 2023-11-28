import './styles.css';

export default function Themebanner({backgroundColor, selected} : {backgroundColor: string, selected: boolean}) {
    return (
        <div className='w-20 themebanner cursor-pointer mb-2 select-none' style={{background: backgroundColor, outline: selected ? '2px solid black' : ''}}>
            <div>
                <span>
                    Title
                </span>
                <div className=' line line-full'>

                </div>
                <div className='line line-half'>

                </div>
            </div>
        </div>
    )
}
