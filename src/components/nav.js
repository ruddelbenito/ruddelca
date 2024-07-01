import styles from '@/styles/nav.module.scss'
import Link from 'next/link'
import Icon from '../../public/assets/svgs/menu.svg'
import { useState } from 'react'

export default function Nav() {
    const [active, setActive] = useState(false);

    function toggleNav() {
        setActive(!active);
    }

    function hideNav() {
        setActive(false);
    }

    return (
        <div className={styles.navbar}>
            <div>
                <Link className={styles.homeLink} href='/'>R</Link>
            </div>
            <Icon className={styles.icon} onClick={(e) => toggleNav()} />
            <nav className={`${styles.pageLinkGroup} ${active ? styles.active : ''}`} id='nav-links'>
                <Link className={styles.pageLink} href='/about' onClick={(e) => hideNav()}>About</Link>
                <Link className={styles.pageLink} href='/projects' onClick={(e) => hideNav()}>Projects</Link>
                <Link className={styles.pageLink} href='/contact' onClick={(e) => hideNav()}>Contact</Link>
            </nav>
        </div>
    )
}