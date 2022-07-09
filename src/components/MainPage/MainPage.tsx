import React, { FC } from 'react';
import CryptocurrenciesTable from '../CryptocurrenciesTable/CryptocurrenciesTable';
import useGetAllCryptocurriencies from '../../hooks/useGetAllCryptocurriencies';

import style from './MainPage.module.scss'

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { cryptocurrencies, isLoading } = useGetAllCryptocurriencies();
  console.log(cryptocurrencies, isLoading);

  return (
    <div className={style.tableWrapper}>
      {isLoading && <div>Cryptocurrencies loading...</div>}
      {!isLoading && <CryptocurrenciesTable cryptocurrencies={cryptocurrencies} />}
    </div>
  );
};

export default MainPage;
