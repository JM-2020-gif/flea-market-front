import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ProductCard.module.css';
import { formatDate, formatPrice } from '@/lib/helpers';

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.attributes.slug}`}>
            <a className={styles.productWrapper}>
                <div className={styles.imgContainer}>
                    <Image
                        src={product.attributes.media.data ? product.attributes.media.data[0].attributes.formats.small.url : '/product-placeholder.png'}
                        alt="product image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.info}>
                    <div className={styles.first}>
                        <p className={styles.date}>{formatDate(product.attributes.createdAt)}</p>
                        <p className={styles.location}>{product.attributes.location}</p>
                    </div>
                    <h3 className={styles.name}>{product.attributes.name}</h3>
                    <div className={styles.third}>
                        <h4 className={styles.price}>{formatPrice(product.attributes.price)}</h4>
                    </div>
                </div>
            </a>
        </Link>
    );
}
