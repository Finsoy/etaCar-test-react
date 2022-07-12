import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface DetailPageProps {}

const DetailPage: FC<DetailPageProps> = () => {
  const params = useParams();
  console.log(params);

  return <div>DetailPage!</div>;
};

export default DetailPage;
