import { HalfCircleSpinner } from "react-epic-spinners";

const Spinner = () => {
  return (
    <div className='flex h-[200px] w-full items-center justify-center'>
      <HalfCircleSpinner size={60} color='#BB2649' />
    </div>
  );
};

export default Spinner;
