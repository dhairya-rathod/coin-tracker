import CoinList from '../component/home/CoinList';
import TrendingCoins from '../component/home/TrendingCoins';

const Home = () => {
  return (
    <div className="home">
      <TrendingCoins />
      <CoinList />
    </div>
  );
};

export default Home;
