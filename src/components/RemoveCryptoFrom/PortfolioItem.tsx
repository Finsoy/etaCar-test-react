import React from 'react';
import style from './RemoveCryptoFrom.module.scss';
import Button from '../UI/Button/Button';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';

interface PortfolioItemProps {
  item: portfolioCurrencyType;
  handleRemove: (item: portfolioCurrencyType) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, handleRemove }) => {
  return (
    <div className={style.itemWrapper}>
      <div>
        <p>{item.symbol}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {parseFloat(item.purchasedPrice.toFixed(3))}$</p>
        <br />
      </div>

      <div>
        <Button onClick={() => handleRemove(item)}>Remove crypto</Button>
      </div>
    </div>
  );
};

export default PortfolioItem;
