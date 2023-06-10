'use client';

import MovieCard from '../components/MovieCard';

const Favourites = () => {
  const keys = localStorage ? Object.keys(localStorage) : [];

  const movies = localStorage
    ? keys
        .map(key => {
          if (key.match(/[0-9]+/)) {
            return JSON.parse(localStorage.getItem(key)!);
          }
        })
        .filter(movie => movie !== undefined)
        .sort((a, b) => b.time - a.time)
    : [];

  return (
    <div className='w-full px-[20px] pb-[100px] pt-[20px] lg:px-[130px]'>
      <h2 className='cursor-default text-[32px] font-semibold'>Избранное</h2>

      <div className='flex flex-wrap gap-[20px]'>
        {movies &&
          movies.map(movie => (
            <MovieCard key={movie.id} size='sm' movie={movie} />
          ))}

        {!movies.length && (
          <div className='flex w-full items-center justify-center py-[50px] text-[20px]'>
            Похоже у вас нет избранных фильмов
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
