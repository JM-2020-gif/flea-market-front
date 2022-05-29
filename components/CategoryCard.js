import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/CategoryCard.module.css';

export default function CategoryCard({ category }) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.image} 
                    src={category.attributes.media ? category.attributes.media.data.attributes.formats.small.url : '/placeholder.png'}
                    alt='Category image'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <Link href={`/categories/${category.attributes.slug}`}>
                <a className={styles.categoryLink}>{category.attributes.name}</a>           
            </Link>
        </div>
    );
}
