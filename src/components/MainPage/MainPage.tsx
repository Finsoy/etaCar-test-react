import React, { FC, useEffect } from 'react';
import CryptocurrenciesTable from '../CryptocurrenciesTable/CryptocurrenciesTable';

import usePagination from '../../hooks/usePagination';
import Button from '../UI/Button/Button';

import style from './MainPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';
import { selectCurrencies } from '../../redux/currencies/currenciesSlice';
import getAllCryptocurrenciesThunk from '../../redux/thunks/getAllCryptocurrencies.thunk';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { cryptocurrencies, isLoadingCryptocurrencies } = useAppSelector(selectCurrencies);
  const { currentPage, maxPages, setNextPage, setPrevPage, currentCurrencies } =
    usePagination(cryptocurrencies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCryptocurrenciesThunk());
  }, [dispatch]);

  return (
    <div className={style.tableWrapper}>
      {isLoadingCryptocurrencies && <div>Cryptocurrencies loading...</div>}
      {!isLoadingCryptocurrencies && (
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
