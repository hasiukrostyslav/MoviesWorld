import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface PaginationButtonProps {
  page?: number;
  disabled?: boolean;
  prev?: boolean;
  next?: boolean;
  active?: boolean;
}

function PaginationButton({
  page,
  prev,
  next,
  active,
  disabled,
}: PaginationButtonProps) {
  const styles = {
    active:
      'bg-slate-150 hover:bg-slate-300 dark:border-slate-500 dark:bg-slate-500 dark:hover:border-slate-400 dark:hover:bg-slate-400 border-slate-400',
    disabled:
      'border-slate-300 dark:border-slate-700 text-slate-300 dark:text-slate-700',
    regular:
      'dark:border-slate-700 dark:bg-slate-700 hover:bg-slate-200 border-slate-400 hover:dark:border-slate-600 hover:dark:bg-slate-600',
  };

  return (
    <li>
      <button
        disabled={disabled}
        className={`flex h-10 w-10 items-center justify-center rounded-md border  outline-0 ring-blue-400 transition-all duration-500 focus-visible:ring-4  ${disabled ? styles.disabled : active ? styles.active : styles.regular}`}
      >
        {prev ? <IoIosArrowBack /> : next ? <IoIosArrowForward /> : page}
      </button>
    </li>
  );
}

export default PaginationButton;
