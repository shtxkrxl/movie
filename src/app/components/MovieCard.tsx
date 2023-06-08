import Image from 'next/image';
import { Movie } from '../models/models';

const MovieCard = ({ size, movie }: Props) => {
  return (
    <div
      className={`${
        size === 'lg' ? 'h-[386px] w-[269px]' : 'h-[274px] w-[191px]'
      } relative cursor-pointer transition-all hover:scale-[1.1] hover:shadow-[0_0_11px_20px_rgba(0,0,0,0.25)]`}>
      <Image
        src={movie.poster.previewUrl}
        alt='Movie poster'
        width={269}
        height={386}
        className='pointer-events-none h-full w-full'
      />

      {movie.rating.kp > 0 && (
        <div
          className={`${
            size === 'lg'
              ? 'text-[20px] leading-[28px]'
              : 'text-[16px] leading-[24px]'
          } ${
            movie.rating.kp > 6
              ? 'bg-[#00B631]'
              : movie.rating.kp > 4
              ? 'bg-[#DEA000]'
              : 'bg-[#CA0000]'
          } absolute left-[8px] top-[8px] px-[6px]  font-semibold`}>
          {Math.round(movie.rating.kp * 10) / 10}
        </div>
      )}
    </div>
  );
};

interface Props {
  size: 'sm' | 'lg';
  movie: Movie;
}

export default MovieCard;
