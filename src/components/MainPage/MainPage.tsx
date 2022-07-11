import React, { FC, useEffect } from 'react';
import CryptocurrenciesTable from '../CryptocurrenciesTable/CryptocurrenciesTable';
import useGetAllCryptocurriencies from '../../hooks/useGetAllCryptocurriencies';

import usePagination from '../../hooks/usePagination';
import Button from '../UI/Button/Button';

import style from './MainPage.module.scss';
import { useAppDispatch } from '../../redux/typedHooks';
import { setCryptocurrencies } from '../../redux/currencies/currenciesSlice';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  console.log('MAIN PAGE');
  const { cryptocurrencies, isLoading } = useGetAllCryptocurriencies();
  const { currentPage, maxPages, setNextPage, setPrevPage, currentCurrencies } =
    usePagination(cryptocurrencies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && cryptocurrencies.length > 0) {
      dispatch(setCryptocurrencies(cryptocurrencies));
    }
  }, [cryptocurrencies]);

  return (
    <div className={style.tableWrapper}>
      {isLoading && <div>Cryptocurrencies loading...</div>}
      {!isLoading && (
        <>
          <CryptocurrenciesTable cryptocurrencies={currentCurrencies} />
          <div>
            <Button disabled={currentPage <= 1} onClick={setPrevPage}>
              Prev page
            </Button>
            <Button disabled={currentPage >= maxPages} onClick={setNextPage}>
              Next page
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
