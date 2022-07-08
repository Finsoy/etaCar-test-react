import React, { FC } from 'react';

import style from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={style.mainLayout}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
