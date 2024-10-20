import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
    return (
        <div className='w-full flex items-center relative gap-2'>
            <Input
                className='w-full bg-white py-2 px-4 rounded-full border border-blue-500'
                type="text"
                placeholder='Paste product link or type product name'
            />
            <Button className='h-full flex items-center justify-center p-2'>
                <SearchIcon fontSize='large' />
            </Button>
            <div className="info absolute bg-yellow-600 bg-opacity-5 p-2 rounded-full top-[35px] w-full">
                <p className='text-center'>
                    Try pasting a product link from Flipkart/Amazon or type product name or category
                </p>
            </div>
        </div>
    );
};

export default SearchInput;
