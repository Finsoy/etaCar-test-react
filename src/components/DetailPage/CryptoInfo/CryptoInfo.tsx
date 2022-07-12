import React, { useState } from 'react';
import { cryptocurrencyType } from '../../../types/cryptocurrencyType';
import { refactorStrongWithFixed } from '../../../Utils/refactorStrongWithFixed';

import BuyCryptoFrom from '../../BuyCryptoFrom/BuyCryptoFrom';
import Modal from '../../Modal/Modal';
import Button from '../../UI/Button/Button';

import style from './CryptoInfo.module.scss';

interface CryptoInfoProps {
  currentCurrency: cryptocurrencyType;
}

const CryptoInfo: React.FC<CryptoInfoProps> = ({ currentCurrency }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div>
      {currentCurrency.name && currentCurrency.symbol && currentCurrency.priceUsd && (
        <div className={style.titleWrapper}>
          <h1 className={style.title}>
            {currentCurrency.name} ({currentCurrency.symbol}){' '}
            {refactorStrongWithFixed(currentCurrency.priceUsd, 3)} USD
          </h1>
          <Button className={style.buyButton} onClick={() => setActiveModal(true)}>
            Buy
          </Button>
        </div>
      )}
      {currentCurrency.changePercent24Hr && (
        <p className={style.description}>
          The direction and value change in the last 24 hours:{' '}
          {refactorStrongWithFixed(currentCurrency.changePercent24Hr, 3)}%
        </p>
      )}
      {currentCurrency.vwap24Hr && (
        <p className={style.description}>
          Volume Weighted Average Price in the last 24 hours:{' '}
          {refactorStrongWithFixed(currentCurrency.vwap24Hr, 3)} USD
        </p>
      )}
      {currentCurrency.supply && (
        <p className={style.description}>
          Available supply for trading: {refactorStrongWithFixed(currentCurrency.supply, 3)}{' '}
          {currentCurrency.symbol}
        </p>
      )}
      {currentCurrency.maxSupply && (
        <p className={style.description}>
          Total quantity of asset issued: {refactorStrongWithFixed(currentCurrency.maxSupply, 3)}{' '}
          {currentCurrency.symbol}
        </p>
      )}
      <Modal active={activeModal} setActive={setActiveModal}>
        <BuyCryptoFrom cryptocurrency={currentCurrency} onClose={() => setActiveModal(false)} />
      </Modal>
    </div>
  );
};

export default CryptoInfo;
