import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../UI/Table';
import { columns } from './columns';

import { selectCoins, fetchCoins } from '../../redux/slices/coinList';
import { AppDispatch } from '../../redux/store';
import { CoinListTable } from '../../utils/interface';

const CoinList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const coinList: CoinListTable[] = useSelector(selectCoins);

  useEffect(() => {
    dispatch(fetchCoins({ currency: 'inr', perPage: 10 }));
  }, []);

  return (
    <section className="flex flex-col mt-16">
      <div className="rounded-md hover:border-slate-300 shadow-2x">
        <input
          className="w-full p-2 rounded-md outline-none bg-slate-200 text-black"
          type="text"
          placeholder="Search coin"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <Table columns={columns} data={coinList} />
      </div>
    </section>
  );
};

export default CoinList;
