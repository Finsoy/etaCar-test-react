import React, { FC, useState } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import style from './Cryptocurrency.module.scss';
import Button from '../UI/Button/Button';
import Modal from '../Modal/Modal';
import BuyCryptoFrom from '../BuyCryptoFrom/BuyCryptoFrom';

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <tr>
      <td className={style.cell}>{cryptocurrency.name}</td>
      <td className={style.cell}>${cryptocurrency.priceUsd}</td>
      <td className={style.cell}>{Number(cryptocurrency.changePercent24Hr).toFixed(2)}%</td>
      <td className={style.cell}>{Number(cryptocurrency.volumeUsd24Hr).toFixed(3)}</td>
      <Button onClick={() => setActiveModal(true)}>Buy crypto</Button>
      <Modal active={activeModal} setActive={setActiveModal}>
        <BuyCryptoFrom cryptocurrency={cryptocurrency} />
      </Modal>
    </tr>
  );
};

export default Cryptocurrency;
