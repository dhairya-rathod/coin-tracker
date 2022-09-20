/* eslint-disable */
import { useTable } from 'react-table';

const Table = ({ columns, data }: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <table className="w-full" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="border-y border-slate-700 bg-[#181818]"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => {
              return (
                <th
                  className={`py-3 px-2 ${
                    // @ts-ignore
                    column?.textDirection === 'left' ? 'text-left' : 'text-right'
                  }`}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="border-b border-slate-700" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={`py-3 px-2 ${
                      // @ts-ignore
                      cell.column?.textDirection === 'left' ? 'text-left' : 'text-right'
                    }`}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
