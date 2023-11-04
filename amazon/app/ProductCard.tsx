// ProductCard.tsx
import Image from 'next/image'
import Button from './Button';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <Image src={product.image} alt={product.name} className='w-full rounded-lg border border-slate-200' width={200} height={200} />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <Button buttonText='Add to Cart' toastText={`${product.name} has been added to Basket`} toastType='success' />
      </div>
    </div>
  );
}