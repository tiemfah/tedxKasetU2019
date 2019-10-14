import Link from 'next/link';
import LogoImage from '../public/img/ted.png';
import '../public/css/nav.css';




const NavBar = () => (
    <header className="pri-bg">
        <Link href="/">
            <a href="/">
                <div className="logo">
                    <img src={LogoImage} alt='logo' />
                </div>
            </a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/"><a title="index">Speaker</a></Link></li>
                <li><Link href="/partner"><a title="partner">Partner</a></Link></li>
                <li><Link href="/watch"><a title="watch">Watch</a></Link></li>
                <li><Link href="/participate"><a title="participate">Team</a></Link></li>
                <li><Link href="/"><a title="index">Event</a></Link></li>
                <li><Link href="/"><a title="index">Ticket</a></Link></li>
            </ul>
        </nav>
        <div className="menu-toggle">
            <i className="fa fa-bars"></i>
        </div>
    </header>
)

export default NavBar;