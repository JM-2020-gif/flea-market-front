import Link from 'next/link'
import styles from '@/styles/MenuDropdown.module.css'

export default function MenuDropdown({ submenu, dropdownState }) {
    return (
        <ul className={`${styles.dropdownMenu} ${dropdownState ? styles.show : styles.hidde}`}>
            {submenu.map((item, index) => (
                <li key={index} className={styles.dropdownItem} >
                    <Link href={item.slug}>
                        <a className={styles.itemLink}>{item.title}</a>
                    </Link>
                </li>
            ))
            }
        </ul>
    )
}