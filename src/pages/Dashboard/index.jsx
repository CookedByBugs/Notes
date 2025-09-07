import { Col, Row } from "antd";
import React from "react";
import Sider from "./components/Sider";
import { useTabContext } from "../../contexts/Tab/TabContext";

const Dashboard = () => {
  const { siderOpen, setSiderOpen } = useTabContext();

  return (
    <div className="bg-background min-h-screen">
      <Sider />
    </div>
  );
};

export default Dashboard;
