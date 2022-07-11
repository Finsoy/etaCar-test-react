import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from './RemoveCryptoFrom.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';
import { remove, selectPortfolio } from '../../redux/currencies/currenciesSlice';
import Button from '../UI/Button/Button';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';

interface RemoveCryptoFromProps {}

const RemoveCryptoFrom: FC<RemoveCryptoFromProps> = () => {
  const portfolio = useAppSelector(selectPortfolio);
  const dispatch = useAppDispatch();

  const handleRemove = (itemToRemove: portfolioCurrencyType) => {
    dispatch(remove(itemToRemove));
  };

  return (
    <div className={style.wrapper}>
      <h1>Remove crypto from portfolio</h1>
      {!portfolio.length && <p>You don't have any crypto :(</p>}
      {portfolio.length &&
        portfolio.map((item) => (
          <div key={uuidv4()} className={style.itemWrapper}>
            <div>
              <p>{item.symbol}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.purchasedPrice}$</p>
              <br />
            </div>

            <div>
              <Button onClick={() => handleRemove(item)}>Remove crypto</Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RemoveCryptoFrom;
