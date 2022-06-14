import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { API_URL } from '@/config/index';

export default function AllCategories({ categories }) {

    return (
        <Layout title="Flea Market | All Categories">
            <h1>All Categories</h1>
            <section className='categorySection'>
                <div className='viewCategories'>
                    {categories.data.lenght === 0 && <h3>No categories found</h3>}
                    {categories.data.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
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
