import React, { FC } from 'react';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

interface CryptocurrenciesTableProps {
  cryptocurrencies: cryptocurrencyType[];
}

const CryptocurrenciesTable: FC<CryptocurrenciesTableProps> = ({ cryptocurrencies }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Change percent for 24 hours</th>
      </tr>
      {cryptocurrencies.map((cryptocurrency) => (
        <Cryptocurrency cryptocurrency={cryptocurrency} />
      ))}
    </table>
  );
};

export default CryptocurrenciesTable;
