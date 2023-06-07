import { Bookmark, Clapperboard } from 'lucide-react';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='flex h-[80px] items-center justify-between px-[130px]'>
      <div className='flex cursor-pointer items-center transition-all hover:text-[#BB2649] active:scale-[1.1] '>
        <h1 className='text-[40px] font-bold tracking-widest'>MOVIE</h1>
        <Clapperboard color='#BB2649' size={45} strokeWidth={1} />
      </div>

      <div className='flex items-center gap-[15px]'>
        <Search />
        <Bookmark
          color='white'
          size={45}
          strokeWidth={1}
          className='cursor-pointer transition-all hover:stroke-[#BB2649] active:scale-[1.1] '
        />
      </div>
    </div>
  );
};

export default Navbar;
