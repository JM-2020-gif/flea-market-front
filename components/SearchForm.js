import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/SearchForm.module.css'

export default function SearchForm() {
    const [term, setTerm] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/products/search?term=${term}`)
        setTerm('')
    }

    return (
       <form className={styles.form} onSubmit={handleSubmit}>
           <input className={styles.input} type="text" title="Search Products" placeholder="Search products" onChange={(e) => setTerm(e.target.value)} value={term} />
       </form>
    )
}