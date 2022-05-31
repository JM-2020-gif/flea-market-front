import Link from 'next/link'
import MenuDropdown from '@/components/MenuDropdown'
import styles from '@/styles/MenuItem.module.css'

export default function MenuItem({ item }) {

    return (
        <li className={styles.listItem}>
            { item.submenu ? (
                <>
                    <button className={styles.hasSubmenu}>
                        {item.title}
                    </button>
                    <MenuDropdown submenu={item.submenu} />
                </>
            ) : (
                <Link href={item.slug}>
                    <a>{item.title}</a>
                </Link>
            )
            }
        </li>
    )
}