import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { fetchCoins, selectCoins } from '../redux/slices/coinList';
import { selectCurrency } from '../redux/slices/currency';

import { CoinListTable } from '../utils/interface';
import { usePagination } from '../component/UI/usePagination';
import { getFormattedCurrency } from '../utils/global.utils';

const useCoinList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);
  const pageSize = 10;
  // const [totalRecords, setTotalRecords] = useState<number>(0);
  // const [coins, setCoins] = useState<[]>([]);

  const coinList: CoinListTable[] = useSelector(selectCoins);
  const currency = useSelector(selectCurrency);

  const filteredData = coinList.filter(
    (coin: any) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tableRows = filteredData
    .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
    .map((row: any) => {
      const price = getFormattedCurrency(currency, row.current_price);
      const marketCap = getFormattedCurrency(currency, row.market_cap);
      return {
        icon: row.image,
        name: { name: row.name, symbol: row.symbol },
        current_price: price,
        market_cap: marketCap,
        price_change_24h: row.price_change_percentage_24h.toFixed(1) + '%'
      };
    });

  const paginationRange = usePagination({
    currentPage: activePage,
    totalCount: filteredData.length,
    pageSize: pageSize,
    siblingCount: 1
  });

  useEffect(() => {
    dispatch(fetchCoins({ currency: currency, perPage: 100 }));
  }, [currency]);

  return {
    searchQuery,
    tableRows,
    activePage,
    paginationRange,
    setSearchQuery,
    setActivePage
  };
};

export default useCoinList;
