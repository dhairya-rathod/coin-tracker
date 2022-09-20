const currencyArr = [
  { name: 'INR', value: 'inr' },
  { name: 'USD', value: 'usd' }
];

interface CurrencyBoxProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const CurrencyBox = ({ handleChange, value = 'inr' }: CurrencyBoxProps) => {
  return (
    <select
      className="p-2 rounded bg-transparent outline outline-slate-400"
      id="currency-box"
      onChange={handleChange}
      value={value}
    >
      {currencyArr.map((cur) => (
        <option key={cur.value} className="bg-slate-700 text-slate-300" value={cur.value}>
          {cur.name}
        </option>
      ))}
    </select>
  );
};

export default CurrencyBox;
