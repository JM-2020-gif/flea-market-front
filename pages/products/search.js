import qs from 'qs'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'
import styles from '@/styles/SearchPage.module.css'
import ProductCard from '@/components/ProductCard'

export default function SearchPage({ matchedProducts }) {
    const router = useRouter()
    return (
        <Layout title='Flea Market Search'>
            <h1>Search results for: {`'${router.query.term}'`} </h1>
            {matchedProducts.data.length === 0 && <h3>No products found</h3>}
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
