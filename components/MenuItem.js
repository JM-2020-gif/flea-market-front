import Link from 'next/link'
import { useState } from 'react'
import MenuDropdown from '@/components/MenuDropdown'
import styles from '@/styles/MenuItem.module.css'

export default function MenuItem({ item }) {

    const [dropdownState, setDropdownState] = useState(false)

    const toggleSubmenu = () => {
        setDropdownState(!dropdownState)
    }

    return (
        <li className={styles.listItem}>
            { item.submenu ? (
                <>
                    <button className={styles.hasSubmenu} onClick={toggleSubmenu}>
                        {item.title}
                    </button>
                    <MenuDropdown submenu={item.submenu} dropdownState={dropdownState} />
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