import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import SearchForm from '@/components/SearchForm';
import { menuItems } from '@/config/navigation'
import MenuItem from '@/components/MenuItem'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">SECOND-HAND STORE</Link>
            </div>
            <div>
                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item}/>
                        ))}
                    </ul>
                </nav>
            </div>
            <SearchForm />
            <div className={styles.login}>
                <a>Log in</a>
            </div>
        </header>
    );
}
