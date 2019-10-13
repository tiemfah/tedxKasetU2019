import Link from 'next/link';
import LogoImage from '../public/img/logo.svg';
import '../public/css/nav.css';




const NavBar = () => (
    <header>
        <Link href="/">
            <a href="/">
                <div className="logo">
                    <img src={LogoImage} alt='logo' />
                </div>
            </a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/speaker"><a title="speaker">Speaker</a></Link></li>
                <li><Link href="/partner"><a title="partner">Partner</a></Link></li>
                <li><Link href="/watch"><a title="watch">Watch</a></Link></li>
                <li><Link href="/participate"><a title="participate">Team</a></Link></li>
                <li><Link href="/"><a title="contact">contact</a></Link></li>
                <li><Link href="/"><a title="ticket">Ticket</a></Link></li>
            </ul>
        </nav>
    </header>
)

export default NavBar;