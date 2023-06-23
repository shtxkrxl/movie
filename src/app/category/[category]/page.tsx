'use client';

import Error from '@/app/components/Error';
import MovieCard from '@/app/components/MovieCard';
import Spinner from '@/app/components/Spinner';
import { Movie, MovieList } from '@/app/models/movieList';
import { fetcher } from '@/app/utils/fetcher';
import { useEffect, useState } from 'react';
import useSWRImmutable from 'swr/immutable';

const Category = ({ params }: Props) => {
  const categoryName =
    decodeURI(params.category)[0].toUpperCase() +
    decodeURI(params.category).slice(1);

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data, error, isLoading } = useSWRImmutable<MovieList>(
    categoryName === 'Популярно'
      ? `https://api.kinopoisk.dev/v1.3/movie?sortField=votes.kp&page=${page}&limit=20&poster.previewUrl=!null&year=2023`
      : `https://api.kinopoisk.dev/v1.3/movie?sortField=year&page=${page}&limit=20&poster.previewUrl=!null&genres.name=${params.category}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const movieList: Movie[] = data.docs;
      setMovies(prev => prev.concat(movieList));
    }
  }, [data]);

  const clickHandler = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='w-full px-[20px] pt-[0] lg:px-[130px] lg:pt-[20px]'>
      <h2 className='cursor-default text-[32px] font-semibold'>
        {categoryName}
      </h2>

      {movies.length > 0 && (
        <div>
          <div className='flex flex-wrap gap-[20px]'>
            {movies.map(movie => (
              <MovieCard key={movie.id} size='sm' movie={movie} />
            ))}
          </div>

          {data && (
            <div className='flex h-[100px] w-full items-center justify-center'>
              <button
                onClick={clickHandler}
                className='flex items-center justify-center gap-[5px] rounded-[10px] px-[15px] py-[10px] text-[20px] outline outline-[2px] outline-[#BB2649] transition-all hover:bg-[#BB2649]/40 active:scale-[1.1]'>
                Загрузить ещё
              </button>
            </div>
          )}
        </div>
      )}

      {isLoading && <Spinner />}

      {error && <Error />}
    </div>
  );
};

interface Props {
  params: {
    category: string;
  };
}

export default Category;
