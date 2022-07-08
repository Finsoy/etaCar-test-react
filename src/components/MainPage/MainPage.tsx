import React, { FC } from 'react';
import useGetAllCurriencies from '../../hooks/useGetAllCurriencies';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { cryptocurrencies, isLoading } = useGetAllCurriencies();
  console.log(cryptocurrencies, isLoading);

  return (
    <>
      {isLoading && <div>Cryptocurrencies loading...</div>}
      {!isLoading &&
        cryptocurrencies.map((cryptocurrency) => (
          <Cryptocurrency cryptocurrency={cryptocurrency} />
        ))}
    </>
  );
};

export default MainPage;
