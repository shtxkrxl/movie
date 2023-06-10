'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { BookmarkMinus, BookmarkPlus, Play } from 'lucide-react';
import { Movie } from '@/app/models/movie';
import { fetcher } from '@/app/utils/fetcher';
import { HalfCircleSpinner } from 'react-epic-spinners';
import Error from '@/app/components/Error';
import Link from 'next/link';
import useSWRImmutable from 'swr/immutable';

const Movie = ({ params }: Props) => {
  const { data, error, isLoading } = useSWRImmutable<Movie>(
    `https://api.kinopoisk.dev/v1.3/movie/${params.movieId}`,
    fetcher
  );

  const [isFavourite, setIsFavourite] = useState(
    localStorage.getItem(params.movieId) != undefined
  );

  const addFavourite = () => {
    if (data) {
      localStorage.setItem(
        data.id.toString(),
        JSON.stringify({
          id: data.id,
          poster: {
            previewUrl: data.poster.previewUrl,
          },
          rating: {
            kp: data.rating.kp || 0,
          },
          time: Date(),
        })
      );
      setIsFavourite(true);
    }
  };

  const removeFavourite = () => {
    localStorage.removeItem(params.movieId);
    setIsFavourite(false);
  };

  return (
    <div>
      {isLoading && (
        <div className='flex h-[200px] w-full items-center justify-center'>
          <HalfCircleSpinner size={60} color='#BB2649' />
        </div>
      )}

      {error && <Error />}

      {data && (
        <div className='flex flex-col justify-center gap-[10px] px-[20px] pb-[100px] pt-[20px] md:flex-row md:justify-start md:gap-[50px] lg:px-[130px]'>
          <div className='flex flex-col gap-[30px]'>
            <Image
              src={data.poster.previewUrl!}
              alt='Movie poster'
              width={269}
              height={386}
              className='pointer-events-none mx-auto h-auto w-[80vw] md:w-[269px]'
            />
            {data.videos.trailers.filter(trailer => trailer.site === 'youtube')
              .length !== 0 && (
              <iframe
                width='269'
                src={
                  data.videos.trailers.filter(
                    trailer => trailer.site === 'youtube'
                  )[0].url
                }
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='hidden md:block'></iframe>
            )}
          </div>

          <div className='flex flex-col gap-[30px]'>
            <div>
              <h2 className='text-center text-[32px] font-bold md:text-left'>
                {data.name}
              </h2>
              <h3 className='text-center text-[22px] text-[#B5B5B5] md:text-left'>
                {`${
                  data.alternativeName !== null
                    ? `${data.alternativeName}, `
                    : ''
                }${data.year}${
                  data.ageRating !== null ? `, ${data.ageRating}+` : ''
                }`}
              </h3>
            </div>

            <div className='mx-auto flex items-center gap-[5px] md:mx-0'>
              {data.externalId.kpHD && (
                <a
                  href={`https://hd.kinopoisk.ru/film/${data.externalId.kpHD}`}
                  target='_blank'>
                  <button className='flex items-center justify-center gap-[5px] rounded-[10px] px-[15px] py-[10px] text-[20px] outline outline-[2px] outline-[#BB2649] transition-all hover:bg-[#BB2649]/40 active:scale-[1.1]'>
                    <Play color='white' size={30} fill='white' />
                    Смотреть
                  </button>
                </a>
              )}
              {!isFavourite && (
                <BookmarkPlus
                  onClick={addFavourite}
                  className='h-[50px] w-[50px] cursor-pointer stroke-white stroke-[1px] transition-all hover:stroke-[#BB2649] active:scale-[1.1]'
                />
              )}
              {isFavourite && (
                <BookmarkMinus
                  onClick={removeFavourite}
                  className='h-[50px] w-[50px] cursor-pointer stroke-white stroke-[1px] transition-all hover:stroke-[#BB2649] active:scale-[1.1]'
                />
              )}
            </div>

            <p className='max-w-[500px] text-center text-[18px] md:text-left'>
              {data.description}
            </p>

            {data.videos.trailers.filter(trailer => trailer.site === 'youtube')
              .length !== 0 && (
              <iframe
                width='269'
                src={
                  data.videos.trailers.filter(
                    trailer => trailer.site === 'youtube'
                  )[0].url
                }
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='mx-auto md:hidden'></iframe>
            )}

            <div className='flex max-w-[500px] flex-col gap-[15px]'>
              <div className='text-center text-[28px] font-semibold md:text-left'>
                О фильме
              </div>
              <div className='flex flex-col gap-[10px]'>
                {data.rating.kp && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Рейтинг</div>
                    <div
                      className={`w-[300px] ${
                        data.rating.kp > 6
                          ? 'text-[#00B631]'
                          : data.rating.kp > 4
                          ? 'text-[#DEA000]'
                          : 'text-[#CA0000]'
                      }`}>
                      {Math.round(data.rating.kp * 10) / 10}
                    </div>
                  </li>
                )}

                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>
                    Год производства
                  </div>
                  <div className='w-[300px] text-white'>{data.year}</div>
                </li>

                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>Страна</div>
                  <div className='w-[300px] text-white'>
                    {data.countries.map(
                      (country, index) =>
                        `${country.name}${
                          index !== data.countries.length - 1 ? ', ' : ''
                        }`
                    )}
                  </div>
                </li>

                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>Жанры</div>
                  <div className='w-[300px] text-white'>
                    {data.genres.map((genre, index) => (
                      <span key={genre.name}>
                        <Link
                          href={`/category/${genre.name}`}
                          className='cursor-pointer underline underline-offset-2 transition-all hover:text-[#BB2649]'>
                          {genre.name}
                        </Link>
                        {index !== data.genres.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </li>

                {data.slogan && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Слоган</div>
                    <div className='w-[300px] text-white'>{data.slogan}</div>
                  </li>
                )}

                <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                  <div className='w-[200px] leading-[25px]'>Режиссер</div>
                  <div className='w-[300px] text-white'>
                    {data.persons
                      .filter(person => person.profession === 'режиссеры')
                      .map((person, index) => (
                        <span key={person.name}>
                          <Link target='_blank' href={`/person/${person.id}`}>
                            <span className='cursor-pointer underline underline-offset-2 transition-all hover:text-[#BB2649]'>
                              {person.name}
                            </span>
                          </Link>
                          {index !==
                          data.persons.filter(
                            person => person.profession === 'режиссеры'
                          ).length -
                            1
                            ? ', '
                            : ''}
                        </span>
                      ))}
                  </div>
                </li>

                {data.budget.value && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Бюджет</div>
                    <div className='w-[300px] text-white'>
                      {data.budget.currency}
                      {data.budget.value.toLocaleString('ru-RU')}
                    </div>
                  </li>
                )}

                {data.fees.world.value && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Сборы в мире</div>
                    <div className='w-[300px] text-white'>
                      {data.fees.world.currency}
                      {data.fees.world.value.toLocaleString('ru-RU')}
                    </div>
                  </li>
                )}

                {data.fees.russia?.value && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>
                      Сборы в России
                    </div>
                    <div className='w-[300px] text-white'>
                      {data.fees.russia.currency}
                      {data.fees.russia.value.toLocaleString('ru-RU')}
                    </div>
                  </li>
                )}

                {data.premiere.world && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>
                      Премьера в мире
                    </div>
                    <div className='w-[300px] text-white'>
                      {new Date(data.premiere.world).toLocaleString('ru', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </li>
                )}

                {data.premiere.russia && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>
                      Премьера в России
                    </div>
                    <div className='w-[300px] text-white'>
                      {new Date(data.premiere.russia).toLocaleString('ru', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </li>
                )}

                {data.movieLength && (
                  <li className='flex flex-none justify-between text-[20px] text-[#B5B5B5]'>
                    <div className='w-[200px] leading-[25px]'>Время</div>
                    <div className='w-[300px] text-white'>
                      {data.movieLength} мин.
                    </div>
                  </li>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col gap-[10px] pl-[30px] pt-[50px]'>
              {data.persons.filter(person => person.profession === 'актеры')
                .length !== 0 && (
                <div className='pb-[50px]'>
                  <div className='cursor-default text-center text-[20px] font-semibold md:text-left'>
                    В главных ролях
                  </div>
                  <ul className='flex flex-col gap-[3px] text-center text-[18px] md:text-left'>
                    {data.persons
                      .filter(person => person.profession === 'актеры')
                      .map(
                        (person, index) =>
                          index <= 10 && (
                            <Link
                              href={`/person/${person.id}`}
                              key={person.id}
                              className='cursor-pointer transition-all hover:text-[#BB2649]'>
                              {person.name ? person.name : person.enName}
                            </Link>
                          )
                      )}
                  </ul>
                </div>
              )}

              {data.similarMovies.length !== 0 && (
                <div>
                  <div className='cursor-default text-center text-[20px] font-semibold md:text-left'>
                    Похожие фильмы
                  </div>
                  <ul className='flex flex-col gap-[3px] text-center text-[18px] md:text-left'>
                    {data.similarMovies.map(movie => (
                      <Link
                        href={`/movie/${movie.id}`}
                        key={movie.id}
                        className='cursor-pointer transition-all hover:text-[#BB2649]'>
                        {movie.name ? movie.name : movie.alternativeName}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface Props {
  params: {
    movieId: string;
  };
}

export default Movie;
