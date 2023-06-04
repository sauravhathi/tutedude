import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const links = [
        'My Assignment',
        'Chat with Mentor',
        'Profile Name',
    ]
    const logo = '/logo.png'
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" width="160" height="63" />
            </div>
            <div className="header__links">
                {links.map((link, index) => (
                    <Link href="/" key={index} className="header__link">
                        {link}
                    </Link>
                ))}
            </div>
        </header>
    )
}