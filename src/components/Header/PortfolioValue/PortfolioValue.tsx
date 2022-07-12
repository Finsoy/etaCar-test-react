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
      <p onClick={() => setIsModalActive(true)} className={style.portfolioHeader}>
        {portfolioValue} USD Change: {differenceBetweenPortfolio}$ ({percentChangePortfolio}%)
      </p>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <RemoveCryptoFrom />
      </Modal>
    </>
  );
};

export default PortfolioValue;
