'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Toaster, toast } from 'sonner'
import Button from './Button';
import { useState, useEffect } from 'react';


import ProductCard from './ProductCard';

const products = [
  { name: 'Product 1', description: 'Description 1', price: 99.99, image: '/product.svg' },
  { name: 'Product 2', description: 'Description 2', price: 89.99, image: '/product.svg' },
  { name: 'Product 3', description: 'Description 3', price: 69.99, image: '/product.svg' },
  { name: 'Product 4', description: 'Description 4', price: 59.99, image: '/product.svg' },
  { name: 'Product 5', description: 'Description 5', price: 49.99, image: '/product.svg' },
  { name: 'Product 6', description: 'Description 6', price: 39.99, image: '/product.svg' },
  { name: 'Product 7', description: 'Description 7', price: 79.99, image: '/product.svg' },
  { name: 'Product 8', description: 'Description 8', price: 69.99, image: '/product.svg' },
  { name: 'Product 9', description: 'Description 9', price: 59.99, image: '/product.svg' },
  { name: 'Product 10', description: 'Description 10', price: 49.99, image: '/product.svg' },
  { name: 'Product 11', description: 'Description 11', price: 39.99, image: '/product.svg' },
  { name: 'Product 12', description: 'Description 12', price: 69.99, image: '/product.svg' },
  { name: 'Product 13', description: 'Description 13', price: 59.99, image: '/product.svg' },
  { name: 'Product 14', description: 'Description 14', price: 49.99, image: '/product.svg' },
  { name: 'Product 15', description: 'Description 15', price: 39.99, image: '/product.svg' },
  { name: 'Product 16', description: 'Description 16', price: 89.99, image: '/product.svg' },
  { name: 'Product 17', description: 'Description 17', price: 79.99, image: '/product.svg' },
  { name: 'Product 18', description: 'Description 18', price: 69.99, image: '/product.svg' },
  { name: 'Product 19', description: 'Description 19', price: 59.99, image: '/product.svg' },
  { name: 'Product 20', description: 'Description 20', price: 49.99, image: '/product.svg' },
  { name: 'Product 21', description: 'Description 21', price: 39.99, image: '/product.svg' },
  { name: 'Product 22', description: 'Description 22', price: 79.99, image: '/product.svg' },
  { name: 'Product 23', description: 'Description 23', price: 69.99, image: '/product.svg' },
  { name: 'Product 24', description: 'Description 24', price: 59.99, image: '/product.svg' },
  { name: 'Product 25', description: 'Description 25', price: 49.99, image: '/product.svg' },
  { name: 'Product 26', description: 'Description 26', price: 39.99, image: '/product.svg' },
  { name: 'Product 27', description: 'Description 27', price: 89.99, image: '/product.svg' },
  { name: 'Product 28', description: 'Description 28', price: 79.99, image: '/product.svg' },
  { name: 'Product 29', description: 'Description 29', price: 69.99, image: '/product.svg' },
  { name: 'Product 30', description: 'Description 30', price: 59.99, image: '/product.svg' }
];


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  return (
    <main>

      <Toaster position="bottom-center" richColors />

      <nav className="flex flex-col md:flex-row bg-slate-50 items-center justify-between p-6 px-8 border-b border-slate-200">
        <div>
          <Image src="/amazon.svg" alt="Amazon" className='mt-0.5' width={80} height={40} />
        </div>
        <div className="flex-grow mx-8 flex justify-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search Amazon"
            className="md:w-1/2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <Button buttonText='Your Amazon' toastText='Jeff says hi 👋' toastType='info' />
        </div>
      </nav>

      <div className="flex flex-wrap p-6 pt-8 px-8">
        <div className="w-full md:w-1/2">
          <Image onClick={() => toast.error('Not a real link, sorry!')} src="/iphone.png" alt="Image 1" layout="responsive" className='cursor-pointer rounded-l-xl' width={500} height={300} />
        </div>
        <div className="w-full md:w-1/2">
          <Image onClick={() => toast.error('Not a real link, sorry!')} src="/echo.png" alt="Image 2" layout="responsive" className='cursor-pointer mt-4 md:mt-0 rounded-r-xl' width={500} height={300} />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 pt-2 px-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className="col-span-4 text-center py-5">
            No results found
          </div>
        )}
      </section>

      <footer className='py-10 pb-10 border-t border-slate-200 bg-[#146eb4]'>
        <center>
          <Image src="/smile.svg" alt="Amazon" className='mt-0.5 mb-3' width={80} height={40} />
          <Link href="https://reeceatkinson.com/" className='pt-5 underline underline-offset-8 text-sm text-white font-medium'>Amazon Web Concept. By @reece_dev.</Link>
        </center>
      </footer>

    </main>
  )
}
