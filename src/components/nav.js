import styles from '@/styles/nav.module.scss'
import Link from 'next/link'
// import Icon from '@/assets/svgs/menu.svg'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.homelink}>
                <Link href='/'>ruddel</Link>
            </div>
            {/* <Icon /> */}
            <nav className={styles.pagelinks}>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </div>
    )
}