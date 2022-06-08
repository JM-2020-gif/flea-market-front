import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import SearchForm from '@/components/SearchForm';
import { menuItems } from '@/config/navigation'
import MenuItem from '@/components/MenuItem'
import IconMenuOpen from '../public/IconMenuOpen.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">SECOND-HAND STORE</Link>
                <button className={styles.mobileMenuButton}>
                    <IconMenuOpen />
                </button>
            </div>
            <div className={styles.menuContainer}>
                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item}/>
                        ))}
                    </ul>
                </nav>
                <SearchForm />
            </div>
            <div className={styles.profile}>
                <Link href="/">
                    <a className={styles.loginButton}>Log in</a>
                </Link>
            </div>
        </header>
    );
}
