'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IProduct } from '../interface/Product';

// const API_URL = process.env.PRODUCT_API;
const PRODUCT_API = "https://jt7j1nj30d.execute-api.ap-south-1.amazonaws.com/dev"
interface IProductResponse {
  total: number;
  page: number;
  totalPages: number;
  products: IProduct[];
}
const fetchProducts = async (pageNo: number) => {
  console.log("API", PRODUCT_API)
  if (!PRODUCT_API) {
    throw new Error('API_URL is not defined');
  }
  const response = await axios.get(`${PRODUCT_API}/search?page=${pageNo}`);
  console.log("RESPONSE", response)
  return response.data.data;
};

export const useProducts = (pageNo: number) => {
  return useQuery<IProductResponse, Error>({
    queryKey: ['products', pageNo],
    queryFn: () => fetchProducts(pageNo),
    staleTime: 1000 * 60 * 5,
  });
};


const fetchProduct = async (id: string) => {
  console.log("API", PRODUCT_API)
  if (!PRODUCT_API) {
    throw new Error('API_URL is not defined');
  }
  const response = await axios.get(`${PRODUCT_API}/product?productId=${id}`);
  console.log("RESPONSE", response)
  return response.data.data;
};



export const useProduct = (id: string) => {
  return useQuery<IProduct, Error>({
    queryKey: ['product',id],
    queryFn: () => fetchProduct(id),
    staleTime: 1000 * 60 * 5,
  });
};