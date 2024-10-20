import React from 'react';
import { IProduct } from '../interface/Product';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TooltipIcon from '@mui/material/Tooltip';
import Link from 'next/link';

// Register the components needed for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Prepare data for the price history graph
  const labels = product.priceHistory?.map(history =>
    new Date(history.date!).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Price (₹)',
        data: product.priceHistory?.map(history =>
          Number(history.price.replace(/[₹,]/g, '')) // Convert price to a number
        ),
        borderColor: '#4CAF50', // Green line for price
        backgroundColor: 'rgba(76, 175, 80, 0.2)', // Light green background
        pointBorderColor: '#388E3C', // Darker green for points
        pointBackgroundColor: '#81C784', // Lighter green for point fill
        pointRadius: 5, // Point size
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `₹${tooltipItem.raw.toLocaleString('en-IN')}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines for simplicity
        },
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Light horizontal grid lines
        },
        title: {
          display: true,
          text: 'Price (₹)',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          callback: (value: number) => `₹${value.toLocaleString('en-IN')}`,
        },
      },
    },
  };


  return (
    <div className="bg-white  rounded-lg overflow-hidden transform transition duration-300 max-w-full mx-auto ">
      <div className="flex flex-col sm:flex-row gap-5 p-5">

        {/* Product Image */}
        <div className="relative mx-auto w-48">
          <img
            className="w-full h-48 object-contain rounded-lg border"
            src={product.image}
            alt={product.title}
          />
          <span className="absolute top-0 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded-br-lg shadow-md">
            {product.site.toUpperCase()}
          </span>
        </div>

        {/* Product Details */}
        <div className="w-full  flex flex-col md:flex-row gap-2">
          <div className="flex flex-col">

            <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{product.category.toUpperCase()}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xl font-bold text-green-600">{`${product.price}`}</span>
              {product.highestPrice && (
                <span className="text-sm text-gray-400 line-through">{`${product.highestPrice}`}</span>
              )}
            </div>
            {product.lowestPrice && (
              <p className="text-sm text-blue-500 mt-2">{`Lowest Price: ${product.lowestPrice}`}</p>
            )}
          </div>
          <div className="flex w-full lg:max-w-[250px] mx-auto flex-col gap-0 mt-4">
            <TooltipIcon title="Copy product link" placement="right">
              <button className="flex items-center justify-center text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition-all">
                Copy Link <ContentCopyIcon className="ml-2" />
              </button>
            </TooltipIcon>
            <TooltipIcon title="open link in flipkart" placement="right">

              <Link
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
              >
                Open in {product.site}
              </Link>
            </TooltipIcon>

          </div>
          {/* Copy Link Button */}

        </div>
      </div>

      {/* Price History Chart */}
      <div className="w-full max-w-[800px] mx-auto p-6 bg-gray-50 rounded-lg shadow-inner mt-6">
        <h3 className="text-lg font-semibold mb-4">Price History</h3>
        {product.priceHistory && product.priceHistory.length > 0 ? (
          <Line data={data} options={options as any} />
        ) : (
          <p>No price history available</p>
        )}

        {/* Lowest & Highest Price Info */}
        <div className="w-full flex justify-between items-center mt-4">
          {product.lowestPrice && (
            <p className="text-sm text-blue-500">{`Lowest Price: ${product.lowestPrice}`}</p>
          )}
          {product.highestPrice && (
            <p className="text-sm text-red-500">{`Highest Price: ${product.highestPrice}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
