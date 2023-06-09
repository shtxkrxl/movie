import { Bookmark, Clapperboard } from 'lucide-react';
import Search from './Search';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-[3] flex h-[70px] w-full items-center justify-between bg-gradient-to-b from-black to-black/50 px-[130px] backdrop-blur-[2px]'>
      <Link href={'/'}>
        <div className='flex cursor-pointer items-center transition-all hover:text-[#BB2649] active:scale-[1.1] '>
          <h1 className='select-none text-[40px] font-bold tracking-widest'>
            MOVIE
          </h1>
          <Clapperboard color='#BB2649' size={45} strokeWidth={1} />
        </div>
      </Link>

      <div className='flex items-center gap-[15px]'>
        <Search />
        <Bookmark
          color='white'
          size={35}
          strokeWidth={1}
          className='cursor-pointer transition-all hover:stroke-[#BB2649] active:scale-[1.1] '
        />
      </div>
    </div>
  );
};

export default Navbar;
