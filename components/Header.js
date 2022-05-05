import styles from '@/styles/Header.module.css';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a>Logo Flea Market</a>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a>All categories</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.login}>
                <a>Log in</a>
            </div>
        </header>
    );
}
