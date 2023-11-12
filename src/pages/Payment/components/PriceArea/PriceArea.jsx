import React, { useEffect, useState } from 'react';
import AddPoints from '../AddPoints/AddPoints';
import Button from '../../../../components/Button/Button';
import './PriceArea.scss';
import DetailsInfo from '../../../../components/DetailsInfo/DetailsInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PriceArea = ({ points, userId, amount }) => {
  const payAmount = Number(amount);
  const userPoints = Number(points);
  const navigate = useNavigate();
  const [addPoints, setAddPoints] = useState('');
  const [isOrder, setIsOrder] = useState(false);
  const PAYMENTLABEL = [
    { id: 1, type: '주문금액', content: payAmount },
    { id: 2, type: '결제방법', content: '포인트사용' },
    { id: 3, type: '보유포인트', content: userPoints },
  ];

  const handlePayment = () => {
    axios
      .post(
        '백엔드결제api주소',
        { amount: amount, points: points },
        {
          headers: {
            // Authorization: `token`,
            'Content-type': `application/json`,
          },
        },
      )
      .then(res => {
        if (res.data.message === 'success') {
          alert('결제 성공!');
          navigate('/mypage');
        }
      });
  };

  useEffect(() => {
    if (payAmount - userPoints > 0) {
      setIsOrder(true);
    }
  }, [payAmount, userPoints]);

  return (
    <div className="priceArea">
      <div className="priceInfo">
        <DetailsInfo detailsLabel={PAYMENTLABEL} />
        {isOrder && <p className="isOrder">포인트가 부족합니다.</p>}
        <div className="addPointsArea">
          <input
            type="number"
            value={addPoints}
            onChange={e => setAddPoints(e.target.value)}
            className="pointsInput"
            placeholder="충전할 포인트를 입력해주세요."
          />
          <AddPoints userId={userId} addPoints={addPoints} />
        </div>
      </div>
      <div className="totalPriceArea">
        <p className="label">총 결제금액</p>
        <span className="priceContent">
          <span className="totalPrice">{amount}</span>원
        </span>
        <Button onClick={handlePayment} disabled={isOrder}>
          결제하기
        </Button>
      </div>
    </div>
  );
};

export default PriceArea;