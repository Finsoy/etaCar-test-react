import React, { FC, useState } from 'react';
import Modal from '../../Modal/Modal';
import RemoveCryptoFrom from '../../RemoveCryptoFrom/RemoveCryptoFrom';

import style from './PortfolioValue.module.scss';

interface PortfolioValueProps {
  portfolioValue: number;
  differenceBetweenPortfolio: number;
  percentChangePortfolio: number;
}

const PortfolioValue: FC<PortfolioValueProps> = ({
  portfolioValue,
  differenceBetweenPortfolio,
  percentChangePortfolio,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      <div onClick={() => setIsModalActive(true)} className={style.portfolioHeader}>
        <p>{portfolioValue} USD</p>
        <p>Change: {differenceBetweenPortfolio}$</p>
        <p>({percentChangePortfolio}%)</p>
      </div>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <RemoveCryptoFrom />
      </Modal>
    </>
  );
};

export default PortfolioValue;
