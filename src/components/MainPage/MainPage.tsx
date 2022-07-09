import React, { FC } from 'react';
import CryptocurrenciesTable from '../CryptocurrenciesTable/CryptocurrenciesTable';
import useGetAllCryptocurriencies from '../../hooks/useGetAllCryptocurriencies';

import style from './MainPage.module.scss';
import usePagination from '../../hooks/usePagination';
import Button from '../UI/Button/Button';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { cryptocurrencies, isLoading } = useGetAllCryptocurriencies();
  const { currentPage, maxPages, setNextPage, setPrevPage, currentCurrencies } =
    usePagination(cryptocurrencies);
  console.log(currentPage);
  console.log(currentCurrencies);

  return (
    <div className={style.tableWrapper}>
      {isLoading && <div>Cryptocurrencies loading...</div>}
      {!isLoading && (
        <>
          <CryptocurrenciesTable cryptocurrencies={currentCurrencies} />
          <div>
            <Button disabled={currentPage <= 1} onClick={setPrevPage}>
              {'Prev page'}
            </Button>
            <Button disabled={currentPage >= maxPages} onClick={setNextPage}>
              {'Next page'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
