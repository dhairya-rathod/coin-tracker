import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoinCard from './CoinCard';

import { AppDispatch } from '../../redux/store';
import { fetchTrending, selectTrendingCoins } from '../../redux/slices/trendingCoins';

import { TrendingCoin } from '../../utils/interface';

const TrendingCoins = () => {
  const dispatch = useDispatch<AppDispatch>();
  const trendingCoins = useSelector(selectTrendingCoins);

  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  return (
    <section>
      <h3 className="text-2xl mb-4 font-semibold">Trending coins 🔥</h3>

      <div className="flex flex-wrap justify-between">
        {trendingCoins.map((coin: TrendingCoin) => (
          <CoinCard
            key={coin.item.coin_id}
            logo={coin.item.large}
            name={coin.item.name}
            symbol={coin.item.symbol}
            rank={coin.item.market_cap_rank}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingCoins;
