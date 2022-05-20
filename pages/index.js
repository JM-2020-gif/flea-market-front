import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { API_URL } from '@/config/index';

export default function Home({ categories }) {

    return (
        <Layout title="Flea Market | Home">
            <section className={styles.viewCategories}>
                {categories.data.lenght === 0 && <h3>No categories found</h3>}
                {categories.data.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
                <Link href='/categories'>
                    <a className={styles.linkToAll}>View all categories</a> 
                </Link>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/categories`);
    const categories = await res.json();

    return {
        props: { categories },
        revalidate: 1,
    };
}
