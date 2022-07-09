import React, { FC } from 'react';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';
import { v4 as uuidv4 } from 'uuid';

import style from './CryptocurrenciesTable.module.scss';

interface CryptocurrenciesTableProps {
  cryptocurrencies: cryptocurrencyType[];
}

const CryptocurrenciesTable: FC<CryptocurrenciesTableProps> = ({ cryptocurrencies }) => {
  return (
    <table className={style.table} cellPadding={0} cellSpacing={0}>
      <colgroup>
        <col style={{ width: '20%' }} />
        <col style={{ width: '35%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '20%' }} />
      </colgroup>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>Scope (24 hours)</th>
      </tr>
      {cryptocurrencies.map((cryptocurrency) => (
        <Cryptocurrency cryptocurrency={cryptocurrency} key={uuidv4()} />
      ))}
    </table>
  );
};

export default CryptocurrenciesTable;
