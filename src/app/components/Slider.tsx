'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { MovieList } from '../models/models';

const Slider = ({ size, name, query }: Props) => {
  const [showNav, setShowNav] = useState(false);
  const { data, error, isLoading } = useSWR<MovieList>(
    `https://api.kinopoisk.dev/v1.3/movie?sortField=votes.kp&${query}`,
    fetcher
  );

  const enterHandler = () => {
    setShowNav(true);
  };

  const leaveHandler = () => {
    setShowNav(false);
  };

  if (error) {
    return (
      <div className='flex items-center justify-center text-[#BB2649]'>
        Something went wrong...
      </div>
    );
  }

  if (data) {
    return (
      <div className='flex flex-col'>
        <div className='mx-[130px] flex w-fit cursor-pointer items-center'>
          <h2
            className={`${
              size === 'lg' ? 'text-[32px]' : 'text-[24px]'
            } font-semibold`}>
            {name}
          </h2>
          <ChevronRight
            size={size === 'lg' ? 40 : 30}
            color='white'
            strokeWidth={2}
            className='pt-[5px]'
          />
        </div>

        <div onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
          <Splide
            hasTrack={false}
            options={{
              padding: 130,
              height: size === 'lg' ? 430 : 310,
              perPage: size === 'lg' ? 4 : 6,
              pagination: false,
            }}
            className={`${size === 'lg' ? 'h-[440px]' : 'h-[310px]'} relative`}>
            <SplideTrack>
              {data?.docs?.map(movie => (
                <SplideSlide key={movie.id} className='pt-[20px]'>
                  <MovieCard size={size} movie={movie} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className='splide__arrows'>
              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--prev absolute left-0 top-0 z-[2] cursor-pointer transition-all`}>
                <div
                  className={`${
                    size === 'lg' ? 'h-[440px]' : 'h-[310px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>

              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--next absolute right-0 top-0 z-[2] cursor-pointer transition-all`}>
                <div
                  className={`${
                    size === 'lg' ? 'h-[440px]' : 'h-[310px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>
            </div>

            <div
              className={`${!showNav && 'opacity-0'} ${
                size === 'lg' ? 'h-[440px]' : 'h-[310px]'
              } absolute left-0 top-0 z-[1] w-[130px] bg-gradient-to-r from-black/60 to-transparent transition-all`}></div>
            <div
              className={`${!showNav && 'opacity-0'} ${
                size === 'lg' ? 'h-[440px]' : 'h-[310px]'
              } absolute right-0 top-0 z-[1] w-[130px] bg-gradient-to-l from-black/60 to-transparent transition-all`}></div>
          </Splide>
        </div>
      </div>
    );
  }

  return <></>;
};

interface Props {
  size: 'sm' | 'lg';
  name: string;
  query: string;
}

export default Slider;
