import React from 'react';
import { IProduct } from '../interface/Product';
import Link from 'next/link';
import Image from 'next/image';

interface ProductMiniCardProps {
    product: IProduct;
    onClick: () => void;
}

const ProductMiniCard: React.FC<ProductMiniCardProps> = ({ product, onClick }) => {
    // const formattedDate = new Date(product.cratedAt!).toLocaleDateString();
    // const product: Partial<IProduct> = {
    //     "_id": "67147d4d44fbed0e47e3cc02",
    //     "title": "Lenovo LOQ AMD Ryzen 7 Octa Core 8845HS - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeFor...",
    //     "price": "₹1,00,690",
    //     "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/z/n/-original-imah2h5hdw9gp3qz.jpeg?q=70",
    //     "site": "flipkart",
    //     "link": "https://www.flipkart.com/lenovo-loq-amd-ryzen-7-octa-core-8845hs-16-gb-512-gb-ssd-windows-11-home-6-graphics-nvidia-geforce-rtx-4050-15ahp9-gaming-laptop/p/itm0678f1476115d?pid=COMHF2JYGDU8HMFE&lid=LSTCOMHF2JYGDU8HMFE7CJZJN&marketplace=FLIPKART&q=laptop&store=6bo%2Fb5g&srno=s_2_41&otracker=search&fm=organic&iid=en_N6fnC16V9RbyLx5Vg036cOF7UNzwwZ_JawwZ_3kUNUjZHDflhkO2GpuH6S5mTKNsvDma61QKTXA_0Fyp9xvCPPUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&ssid=oe4r707fps0000001729324510014&qH=312f91285e048e09",
    //     "product": "laptop",
    //     "category": "electronic",
    //     "lowestPrice": "₹1,00,690",
    //     "highestPrice": "₹1,50,690",
    // }
    onClick();
    return (
        <div className="bg-white shadow-md  rounded-lg overflow-hidden transform transition hover:scale-105 duration-300 max-w-xs mx-auto">
            <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <Image
                    className="w-full h-48 object-contain"
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    quality={100}
                    objectFit='contain'
                    priority
                    // layout='responsive'
                />

                <span className="absolute top-0 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded-br-lg">
                    {product.site.toUpperCase()}
                </span>
            </div>
            <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-500 text-sm mt-2">{product.category}</p>
                <div className="flex items-center justify-between mt-3">

                    <span className="text-lg font-bold text-green-600 text-center">{`${product.price}`}</span>
                    {product.highestPrice && (
                        <span className="text-sm text-gray-400 line-through">{`${product.highestPrice}`}</span>
                    )}
                </div>
                {product.highestPrice && (
                    <span className="text-sm text-red-400">{`Heighest Price ${product.highestPrice}`}</span>
                )}
                {product.lowestPrice && (
                    <p className="text-sm text-blue-500 mt-1">{`Lowest Price: ${product.lowestPrice}`}</p>
                )}
                <Link
                    href={`/product/${product._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                    View Stats
                </Link>

                <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-center text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
                >
                    Flipkart Link
                </Link>
            </div>
        </div>
    );
};

export default ProductMiniCard;
