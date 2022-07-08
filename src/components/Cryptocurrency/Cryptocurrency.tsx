import React, { FC } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  return (
    <tr>
      <td>{cryptocurrency.name}</td>
      <td>{cryptocurrency.priceUsd}</td>
      <td>{cryptocurrency.changePercent24Hr}</td>
    </tr>
  );
};

export default Cryptocurrency;
