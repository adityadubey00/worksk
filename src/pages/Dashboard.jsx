import React, { useState } from 'react';
import { Tabs } from 'antd';
import withSidebar from '../HOC/withSidebar';
import UserTable from '../components/UserTable';
import Navbar from '../components/Navbar';

const { TabPane } = Tabs;

const Dashboard = () => {
  const [activeStatus, setActiveStatus] = useState('All');

  // Handle tab change to set active status
  const handleTabChange = (key) => {
    setActiveStatus(key);
  };

  const filteredDataSource = (dataSource) => {
    if (activeStatus === 'All') return dataSource;
    return dataSource.filter((item) => item.status === activeStatus);
  };

  const dataSource = [
    {
      key: '1',
      orderID: 'ORD12345',
      name: 'John Brown',
      service: 'Web Development',
      amount: '$1000',
      date: '2024-09-10',
      status: 'Pending',
    },
    {
      key: '2',
      orderID: 'ORD67890',
      name: 'Jim Green',
      service: 'App Development',
      amount: '$1500',
      date: '2024-09-11',
      status: 'Completed',
    },
    {
      key: '3',
      orderID: 'ORD11223',
      name: 'Sam Black',
      service: 'Graphic Design',
      amount: '$500',
      date: '2024-09-12',
      status: 'Rejected',
    },
    {
      key: '4',
      orderID: 'ORD44556',
      name: 'Anna White',
      service: 'SEO Optimization',
      amount: '$1200',
      date: '2024-09-13',
      status: 'Cancelled',
    },
    // Add more data as needed
  ];

  return (
    <div>
      {/* <Navbar/> */}
      <h1>Admin Dashboard</h1>
      <Tabs defaultActiveKey="All" onChange={handleTabChange}>
        <TabPane tab="All" key="All" />
        <TabPane tab="Pending" key="Pending" />
        <TabPane tab="Completed" key="Completed" />
        <TabPane tab="Rejected" key="Rejected" />
        <TabPane tab="Cancelled" key="Cancelled" />
      </Tabs>
      <UserTable dataSource={filteredDataSource(dataSource)} />
    </div>
  );
};

export default withSidebar(Dashboard);
