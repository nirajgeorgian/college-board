import { Layout, Row, Col, Affix } from "antd";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import College from "./College";
import Header from "./Common/Header";

const { Sider, Content } = Layout;

const StyledSider = styled(Sider)`
  width: 100%;
  max-widht: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
`;

const Pages = () => {
  return (
    <Row>
      <Col span={4}>
        <Affix offsetTop={0}>
          <Layout>
            <Header />
          </Layout>
        </Affix>
      </Col>
      <Col span={20}>
        <Layout>
          <Content style={{ padding: "1rem" }}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/college/:id" exact component={College} />
            </Switch>
          </Content>
        </Layout>
      </Col>
    </Row>
  );
};

export default Pages;
