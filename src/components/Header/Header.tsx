import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';
import {
  refreshPortfolioValue,
  selectCryptocurrencies,
  selectPortfolio,
  selectPortfolioValue,
  selectPurchasedPortfolioValue,
} from '../../redux/currencies/currenciesSlice';

import style from './Header.module.scss';
import PortfolioValue from './PortfolioValue/PortfolioValue';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  console.log('Header');
  const cryptocurrencies = useAppSelector(selectCryptocurrencies);
  const portfolio = useAppSelector(selectPortfolio);
  const portfolioValue = Number(useAppSelector(selectPortfolioValue).toFixed(3));
  const purchasedPortfolioValue = Number(useAppSelector(selectPurchasedPortfolioValue).toFixed(3));

  const dispatch = useAppDispatch();

  const newPortfolioValue = portfolio.reduce((prev, current) => {
    const element = cryptocurrencies.find((item) => item.symbol === current.symbol);
    if (element) {
      return prev + current.quantity * +element.priceUsd;
    }
    return prev;
  }, 0);

  const differenceBetweenPortfolio = +(purchasedPortfolioValue - portfolioValue).toFixed(3);
  const percentChangePortfolio = +(
    (differenceBetweenPortfolio * 100) / portfolioValue || 0
  ).toFixed(3);

  useEffect(() => {
    dispatch(refreshPortfolioValue(newPortfolioValue));
  }, [newPortfolioValue]);

  if (!cryptocurrencies.length) {
    return <div>Data is loading...</div>;
  }

  return (
    <div className={style.wrapper}>
      <div>
        {cryptocurrencies
          .map((currency) => (
            <span key={currency.symbol} className={style.currency}>
              {currency.symbol} {Number(currency.priceUsd).toFixed(2)}$
            </span>
          ))
          .slice(0, 3)}
      </div>
      <div>
        <PortfolioValue
          portfolioValue={portfolioValue}
          differenceBetweenPortfolio={differenceBetweenPortfolio}
          percentChangePortfolio={percentChangePortfolio}
        />
      </div>
    </div>
  );
};

export default Header;
