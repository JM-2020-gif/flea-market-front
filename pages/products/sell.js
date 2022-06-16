import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/SellPage.module.css'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function SellPage() {
    const router = useRouter()

    const [values, setValues] = useState({
        name: '',
        price: '',
        description: '',
        location: '',
        category: 1
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newProduct = {data: values}

        const res = await fetch(`${API_URL}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        if(!res.ok) {
            console.log('Ooops, something went wrong')
        } else {
            const responseProduct = await res.json()
            console.log(responseProduct)
            router.push(`/products/${responseProduct.data.attributes.slug}`)
        }
    }


    return (
        <Layout title='Flea Market | Sell'>
            <h1 className='pageTitle'>Sell a product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={values.name} onChange={handleInputChange}/>

                <label htmlFor='price'>Price</label>
                <input type='text' id='price' name='price' value={values.price} onChange={handleInputChange} />

                <label htmlFor='description'>Description</label>
                <input text='text'id='description' name='description' value={values.description} onChange={handleInputChange}/>

                <label htmlFor='location'>Location</label>
                <input type='text' id='location' name='location' value={values.location} onChange={handleInputChange}/>
                <button>Sell!</button>
            </form>
        </Layout>
    )
}