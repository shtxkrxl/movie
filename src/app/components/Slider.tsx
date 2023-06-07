'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { HalfCircleSpinner } from 'react-epic-spinners';
import useSWR from 'swr';
import { MovieList } from '../models/models';
import { fetcher } from '../utils/fetcher';
import MovieCard from './MovieCard';

const Slider = ({ size, name, query }: Props) => {
  const [showNav, setShowNav] = useState(false);
  const { data, error, isLoading } = useSWR<MovieList>(
    `https://api.kinopoisk.dev/v1.3/movie?sortField=votes.kp&${query}`,
    fetcher
  );

  const isLarge = size === 'lg';

  const enterHandler = () => {
    setShowNav(true);
  };
  const leaveHandler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <div className='mx-[130px] flex w-fit cursor-pointer items-center transition-all hover:scale-[1.1]'>
        <h2
          className={`${
            isLarge ? 'text-[32px]' : 'text-[24px]'
          } font-semibold`}>
          {name}
        </h2>
        <ChevronRight
          size={isLarge ? 40 : 30}
          color='white'
          strokeWidth={2}
          className='pt-[5px]'
        />
      </div>

      {isLoading && (
        <div
          className={`${
            isLarge ? 'h-[440px]' : 'h-[310px]'
          } flex w-full items-center justify-center`}>
          <HalfCircleSpinner size={60} color='#BB2649' />
        </div>
      )}

      {error && (
        <div className='flex items-center justify-center text-[32px] text-[#BB2649]'>
          Something went wrong...
        </div>
      )}

      {data && (
        <div onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
          <Splide
            hasTrack={false}
            options={{
              padding: 130,
              height: isLarge ? 430 : 310,
              perPage: isLarge ? 4 : 6,
              pagination: false,
            }}
            className={`${isLarge ? 'h-[440px]' : 'h-[310px]'} relative`}>
            <SplideTrack>
              {data.docs.map(movie => (
                <SplideSlide key={movie.id} className='pt-[20px]'>
                  <MovieCard size={size} movie={movie} />
                </SplideSlide>
              ))}

              <SplideSlide>
                <div
                  className={`${
                    isLarge ? 'h-[386px] w-[269px]' : 'h-[274px] w-[191px]'
                  } flex cursor-pointer items-center justify-center transition-all hover:scale-[1.1]`}>
                  <div className='flex flex-col items-center justify-center'>
                    <ArrowRight
                      size={isLarge ? 60 : 50}
                      color='white'
                      className='rounded-full bg-neutral-900 p-[12px]'
                    />
                    <span className='pt-[10px] text-[20px]'>Показать все</span>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>

            <div className='splide__arrows'>
              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--prev absolute left-0 top-0 z-[2] cursor-pointer transition-all`}>
                <div
                  className={`${
                    isLarge ? 'h-[440px]' : 'h-[310px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>

              <div
                className={`${!showNav && 'opacity-0'} ${
                  isLarge ? 'h-[440px]' : 'h-[310px]'
                } absolute left-0 top-0 z-[1] w-[130px] bg-gradient-to-r from-black/60 to-transparent transition-all`}></div>

              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--next absolute right-0 top-0 z-[2] cursor-pointer transition-all`}>
                <div
                  className={`${
                    isLarge ? 'h-[440px]' : 'h-[310px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>

              <div
                className={`${!showNav && 'opacity-0'} ${
                  isLarge ? 'h-[440px]' : 'h-[310px]'
                } absolute right-0 top-0 z-[1] w-[130px] bg-gradient-to-l from-black/60 to-transparent transition-all`}></div>
            </div>
          </Splide>
        </div>
      )}
    </div>
  );
};

interface Props {
  size: 'sm' | 'lg';
  name: string;
  query: string;
}

export default Slider;
