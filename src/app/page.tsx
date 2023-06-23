import Slider from './components/Slider';

export default function Home() {
  return (
    <div className='flex flex-col gap-[30px] pt-[20px]'>
      <Slider
        name={'Популярно'}
        size={'lg'}
        query='page=1&limit=10&poster.previewUrl=!null&year=2023'
      />
      <Slider
        name={'Комедия'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=комедия'
      />
      <Slider
        name={'Драма'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=драма'
      />
      <Slider
        name={'Триллер'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=триллер'
      />
      <Slider
        name={'Ужасы'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=ужасы'
      />
      <Slider
        name={'Боевик'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=боевик'
      />
      <Slider
        name={'Аниме'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=аниме'
      />
      <Slider
        name={'Детский'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=детский'
      />
      <Slider
        name={'Семейный'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=семейный'
      />
      <Slider
        name={'Фантастика'}
        size={'sm'}
        query='page=1&limit=15&year=2023&poster.previewUrl=!null&genres.name=фантастика'
      />
    </div>
  );
}
