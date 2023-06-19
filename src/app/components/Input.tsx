'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import { useDebounce } from '../hooks/debounce';
import { MovieList } from '../models/movieList';
import { fetcher } from '../utils/fetcher';

const Input = ({ className }: Props) => {
  const [input, setInput] = useState('');
  const debounced = useDebounce(input);

  const { data } = useSWRImmutable<MovieList>(
    debounced.length >= 3
      ? `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=4&poster.previewUrl=!null&sortField=votes.kp&name=${debounced}`
      : null,
    fetcher
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    setInput('');
  };

  return (
    <div className={className}>
      <div className='relative h-[35px] w-[300px] md:w-[350px]'>
        <input
          className='h-full w-full rounded-[10px] px-[10px] text-[20px] font-medium text-black outline-none transition-all placeholder:text-[#5B5B5B] focus:outline-[2px] focus:outline-offset-2 focus:outline-[#BB2649]'
          type='text'
          placeholder='Поиск'
          value={input}
          onChange={changeHandler}
        />

        {debounced.length >= 3 && data && data?.docs.length! > 0 && (
          <ul className='absolute left-0 top-[40px] w-full overflow-hidden rounded-[10px] bg-white md:top-[45px]'>
            {data.docs.map(movie => (
              <Link
                onClick={clickHandler}
                href={`/movie/${movie.id}`}
                key={movie.id}
                className='flex cursor-pointer items-center gap-[15px] p-[10px] transition-all hover:bg-neutral-300'>
                <Image
                  src={movie.poster.previewUrl}
                  alt='Movie poster'
                  width={56}
                  height={80}
                  className='h-[80px] w-[56px]'
                />

                <div>
                  <span className='text-[20px] font-semibold text-black'>
                    {movie.name ? movie.name : movie.alternativeName}
                  </span>
                  <div className='flex gap-[5px] text-[18px] text-[#5B5B5B]'>
                    {movie.rating.kp > 0 && (
                      <span
                        className={`text-[18px] font-semibold ${
                          movie.rating.kp > 6
                            ? 'text-[#00B631]'
                            : movie.rating.kp > 4
                            ? 'text-[#DEA000]'
                            : 'text-[#CA0000]'
                        }`}>
                        {Math.round(movie.rating.kp * 10) / 10}
                      </span>
                    )}
                    {movie.name ? `${movie.alternativeName}, ` : ''}
                    {movie.year}
                  </div>
                </div>
              </Link>
            ))}

            <Link
              onClick={clickHandler}
              href={`/search/${debounced}`}
              className='flex cursor-pointer items-center p-[10px] text-[20px] text-[#5B5B5B] hover:bg-neutral-300'>
              Показать все
            </Link>
          </ul>
        )}

        <Search className='absolute right-[5px] top-[3px] hidden h-[30px] w-[30px] stroke-[#5B5B5B] stroke-[2px] md:block' />
      </div>
    </div>
  );
};

interface Props {
  className?: string;
}

export default Input;
