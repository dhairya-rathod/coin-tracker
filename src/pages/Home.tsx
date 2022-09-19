import { useEffect } from 'react';

import { getMarketCoins } from '../services/coins';

const Home = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await getMarketCoins().catch((err) => {
        console.log('TCL ~ fetchData ~ err', err);
      });
      console.log('TCL ~ fetchData ~ data', data);
    }

    fetchData();
  }, []);

  return <div className="App">Home page</div>;
};

export default Home;
