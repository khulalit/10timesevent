import './styles.css';

interface ButtonTypeProps {
    text: string,
    tailWindClasses?: string,
    onClick: Function,
}

export default function Button({ text, tailWindClasses, onClick }: ButtonTypeProps) {
  return (
    <button
        className={`btn ${ tailWindClasses }`}
        onClick={()=>onClick()}
    >
        {text}
    </button>
  )
}
