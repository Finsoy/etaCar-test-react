import React, { FC } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import style from './Cryptocurrency.module.scss';
import Button from '../UI/Button/Button';

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  return (
    <tr>
      <td className={style.cell}>{cryptocurrency.name}</td>
      <td className={style.cell}>${cryptocurrency.priceUsd}</td>
      <td className={style.cell}>{Number(cryptocurrency.changePercent24Hr).toFixed(2)}%</td>
      <td className={style.cell}>{Number(cryptocurrency.volumeUsd24Hr).toFixed(3)}</td>
      <Button>Buy crypto</Button>
    </tr>
  );
};

export default Cryptocurrency;
