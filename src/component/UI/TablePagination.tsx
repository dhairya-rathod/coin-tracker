interface TablePaginationProps {
  paginationRage: (string | number)[] | undefined;
  activePage: number;
  setPage: (page: number) => void;
}

function TablePagination({ paginationRage, activePage, setPage }: TablePaginationProps) {
  return (
    <ul className="p-1 text-center mt-2">
      {paginationRage &&
        paginationRage.map((page, index) => (
          <li
            key={index}
            className={`pagination-button ${activePage === page ? 'active' : ''}`}
            onClick={() => setPage(page)}
          >
            {page}
          </li>
        ))}
    </ul>
  );
}

export default TablePagination;
