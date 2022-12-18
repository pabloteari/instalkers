
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Home from './pages/Home'
import logo from './assets/logo/logo_without_background.png'

import {
  Layout,
  Menu,
  theme,
  ConfigProvider,
  Image
} from 'antd';
const { Header, Content, Sider } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff766c',
        },
      }}
    >
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Image src={logo} width={"150px"} style={{ margin: 20 }} preview={false} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Home />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>

  );
};

ReactDOM.render(<App />, document.getElementById("app"));
