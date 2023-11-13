import React from 'react';
import Button from '../../../../components/Button/Button';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboardTitle">대시보드</h3>
      <div className="dashboardArea">
        <ul className="dashboardGroup">
          <li className="dashboardInfo">
            <span className="infoTitle">구매 내역</span>
            <div className="btnArea">
              <Button outline width="100px" height="40px">
                예매 취소
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
