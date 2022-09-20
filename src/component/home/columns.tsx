export const columns = [
  {
    Header: 'Image',
    accessor: 'icon',
    textDirection: 'left',
    Cell: ({ cell: { value } }: { cell: { value: string } }) => (
      <img src={value} alt="Coin image" className="w-8" />
    )
  },
  {
    Header: 'Name',
    accessor: 'name',
    textDirection: 'left',
    Cell: ({ cell: { value } }: { cell: { value: { name: string; symbol: string } } }) => (
      <span className="font-semibold text-lg">
        {value.name}
        <span className="pl-3 text-sm text-slate-400 uppercase font-normal">{value.symbol}</span>
      </span>
    )
  },
  { Header: 'Price', accessor: 'current_price' },
  { Header: 'Market Cap', accessor: 'market_cap' },
  { Header: '24h %', accessor: 'price_change_24h' }
];
