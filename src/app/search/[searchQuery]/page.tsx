'use client';

import Error from '@/app/components/Error';
import MovieCard from '@/app/components/MovieCard';
import Spinner from '@/app/components/Spinner';
import { MovieList } from '@/app/models/movieList';
import { fetcher } from '@/app/utils/fetcher';
import useSWRImmutable from 'swr/immutable';

const Search = ({ params }: Props) => {
  const searchQuery = decodeURI(params.searchQuery);

  const { data, error, isLoading } = useSWRImmutable<MovieList>(
    `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=20&poster.previewUrl=!null&name=${searchQuery}`,
    fetcher
  );

  return (
    <div className='w-full px-[20px] pt-[20px] lg:px-[130px]'>
      <h2 className='cursor-default text-[32px] font-semibold'>
        Поиск: {searchQuery}
      </h2>

      {isLoading && <Spinner />}

      {error && <Error />}

      {data && (
        <div className='flex flex-wrap gap-[20px]'>
          {data.docs.map(movie => (
            <MovieCard key={movie.id} size='sm' movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

interface Props {
  params: {
    searchQuery: string;
  };
}

export default Search;
