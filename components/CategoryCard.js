import Link from 'next/link'
import styles from '@/styles/CategoryCard.module.css'

export default function CategoryCard({category}) {
    return (
        <div className={styles.cardWrapper}>
            <h3 className={styles.cardName}>{category.attributes.name}</h3>
            <Link href={`categories/${category.attributes.slug}`}>
                <a className={styles.cardLink}>Go To {category.attributes.name}</a>
            </Link>
        </div>
    )
}
