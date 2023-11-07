import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./layout.css";
import { Layout, Menu, Button, theme, Flex } from "antd";
import { Logo } from "../assets/svg/Icons";
const { Header, Sider, Content, Text } = Layout;
const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const updateChartWidth = () => {
  //       if (window.innerWidth < 576) {
  //         setLineChartWidth(350);
  //         setPieChartWidth(350);
  //         setPieChartHeight(220);
  //         setLineChartHeight(250);
  //       } else if (window.innerWidth < 768) {
  //         setLineChartWidth(500);
  //         setPieChartWidth(500);
  //         setPieChartHeight(200);
  //         setLineChartHeight(320);
  //       } else if (window.innerWidth < 992) {
  //         setLineChartWidth(370);
  //         setPieChartWidth(430);
  //         setPieChartHeight(225);
  //         setLineChartHeight(320);
  //       } else if (window.innerWidth < 1200) {
  //         setLineChartWidth(460);
  //         setPieChartWidth(460);
  //         setPieChartHeight(220);
  //         setLineChartHeight(320);
  //       } else if (window.innerWidth < 1400) {
  //         setLineChartWidth(550);
  //         setPieChartWidth(550);
  //         setPieChartHeight(230);
  //         setLineChartHeight(320);
  //       }
  //     };

  //     updateChartWidth();
  //     window.addEventListener("resize", updateChartWidth);

  //     return () => {
  //       window.removeEventListener("resize", updateChartWidth);
  //     };
  //   }, []);

  useState(() => {
    if (window.innerWidth > 600) {
      console.log(false);
      setCollapsed(false);
    } else {
      setCollapsed(true);
      console.log(true);
    }
  }, [window.innerWidth]);

  //   console.log(currentWidth);

  return (
    <Layout style={{ backgroundColor: "red" }}>
      <Sider
        style={{
          height: "90vh",
          background: "#FCFCFC",
          padding: "10px",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Flex className="demo-logo-vertical brand">
          <Logo />

          {!collapsed && <p>Car Rental</p>}
        </Flex>
        <Menu
          theme="light"
          style={{ backgroundColor: "#FCFCFC", borderInlineEnd: "none" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#FCFCFC",
          }}
        >
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}

          <Flex></Flex>
        </Header>
        <Content
          style={{
            margin: 20,
            padding: 24,
            minHeight: 280,
            background: "#fff",
            borderRadius: 15,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
