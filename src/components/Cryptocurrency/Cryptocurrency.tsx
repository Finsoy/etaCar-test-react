import React, { FC, useState } from 'react';
import { cryptocurrencyType } from '../../types/cryptocurrencyType';

import Modal from '../Modal/Modal';
import BuyCryptoFrom from '../BuyCryptoFrom/BuyCryptoFrom';

import style from './Cryptocurrency.module.scss';
import { useNavigate } from 'react-router-dom';

interface CryptocurrencyProps {
  cryptocurrency: cryptocurrencyType;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(cryptocurrency.id)}>
      <td className={style.cell}>{cryptocurrency.name}</td>
      <td className={style.cell}>${cryptocurrency.priceUsd}</td>
      <td className={style.cell}>{Number(cryptocurrency.changePercent24Hr).toFixed(2)}%</td>
      <td className={style.cell}>{Number(cryptocurrency.volumeUsd24Hr).toFixed(3)}</td>
      <td>
        <div
          className={style.buyCryptoButton}
          onClick={(e) => {
            e.stopPropagation();
            setActiveModal(true);
          }}
        >
          Buy
        </div>
      </td>
      <Modal active={activeModal} setActive={setActiveModal}>
        <BuyCryptoFrom cryptocurrency={cryptocurrency} onClose={() => setActiveModal(false)} />
      </Modal>
    </tr>
  );
};

export default Cryptocurrency;
