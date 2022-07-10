import React, { FC } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import style from './BuyCryptoFrom.module.scss';

interface BuyCryptoFromProps {
  cryptocurrency: cryptocurrencyType;
}

const BuyCryptoFrom: FC<BuyCryptoFromProps> = ({ cryptocurrency }) => {
  return (
    <div className={style.formWrapper}>
      <h3>Buy {cryptocurrency.name}</h3>
    </div>
  );
};

export default BuyCryptoFrom;
