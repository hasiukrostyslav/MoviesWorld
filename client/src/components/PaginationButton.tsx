import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface PaginationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

function PaginationButton({ direction, onClick }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute inset-y-2/4 ${direction === 'prev' ? '3xl:left-40 left-20' : '3xl:right-40 right-20'} flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-slate-900 outline-0 ring-blue-500 transition-all duration-500 hover:bg-slate-300 focus-visible:ring-4`}
    >
      {direction === 'prev' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export default PaginationButton;
