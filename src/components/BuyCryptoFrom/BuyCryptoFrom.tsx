import React, { FC, useState } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import style from './BuyCryptoFrom.module.scss';
import Button from '../UI/Button/Button';
import { useAppDispatch } from '../../redux/typedHooks';
import { buy } from '../../redux/portfolio/portfolioSlice';

interface BuyCryptoFromProps {
  cryptocurrency: cryptocurrencyType;
  onClose: () => void;
}

const BuyCryptoFrom: FC<BuyCryptoFromProps> = ({ cryptocurrency, onClose }) => {
  const [quantity, setQuantity] = useState<string>('0');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      buy({
        quantity: Number(quantity),
        price: Number(cryptocurrency.priceUsd),
        symbol: cryptocurrency.symbol,
      }),
    );
    onClose();
  };

  return (
    <div className={style.formWrapper}>
      <h3>
        Buy {cryptocurrency.name} ({cryptocurrency.symbol})
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Enter value..."
          value={quantity}
          step="0.01"
          min={'0'}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <br />
        <Button type="submit">Buy</Button>
        <Button onClick={onClose}>Close</Button>
      </form>
    </div>
  );
};

export default BuyCryptoFrom;
