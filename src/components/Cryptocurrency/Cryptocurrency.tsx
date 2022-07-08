import React, { FC } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  return (
    <div>
      <p>Name: {cryptocurrency.name}</p>
      <p>Price: {cryptocurrency.priceUsd}</p>
      <p>Change percent for 24 hours: {cryptocurrency.changePercent24Hr}</p>
    </div>
  );
};

export default Cryptocurrency;
