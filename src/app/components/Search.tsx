import { Dices } from 'lucide-react';

const Search = () => {
  return (
    <div className='relative h-[40px] w-[400px]'>
      <input
        className='h-full w-full rounded-[10px] px-[10px] text-[20px] font-medium text-black outline-none transition-all placeholder:text-[#5B5B5B] focus:outline-[2px] focus:outline-offset-2 focus:outline-[#BB2649]'
        type='text'
        placeholder='Поиск'
      />
      <Dices
        size={35}
        strokeWidth={2}
        color='#5B5B5B'
        className='absolute right-[5px] top-[2px] cursor-pointer transition-all hover:stroke-[#BB2649] active:scale-[1.1]'
      />
    </div>
  );
};

export default Search;
