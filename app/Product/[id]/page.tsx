// pages/product/[id].tsx

import ProductDetail from '@/app/Components/ProductDetail';
import { client } from '@/sanity/lib/client';

const Page = async ({ params }: { params: { id: string } }) => {
  const query = `*[ _type == "product" && _id == $id]{
    name,
    "id": _id,
    price,
    description,
    discountPercentage,
    category,
    stockLevel,
    "image": image.asset._ref
  }[0]`;

  const product: Product | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div className='container mx-auto py-16 text-center'>
        <h1 className='text-2xl font-bold text-red-500'>Product Not Found</h1>
        <p className='text-gray-600'>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductDetail product={product} key={product.id} />
      </div>
    </div>
  );
};

export default Page;