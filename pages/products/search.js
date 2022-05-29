import qs from 'qs'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/SearchPage.module.css'
import { getStaticProps } from 'pages'
import ProductCard from '@/components/ProductCard'

export default function SearchPage({ matchedProducts }) {
    return (
        <Layout title='Flea Market Search'>
            <p className={styles.blue}>Search Page</p>
            {matchedProducts.data.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Layout>
    )
}

export async function getServerSideProps({ query: { term } }) {
    const query = qs.stringify({
        filters: {
            $or: [
                {name: {$contains: term}},
                {description: {$contains: term}}
            ]
        },
        populate: ['media']
})
    
    const res = await fetch(`${API_URL}/api/products?${query}`)
    const matchedProducts = await res.json()

    return {
        props: { matchedProducts }
    }
}
