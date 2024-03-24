import PaginationButton from './PaginationButton';
import PaginationSpot from './PaginationSpot';

function Pagination() {
  return (
    <ul className="my-12 flex items-center gap-3 self-center">
      <PaginationButton prev disabled />
      <PaginationButton page={1} />
      <PaginationButton page={2} />
      <PaginationButton page={10} active />
      <PaginationButton page={17} />
      <PaginationButton page={19} />
      <PaginationSpot />
      <PaginationButton page={87} />
      <PaginationButton next />
    </ul>
  );
}

export default Pagination;
