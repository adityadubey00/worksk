import React from 'react';
import { Table, Tag } from 'antd';

const UserTable = ({ dataSource }) => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderID',
      key: 'orderID',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color;
        switch (status) {
          case 'Pending':
            color = 'gold';
            break;
          case 'Completed':
            color = 'green';
            break;
          case 'Rejected':
            color = 'red';
            break;
          case 'Cancelled':
            color = 'volcano';
            break;
          default:
            color = 'gray';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default UserTable;
