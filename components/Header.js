import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Header.module.css';
import SearchForm from '@/components/SearchForm';
import { menuItems } from '@/config/navigation'
import MenuItem from '@/components/MenuItem'
import IconMenuOpen from '../public/IconMenuOpen.svg'
import IconMenuClose from '../public/IconMenuClose.svg'


export default function Header() {
    const [mobileMenuState, setMobileMenuState] = useState(false)
    const toggleMobileMenu = () => setMobileMenuState(!mobileMenuState)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">SECOND-HAND STORE</Link>
                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                    { mobileMenuState ? 
                        (<IconMenuClose />) :
                        (<IconMenuOpen />)
                    }
                </button>
            </div>
            <div className={`${styles.menuContainer} ${mobileMenuState ? styles.show : ''}`}>
                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item}/>
                        ))}
                    </ul>
                </nav>
                <SearchForm />
            </div>
            <div className={`${styles.profile} ${mobileMenuState ? styles.show : ''}`}>
                <Link href="/">
                    <a className={styles.loginButton}>Log in</a>
                </Link>
                <Link href="/products/sell">
                    <a className={styles.sellButton}>Sell!</a>
                </Link>

            </div>
        </header>
    );
}
