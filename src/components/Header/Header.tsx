import React, { FC, useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';

import style from './Header.module.scss';
import PortfolioValue from './PortfolioValue/PortfolioValue';
import { refreshPortfolioValue, selectPortfolio } from '../../redux/portfolio/portfolioSlice';
import { selectCurrencies } from '../../redux/currencies/currenciesSlice';

const Header: FC = () => {
  const { cryptocurrencies } = useAppSelector(selectCurrencies);
  const { portfolioValue, purchasedPortfolioValue, portfolio } = useAppSelector(selectPortfolio);

  const dispatch = useAppDispatch();

  const newPortfolioValue = useMemo(
    () =>
      portfolio.reduce((prev, current) => {
        const element = cryptocurrencies.find((item) => item.symbol === current.symbol);
        if (element) {
          return prev + current.quantity * +element.priceUsd;
        }
        return prev;
      }, 0),
    [portfolio, cryptocurrencies],
  );

  const differenceBetweenPortfolio = +(purchasedPortfolioValue - portfolioValue).toFixed(3);
  const percentChangePortfolio = +(
    (differenceBetweenPortfolio * 100) / portfolioValue || 0
  ).toFixed(3);

  useEffect(() => {
    dispatch(refreshPortfolioValue(newPortfolioValue));
  }, [newPortfolioValue, dispatch]);

  if (!cryptocurrencies.length) {
    return <div>Data is loading...</div>;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.currencyWrapper}>
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
          portfolioValue={parseFloat(portfolioValue.toFixed(3))}
          differenceBetweenPortfolio={differenceBetweenPortfolio}
          percentChangePortfolio={percentChangePortfolio}
        />
      </div>
    </div>
  );
};

export default Header;
