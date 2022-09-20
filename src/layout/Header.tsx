import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CurrencyBox from '../component/UI/CurrencyBox';
import { selectCurrency, setCurrency } from '../redux/slices/currency';

const Header = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setCurrency(value));
  };

  return (
    <header className="px-20 flex py-3 justify-between items-center w-full shadow bg-[#17171a]">
      <h3 className="text-4xl font-bold">
        <Link to="/">Coin Tracker</Link>
      </h3>
      <div>
        <CurrencyBox handleChange={handleChange} value={currency} />
      </div>
    </header>
  );
};

export default Header;
