import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/SellPage.module.css';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'

export default function EditPage({ product }) {
    const router = useRouter();
    const [values, setValues] = useState({
        name: product.data.attributes.name,
        price: product.data.attributes.price,
        description: product.data.attributes.description,
        location: product.data.attributes.location,
        category: 1,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = { data: values };

        const res = await fetch(`${API_URL}/api/products?filters[id]=${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        if (!res.ok) {
            console.log('Ooops, something went wrong');
        } else {
            const responseProduct = await res.json();
            console.log(responseProduct);
            router.push(`/products/${responseProduct.data.attributes.slug}`);
        }
    };

    //Preview image and image upload
    //Get last image from the array of media a Product has
    let last = 0
    if(product.data.attributes.media.data !== null) {
        last = product.data.attributes.media.data.length -1
    }
    const [imagePreview, setImagePreview] = useState(
        product.data.attributes.media.data
            ? product.data.attributes.media.data[last].attributes.formats.thumbnail.url
            : null
    );
    const imageUploaded = async (e) => {
        const res = await fetch(`${API_URL}/api/products/${product.data.id}?populate=%2A`)
        const updatedProduct = await res.json()
        console.log(updatedProduct)
    
        //Get last image from the array of media a Product has
        let lastImgIndex = 0
        if(updatedProduct.data.attributes.media.data !== null) {
          lastImgIndex = updatedProduct.data.attributes.media.data.length -1
        }
        setImagePreview(updatedProduct.data.attributes.media.data[lastImgIndex].attributes.formats.thumbnail.url)
        setShowModal(false)
    }



    //Modal State
    const [showModal, setShowModal] = useState(false)



    return (
        <Layout title="Flea Market | Edit">
            <h1 className="pageTitle">Edit your product</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} />

                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" value={values.price} onChange={handleInputChange} />

                <label htmlFor="description">Description</label>
                <input
                    text="text"
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleInputChange}
                />

                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" value={values.location} onChange={handleInputChange} />
                <button>Save changes</button>
            </form>
            <h3>Product Image</h3>
            {imagePreview ? (
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src={imagePreview}
                        priority={true}
                        alt="product image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ) : (
                <p>No image uploaded!</p>
            )}
            <button onClick={() => setShowModal(true)}>Set Image</button>
            <Modal show={showModal} title={'Upload Image'} onClose={() => setShowModal(false)}>
                <ImageUpload productId={product.data.id} imageUploaded={imageUploaded} />
            </Modal>
        </Layout>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${API_URL}/api/products/${id}?populate=%2A`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}
