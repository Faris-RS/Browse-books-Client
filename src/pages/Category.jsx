import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { categoryBooks } from '../APIs/bookApi';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Category = () => {
    const [Books, setBooks] = useState([])

    const Page = location.pathname;
    const parts = Page.split('/');
    const category = parts[parts.length - 1];

    const getCategoryBooks = async () => {
        const allData = await categoryBooks(category)
        setBooks(allData.data.books)
    }
    useEffect(() => {
        getCategoryBooks()

    }, [])

    return (
        <>
            <Navbar />
            <section className="py-12 text-white h-screen" style={{ backgroundColor: '#161616' }} >
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-center">My  Books</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Books && Books.length > 0 ? (

                            <>
                                {Books.map((book, i) => (
                                    <div key={i} className="hover:shadow-2xl hover:border-yellow-500 border-4 ease-in-out duration-300">
                                        <ProductCard userBooks={book} values={book} />
                                    </div>
                                ))}
                            </>
                        ) : (<p>No Books Added</p>)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Category