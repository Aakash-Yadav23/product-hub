'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductMiniCard from '../product/ProductMiniCard';
import { useProducts } from '../api/useProductQueries';
import Loader from '../global/Loader';
import { IProduct } from '../interface/Product';

const Loot = () => {
  const router = useRouter();
  
  // Ensure window is only accessed on the client side
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Initialize the page state

  useEffect(() => {
    setIsClient(true); // Set flag to true once the component is on the client side
    if (isClient) {
      // Get the page number from query parameters once on the client
      const { searchParams } = new URL(window.location.href);
      const pageFromQuery = Number(searchParams.get('page')) || 1;
      setCurrentPage(pageFromQuery);
    }
  }, [isClient]);

  // Fetch products for the current page
  const { data, error, isLoading } = useProducts(currentPage);

  // Update query string when the page changes
  useEffect(() => {
    if (isClient) {
      router.push(`?page=${currentPage}`, undefined);
    }
  }, [currentPage, isClient, router]);

  const handleNextPage = () => {
    if (data?.totalPages && currentPage < data.totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if (!isClient) {
    return null; // Prevents rendering during SSR
  }

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.products?.map((product: IProduct) => (
          <ProductMiniCard
            key={product._id}
            product={product}
            onClick={() => console.log(`Clicked on ${product.title}`)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-medium">{`Page ${currentPage} of ${data?.totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === data?.totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Loot;
