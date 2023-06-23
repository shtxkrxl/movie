import { Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mx-auto mb-[20px] mt-[70px] flex w-full flex-col items-center px-[20px] text-[19px] md:flex-row md:justify-between lg:px-[130px]'>
      <div>© Alexandr Kalmaev</div>
      <Link
        href={'https://github.com/shtxkrxl/movie'}
        target='_blank'
        className='flex cursor-pointer items-center'>
        <Github className='h-[25px] w-[25px] stroke-white' />
        GitHub
      </Link>
    </footer>
  );
};

export default Footer;
