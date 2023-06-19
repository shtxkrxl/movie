'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import { MovieList } from '../models/movieList';
import { fetcher } from '../utils/fetcher';
import Error from './Error';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

const Slider = ({ size, name, query }: Props) => {
  const [showNav, setShowNav] = useState(false);
  const { data, error, isLoading } = useSWRImmutable<MovieList>(
    `https://api.kinopoisk.dev/v1.3/movie?sortField=votes.kp&${query}`,
    fetcher
  );

  const isLarge = size === 'lg';
  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false;

  const enterHandler = () => {
    setShowNav(true);
  };
  const leaveHandler = () => {
    setShowNav(false);
  };

  if (!isLoading && !data?.docs) {
    return <Error />;
  }

  return (
    <div>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className='flex w-fit cursor-pointer items-center px-[20px] transition-all hover:scale-[1.1] lg:px-[130px]'>
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
      </Link>

      {isLoading && <Spinner />}

      {error && <Error />}

      {data?.docs && (
        <div onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
          <Splide
            hasTrack={false}
            options={{
              padding: isMobile ? 20 : 130,
              autoHeight: true,
              autoWidth: true,
              perMove: 2,
              gap: 20,
              pagination: false,
            }}
            className={`${isLarge ? 'h-auto' : 'h-auto'} relative`}>
            <SplideTrack>
              {data.docs.map(movie => (
                <SplideSlide key={movie.id} className='py-[20px]'>
                  <MovieCard size={size} movie={movie} />
                </SplideSlide>
              ))}

              <SplideSlide>
                <Link
                  href={`/category/${name}`}
                  className={`${
                    isLarge ? 'h-full w-[200px]' : 'h-full w-[191px]'
                  } flex cursor-pointer items-center justify-center transition-all hover:scale-[1.1]`}>
                  <div className='flex flex-col items-center justify-center'>
                    <ArrowRight
                      size={60}
                      color='white'
                      className='rounded-full bg-neutral-900 p-[12px]'
                    />
                    <span className='pt-[10px] text-[20px]'>Показать все</span>
                  </div>
                </Link>
              </SplideSlide>
            </SplideTrack>

            <div className='splide__arrows'>
              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--prev absolute left-0 top-0 z-[2] hidden cursor-pointer transition-all lg:block`}>
                <div
                  className={`${
                    isLarge ? 'h-[400px]' : 'h-[300px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>

              <div
                className={`${!showNav && 'opacity-0'} ${
                  isLarge ? 'h-[400px]' : 'h-[300px]'
                } absolute left-0 top-0 z-[1] hidden w-[130px] bg-gradient-to-r from-black/60 to-transparent transition-all lg:block`}></div>

              <button
                className={`${
                  !showNav && 'opacity-0'
                } splide__arrow--next absolute right-0 top-0 z-[2] hidden cursor-pointer transition-all lg:block`}>
                <div
                  className={`${
                    isLarge ? 'h-[400px]' : 'h-[300px]'
                  } flex items-center justify-center`}>
                  <ChevronRight size={60} strokeWidth={2} />
                </div>
              </button>

              <div
                className={`${!showNav && 'opacity-0'} ${
                  isLarge ? 'h-[400px]' : 'h-[300px]'
                } absolute right-0 top-0 z-[1] hidden w-[130px] bg-gradient-to-l from-black/60 to-transparent transition-all lg:block`}></div>
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
