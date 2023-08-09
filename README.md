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
    Веб-сайт кинотека, вдохновленный Кинопоиском
    <br />
    <a href="https://movie-shtxkrxl.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/shtxkrxl/movie/issues">Report Bug</a>
    ·
    <a href="https://github.com/shtxkrxl/movie/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://github.com/shtxkrxl/movie/assets/68380962/98f3667b-84b1-4889-b6ed-c43ea8a49d1c)

Я разработал этот сайт из цели обучиться работать с фреймворком Next. В качестве примера я взял популярный сайт [Кинопоиск](https://hd.kinopoisk.ru/).    

Чему обучился во время разработки:
* Работать с фреймворком Next
* Использовать типизацию TypeScript
* Создовать адаптивный дизайн для сайта
* Взаимодействовать с REST API
* Использовать библеотеку для фетчинга данных - SWR
* Создовать стили при помощи css-фреймворка - Tailwindcss
* Создавать слайдеры при помощи библиотеки - Swiper
* Работать с локальным хранилищем
* Пользоваться хостингом Vercel

### Built With
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![typescript][typescript]][typescript-url]
* [![Tailwindcss][Tailwindcss]][Tailwindcss-url]

<!-- GETTING STARTED -->
## Getting Started

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
## License

Распространяется под лицензией MIT License. Читайте `LICENSE.txt` для большей информации.

<!-- CONTACT -->
## Contact

Alexandr Kalmaev - sanya.kalmaev@yandex.ru

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
