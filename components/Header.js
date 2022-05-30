import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import SearchForm from '@/components/SearchForm';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">SECOND-HAND STORE</Link>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">All categories</Link>
                        </li>
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
