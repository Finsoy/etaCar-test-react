import React, { FC } from 'react';
import CryptocurrenciesTable from '../CryptocurrenciesTable/CryptocurrenciesTable';
import useGetAllCryptocurriencies from '../../hooks/useGetAllCryptocurriencies';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { cryptocurrencies, isLoading } = useGetAllCryptocurriencies();
  console.log(cryptocurrencies, isLoading);

  return (
    <>
      {isLoading && <div>Cryptocurrencies loading...</div>}
      {!isLoading && <CryptocurrenciesTable cryptocurrencies={cryptocurrencies} />}
    </>
  );
};

export default MainPage;
