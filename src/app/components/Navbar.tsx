'use client';

import { Bookmark, Clapperboard, Search, SearchX } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Input from './Input';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const showHandler = () => {
    setShowInput(prev => !prev);
  };

  return (
    <div className='sticky top-0 z-[3]'>
      <div className='relative flex h-[70px] w-full items-center justify-between bg-gradient-to-b from-black to-black/50 px-[20px] backdrop-blur-[2px] lg:px-[130px]'>
        <Link href={'/'}>
          <div className='flex cursor-pointer items-center transition-all hover:text-[#BB2649] active:scale-[1.1] '>
            <h1 className='select-none text-[32px] font-bold tracking-widest md:text-[40px]'>
              MOVIE
            </h1>
            <Clapperboard className='h-[38px] w-[38px] stroke-[#BB2649] stroke-[1px] md:h-[45px] md:w-[45px]' />
          </div>
        </Link>

        <div className='flex items-center gap-[15px]'>
          <Input
            className={`${
              showInput ? 'absolute right-[20px] top-[70px]' : 'hidden'
            } md:block`}
          />

          {!showInput && (
            <Search
              onClick={showHandler}
              className='h-[35px] w-[35px] cursor-pointer stroke-white stroke-[1px] transition-all hover:stroke-[#BB2649] active:scale-[1.1] md:hidden'
            />
          )}
          {showInput && (
            <SearchX
              onClick={showHandler}
              className='h-[35px] w-[35px] cursor-pointer stroke-[#BB2649] stroke-[1px] transition-all hover:stroke-[#BB2649] active:scale-[1.1] md:hidden'
            />
          )}

          <Link href={'/favourites'}>
            <Bookmark className='h-[35px] w-[35px] cursor-pointer stroke-white stroke-[1px] transition-all hover:stroke-[#BB2649] active:scale-[1.1]' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
