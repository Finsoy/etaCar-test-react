import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';
import { portfolioCurrencyType } from '../../types/portfolioCurrencyType';
import PortfolioItem from './PortfolioItem';
import { remove, selectPortfolio } from '../../redux/portfolio/portfolioSlice';

import style from './RemoveCryptoFrom.module.scss';

interface RemoveCryptoFromProps {}

const RemoveCryptoFrom: FC<RemoveCryptoFromProps> = () => {
  const { portfolio } = useAppSelector(selectPortfolio);
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
          <PortfolioItem key={uuidv4()} item={item} handleRemove={handleRemove} />
        ))}
    </div>
  );
};

export default RemoveCryptoFrom;
