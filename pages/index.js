import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { API_URL } from '@/config/index';

export default function Home({ categories }) {

    return (
        <Layout title="Flea Market | Home">
            <section className={styles.bannerContainer}>
                <Image
                    src='/BannerPhoto.jpg'
                    alt='Category image'
                    layout='fill'
                    objectFit='cover'
                />
                <h1 className={styles.textBanner}>SAVE MONEY<br/>SAVE THE PLANET<br/>BUY USED!<br/>Your store to buy and sell<br/> your products</h1>
            </section>
            <section className='categorySection'>
                <div className='viewCategories'>
                    {categories.data.length === 0 && <h3>No categories found</h3>}
                    {categories.data.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
                <Link href="/categories">
                    <a className={`primaryButton ${styles.viewAllButton}`} >View all categories</a>
                </Link>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/categories?populate[0]=media`);
    const categories = await res.json();

    return {
        props: { categories },
        revalidate: 1,
    };
}
