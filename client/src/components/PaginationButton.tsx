import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface PaginationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

function PaginationButton({ direction, onClick }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute inset-y-2/4 ${direction === 'prev' ? 'left-40' : 'right-40'} flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-slate-900`}
    >
      {direction === 'prev' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export default PaginationButton;
