import Table from '../UI/Table';
import TablePagination from '../UI/TablePagination';
import { columns } from './columns';

import useCoinList from '../../hooks/useCoinList';

const CoinList = () => {
  const { searchQuery, tableRows, activePage, paginationRange, setSearchQuery, setActivePage } =
    useCoinList();

  return (
    <section className="flex flex-col mt-8">
      <h3 className="text-2xl mb-6 font-semibold">Cryptocurrency Prices by Market Cap</h3>
      <div className="rounded-md hover:border-slate-300 shadow-2x">
        <input
          className="w-full p-2 rounded-md outline-none bg-slate-200 text-black"
          type="text"
          placeholder="Search for cryptocurrency"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <Table columns={columns} data={tableRows} />
        <TablePagination
          paginationRage={paginationRange}
          activePage={activePage}
          setPage={setActivePage}
        />
      </div>
    </section>
  );
};

export default CoinList;
