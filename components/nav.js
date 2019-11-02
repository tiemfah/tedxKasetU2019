import React, { Component } from "react";
import Link from 'next/link';
import blackLogo from '../public/img/logo.svg';
import whiteLogo from '../public/img/logo2.svg';
import '../public/css/nav.css';

const lightTheme = {
    "--color-solid": "black",
    "--color-surface": "white",
    "--color-primary": "teal"
};

const darkTheme = {
    "--ted-red": "#e62b1e",
    "--pri": "#000",
    "--sec": "#fff"
};


// const NavBar = () => (
//     <header>
//         <Link href="/">
//             <a href="/">
//                 <div className="logo">
//                     <img src={whiteLogo} alt='logo' />
//                 </div>
//             </a>
//         </Link>
//         <nav>
//             <ul>
//                 <li><Link href="/speaker"><a title="speaker">Speaker</a></Link></li>
//                 <li><Link href="/partner"><a title="partner">Partner</a></Link></li>
//                 <li><Link href="/watch"><a title="watch">Watch</a></Link></li>
//                 <li><Link href="/participate"><a title="participate">Team</a></Link></li>
//                 <li><Link href="/contact"><a title="contact">contact</a></Link></li>
//             </ul>
//         </nav>
//     </header>
// )

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isWhiteNav : this.props.isWhiteNav
        }

    }
    render() {
        return (
            <header>
                <Link href="/">
                    <a href="/">
                        <div className="logo">
                            <img src={this.state.isWhiteNav ? whiteLogo : blackLogo} alt='logo' />
                        </div>
                    </a>
                </Link>
                <nav>
                    <ul>
                        <li><Link href="/speaker"><a title="speaker">Speaker</a></Link></li>
                        <li className="divider">|</li>
                        <li><Link href="/partner"><a title="partner">Partner</a></Link></li>
                        <li className="divider">|</li>
                        <li><Link href="/watch"><a title="watch">Watch</a></Link></li>
                        <li className="divider">|</li>
                        <li><Link href="/participate"><a title="participate">Team</a></Link></li>
                        <li className="divider">|</li>
                        <li><Link href="/contact"><a title="contact">contact</a></Link></li>
                        <li className="divider">|</li>
                        <li><a href="https://www.eventpop.me/e/6898" target="_blank">TICKET</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;