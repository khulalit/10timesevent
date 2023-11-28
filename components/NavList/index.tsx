import './styles.css';
import Link from "next/link";
import { LuTicket } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineExplore } from "react-icons/md";

export default function NavList() {
    return (
        <nav className="nav-list">
            <ul className="flex gap-6">
                <li className="flex items-center gap-2">
                    <LuTicket />
                    <Link href='/event-list'>
                        Events
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <SlCalender />
                    <Link href='/'>
                        Calender
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineExplore />
                    <Link href='/'>
                        Explore
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
