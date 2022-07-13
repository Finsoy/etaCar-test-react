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
    <div className={style.tableWrapper}>
      <table className={style.table} cellPadding={0} cellSpacing={0}>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '35%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Scope (24 hours)</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((cryptocurrency) => (
            <Cryptocurrency cryptocurrency={cryptocurrency} key={uuidv4()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptocurrenciesTable;
