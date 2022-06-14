import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ title, description, keywords, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" conent={description} />
                <meta name="keywords" conent={keywords} />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer/>
        </>
    );
}

Layout.defaultProps = {
    title: 'Flea Market',
    description: 'Icelandic Flea Market for everyone! Buy and sell!',
    keywords: 'ecommerce, buy, sell, market, second-hand, thrift',
};
