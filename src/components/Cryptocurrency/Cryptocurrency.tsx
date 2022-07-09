import React, { FC } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import style from './Cryptocurrency.module.scss'

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  return (
    <tr>
      <td className={style.cell}>{cryptocurrency.name}</td>
      <td className={style.cell}>{Number(cryptocurrency.priceUsd).toFixed(4)}</td>
      <td className={style.cell}>{Number(cryptocurrency.changePercent24Hr).toFixed(2)}%</td>
    </tr>
  );
};

export default Cryptocurrency;
