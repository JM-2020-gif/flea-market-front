import Link from 'next/link';
import styles from '@/styles/ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
        <div className={styles.cardWrapper}>
            <h3 className={styles.cardName}>{product.attributes.name}</h3>
            <Link href={`/products/${product.attributes.slug}`}>
                <a className={styles.cardLink}>Go To {product.attributes.name}</a>
            </Link>
        </div>
    );
}
