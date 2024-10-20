'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useProduct } from '@/components/api/useProductQueries';
import ProductCard from '@/components/product/ProductCard';
import Loader from '@/components/global/Loader';

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log("ID", id);
  const { isError, isLoading, data } = useProduct(id as unknown as string);

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className='pt-[90px]  px-5 md:px-10'>
      {isError ? (
        <p>Error loading product data.</p>
      ) : (

        data &&
        <ProductCard product={data} />
      )}
    </div>
  );
};

export default ProductDetailPage;
