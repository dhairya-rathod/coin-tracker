import { CoinCardProps } from '../../utils/interface';

const CoinCard = ({ name, symbol, logo, rank }: CoinCardProps) => {
  return (
    <div className="flex flex-col items-center shadow-2xl rounded-lg bg-slate-800 xl:w-[calc(25%-15px)] md:w-[calc(50%-15px)] w-full py-3 cursor-pointer mb-4">
      <img src={logo} width={100} alt={name} />
      <div className="flex px-4 justify-between w-full mt-4">
        <h4 className="font-bold">
          {name}
          <span className="pl-3 font-light text-slate-500">{symbol}</span>
        </h4>
        <span className="font-semibold text-lime-600">#{rank}</span>
      </div>
    </div>
  );
};

export default CoinCard;
