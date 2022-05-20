import Link from 'next/link';
import styles from '@/styles/CategoryCard.module.css';

export default function CategoryCard({ category }) {
    return (
        <Link href={`/categories/${category.attributes.slug}`}>
            <div className={styles.cardWrapper}>
                <h3 className={styles.cardName}>{category.attributes.name}</h3>
                <p className={styles.cardLink}>Shop More</p>
            </div>
        </Link>

    );
}
