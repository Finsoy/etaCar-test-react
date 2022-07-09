import { useState } from 'react';
import { CURRENCIES_PER_PAGE } from '../constants/constants';
import { cryptocurrencyType } from '../types/cryptocurrencyType';

const usePagination = (currencies: cryptocurrencyType[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = Math.ceil(currencies.length / CURRENCIES_PER_PAGE);

  const lastCurrencyIndex = currentPage * CURRENCIES_PER_PAGE;
  const firstCurrencyIndex = lastCurrencyIndex - CURRENCIES_PER_PAGE;
  const currentCurrencies = currencies.slice(firstCurrencyIndex, lastCurrencyIndex);

  const setNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const setPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    currentPage,
    setNextPage,
    setPrevPage,
    currentCurrencies,
    maxPages,
  };
};

export default usePagination;
