import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/typedHooks';
import getCryptocurrencyByIdThunk from '../../redux/thunks/getCryptocurrencyById.thunk';
import { selectCurrencies } from '../../redux/currencies/currenciesSlice';
import CryptoInfo from './CryptoInfo/CryptoInfo';
import Chart from './Chart/Chart';
import getHistoryOfCurrencyThunk from '../../redux/thunks/getHistoryOfCurrency.thunk';

interface DetailPageProps {}

const DetailPage: FC<DetailPageProps> = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { currentCurrency, isLoadingCurrentCurrency, historyData } =
    useAppSelector(selectCurrencies);

  useEffect(() => {
    params.currencyId && dispatch(getCryptocurrencyByIdThunk(params.currencyId));
  }, [dispatch, params.currencyId]);

  useEffect(() => {
    params.currencyId &&
      dispatch(getHistoryOfCurrencyThunk({ id: params.currencyId, interval: 'd1' }));
  }, [dispatch, params.currencyId]);

  return (
    <div>
      {isLoadingCurrentCurrency && <h1>Data is loading...</h1>}
      {!isLoadingCurrentCurrency && <CryptoInfo currentCurrency={currentCurrency} />}
      {!isLoadingCurrentCurrency && <Chart historyData={historyData} />}
    </div>
  );
};

export default DetailPage;
