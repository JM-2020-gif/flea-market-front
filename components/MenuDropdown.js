import Link from 'next/link'
import styles from '@/styles/MenuDropdown.module.css'

export default function MenuDropdown({ submenu }) {
    return (
        <ul className={styles.dropdownMenu}>
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