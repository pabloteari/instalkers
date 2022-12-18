import React from "react";
import logo from '../../assets/logo/logo.png'
import InputInst from '../../components/InputInst';

import { Layout, Image } from 'antd';
const { Header, Footer, Content } = Layout;


const Home = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <InputInst />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
};

export default Home
