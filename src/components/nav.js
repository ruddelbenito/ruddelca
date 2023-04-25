import styles from '@/styles/nav.module.scss'
import Link from 'next/link'
import Icon from '../../public/assets/svgs/menu.svg'

export default function Nav() {
    function showNav() {
        let navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }

    return (
        <div className={styles.nav}>
            <div className={styles.homelink}>
                <Link href='/'>ruddel</Link>
            </div>
            <Icon className={styles.icon} onClick={(e) => showNav()} />
            <nav className={styles.pageLinkGroup} id='nav-links'>
                <Link className={styles.pageLink} href='/about'>About</Link>
                <Link className={styles.pageLink} href='/projects'>Projects</Link>
                <Link className={styles.pageLink} href='/contact'>Contact</Link>
            </nav>
        </div>
    )
}