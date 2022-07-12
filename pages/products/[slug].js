import Layout from '@/components/Layout';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { API_URL } from '@/config/index';

export default function Product({ product }) {

    const router = useRouter()
    const deleteProduct = async (e) => {
        if(confirm(`Are you sure you want to remove this product?`)) {
            const res = await fetch(`${API_URL}/api/products/${product.id}`, { method: 'DELETE' })
            const deletedProduct = await res.json()
            
            if(!res.ok) {
                console.log(`${deletedProduct}`)
            } else {
                router.push('/categories')
            }
        }
    }
 

    return (
        <Layout title={`Flea Market | ${product.attributes.name}`}>
            <div>
                <Link href={`/products/edit/${product.id}`}>Edit</Link>             
            </div>
            <div>
                <button onClick={deleteProduct}>Delete</button>             
            </div>


            <h1 className='pageTitle'>{product.attributes.name}</h1>
            <section></section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/products`);
    const products = await res.json();

    const paths = products.data.map((product) => ({
        params: { slug: product.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/api/products?filters[slug]=${slug}&populate=%2A`);
    const product = await res.json();

    return {
        props: { product: product.data[0] },
        revalidate: 1,
    };
}
