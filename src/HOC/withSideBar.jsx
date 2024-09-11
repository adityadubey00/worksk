import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Ant Design styles
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

const { Sider, Content } = Layout;

const withSidebar = (WrappedComponent) => {
  return (props) => (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
         Home
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            Api
          </Menu.Item>
          {/* Add more menu items as needed */}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Navbar/>
          <WrappedComponent {...props} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default withSidebar;
