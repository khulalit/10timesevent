import './styles.css';

interface DateBannerPropsType {
    month: string,
    date : number | string,
}

export default function DateBanner({ month, date } : DateBannerPropsType) {
  return (
    <div className='banner'>
        <div className='month'>
            {month || "Mon"}
        </div>
        <div className='date'>
            {date || 'XX'}
        </div>
    </div>
  )
}
