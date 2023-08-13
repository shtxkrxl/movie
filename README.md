<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shtxkrxl/movie">
    <img src="src/app/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie</h3>

  <p align="center">
    Веб-сайт с огромной коллекцией фильмов, сериалов и мультфильмов различных жанров и времен создания
    <br />
    <a href="https://movie-shtxkrxl.vercel.app/">Сайт</a>
    ·
    <a href="https://github.com/shtxkrxl/movie/issues">Сообщить об ошибке</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
    </li>
    <li>
      <a href="#запуск-локально">Запуск локально</a>
    </li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## О проекте

![image](https://github.com/shtxkrxl/movie/assets/68380962/98f3667b-84b1-4889-b6ed-c43ea8a49d1c)

Проект сайта кинотеки, представляет собой платформу, где пользователи могут искать информацию о фильмах, сериалах, актерах и других студийных работниках.  

Основной функционал проекта включает в себя:
* Поиск фильмов и сериалов: Пользователи могут вводить название фильма или сериала в форму поиска, и система будет отображать результаты, относящиеся к их запросу
* Информация об актерах и команде фильма: Веб-сайт содержит информацию об актерах и режиссерах
* Рейтинги и отзывы: Пользователь может посмотреть на средний рейтинг пользователей с сайта [Кинопоиск](https://www.kinopoisk.ru/)
* Список избранного: Пользователь может добавлять фильмы и сериалы в свой список избранного
* Разделение фильмов по жанрам: Фильмы и сериалы классифицируются по жанрам
* Подробная информация о фильмах: Каждый фильм имеет свою отдельную страницу с дополнительной информацией, включая описание, бюджет, сборы, трейлер, оценки и актерский состав.

Моя цель разработки проекта состоит в том, чтобы научиться использовать фреймворк Next, а также взаимодействовать с REST API. Для проекта был использован api сайта https://kinopoisk.dev/

Во время разработки:
* Использовал фреймворк [Next](https://nextjs.org/)
* Использовал типизацию [TypeScript](https://www.typescriptlang.org/)
* Писал стили с помощью css-фреймворка - [Tailwindcss](https://tailwindcss.com/)
* Взаимодействовал с REST API сайта https://kinopoisk.dev/
* Использовал библиотеку для фетчинга данных - [SWR](https://swr.vercel.app/ru)
* Создавал слайдеры при помощи библиотеки - [Swiper](https://swiperjs.com/)
* Разработал поиск по фильмам и сериалам
* Работал с локальным хранилищем
* Использовал хостинг [Vercel](https://vercel.com)

<!-- GETTING STARTED -->
## Запуск локально

Если вы хотите запустить проект локально, следуйте следующим инструкциям.

1. Склонируйте репозиторий
   ```sh
   git clone https://github.com/shtxkrxl/movie.git
   ```
2. Установите NPM пакеты
   ```sh
   npm install
   ```
3. Получите бесплатный ключ на https://kinopoisk.dev/
4. Введите свой ключ в `.env.local`
   ```sh
   NEXT_PUBLIC_API_KEY=YOUR_API
   ```
5. Запустите сервер для разработки
   ```sh
   npm run dev
   ```
6. Откройте [http://localhost:3000](http://localhost:3000) в своём браузере чтобы увидеть результат

<!-- LICENSE -->
## Лицензия

Распространяется под лицензией MIT License. Читайте `LICENSE.txt` для большей информации.

<!-- CONTACT -->
## Контакты

Александр Кальмаев - <a href="mailto:shtxkrxl@ya.ru" target="_blank">shtxkrxl@ya.ru</a>

Ссылка на проект: [https://github.com/shtxkrxl/movie](https://github.com/shtxkrxl/movie)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[commits-shield]: https://img.shields.io/github/commit-activity/t/shtxkrxl/movie.svg?style=for-the-badge
[commits-url]: https://github.com/shtxkrxl/movie/graphs/commit-activity
[issues-shield]: https://img.shields.io/github/issues/shtxkrxl/movie.svg?style=for-the-badge
[issues-url]: https://github.com/shtxkrxl/movie/issues
[license-shield]: https://img.shields.io/github/license/shtxkrxl/movie.svg?style=for-the-badge
[license-url]: https://github.com/shtxkrxl/movie/blob/master/LICENSE.txt
[Next.js]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[Tailwindcss-url]: https://tailwindcss.com/
[typescript]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[typescript-url]: https://www.typescriptlang.org/
