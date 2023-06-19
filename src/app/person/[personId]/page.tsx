'use client';

import Error from '@/app/components/Error';
import Spinner from '@/app/components/Spinner';
import { Person } from '@/app/models/person';
import { fetcher } from '@/app/utils/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import useSWRImmutable from 'swr/immutable';

const Person = ({ params }: Props) => {
  const { data, error, isLoading } = useSWRImmutable<Person>(
    `https://api.kinopoisk.dev/v1/person/${params.personId}`,
    fetcher
  );

  return (
    <div>
      {isLoading && <Spinner />}

      {error && <Error />}

      {data && (
        <div className='flex flex-col items-center gap-[10px] px-[20px] pb-[100px] pt-[20px] md:flex-row md:items-start md:justify-start md:gap-[50px] md:px-[130px]'>
          <Image
            src={data.photo}
            alt='Person photo'
            width={269}
            height={386}
            className='pointer-events-none h-auto w-[80vw] md:w-[269px]'
          />

          <div className='flex flex-col gap-[30px]'>
            <div>
              <h2 className='text-center text-[32px] font-bold md:text-left'>
                {data.name}
              </h2>
              <h3 className='text-center text-[22px] text-[#B5B5B5] md:text-left'>
                {data.enName}
              </h3>
            </div>

            <div className='flex max-w-[350px] flex-col gap-[10px] md:max-w-[500px]'>
              <div className='text-center text-[24px] font-semibold md:text-left'>
                О персоне
              </div>
              <div className='flex flex-col gap-[7px]'>
                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>Карьера</div>
                  <div className='w-[300px] text-white'>
                    {data.profession.map(
                      (profession, index) =>
                        `${profession.value}${
                          index !== data.profession.length - 1 ? ', ' : ''
                        }`
                    )}
                  </div>
                </li>

                {data.growth > 0 && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Рост</div>
                    <div className='w-[300px] text-white'>
                      {data.growth / 100} м.
                    </div>
                  </li>
                )}

                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>Дата рождения</div>
                  <div className='w-[300px] text-white'>
                    {new Date(data.birthday).toLocaleString('ru', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </li>

                {data.death && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Дата смерти</div>
                    <div className='w-[300px] text-white'>
                      {new Date(data.death).toLocaleString('ru', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </li>
                )}

                {data.birthPlace.length > 0 && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>
                      Место рождения
                    </div>
                    <div className='w-[300px] text-white'>
                      {data.birthPlace.map(
                        (place, index) =>
                          `${place.value}${
                            index !== data.birthPlace.length - 1 ? ', ' : ''
                          }`
                      )}
                    </div>
                  </li>
                )}

                {data.movies.length > 0 && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>
                      Всего фильмов
                    </div>
                    <div className='w-[300px] text-white'>
                      {data.movies.length}
                    </div>
                  </li>
                )}
              </div>
            </div>
          </div>

          {data.movies.filter(movie => movie.description).length > 0 && (
            <div className='flex flex-col gap-[10px] pl-[30px] pt-[50px]'>
              <div className='cursor-default text-center text-[24px] font-semibold md:text-left'>
                Лучшие фильмы
              </div>
              <ul className='flex flex-col gap-[3px] text-center text-[18px] md:text-left'>
                {data.movies
                  .sort((a, b) => b.rating! - a.rating!)
                  .filter(movie => movie.description)
                  .map(
                    (movie, index) =>
                      index <= 10 && (
                        <Link
                          href={`/movie/${movie.id}`}
                          key={movie.id}
                          className='cursor-pointer transition-all hover:text-[#BB2649]'>
                          {movie.name ? movie.name : movie.alternativeName}
                        </Link>
                      )
                  )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface Props {
  params: {
    personId: string;
  };
}

export default Person;
