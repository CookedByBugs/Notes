import React, { useState } from "react";
import {
  BarChartOutlined,
  CloseOutlined,
  FileAddOutlined,
  LockOutlined,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
const Sider = () => {
  const { siderOpen, setSiderOpen } = useTabContext();
  return (
    <div
      className={`bg-bar rounded-e-4xl fixed top-0 bottom-0 left-0 min-h-screen max-w-[400px] text-white transition-all duration-300 ${
        siderOpen ? "w-full" : "w-0"
      }`}
    >
      <div className="w-[95%] mx-auto">
        <button
          onClick={() => setSiderOpen(!siderOpen)}
          className={`w-[50px] my-2 block p-3 rounded text-xl transition-all duration-300 ${
            siderOpen ? "bg-background text-black " : "bg-bar ms-2.5"
          }`}
        >
          {!siderOpen ? <MenuOutlined /> : <CloseOutlined />}
        </button>
      </div>
      <div className={`mx-auto ${siderOpen ? "p-2" : "p-2 overflow-hidden"}`}>
        <button className="sider-link ">
          <BarChartOutlined className="text-xl" />
          Dashboard
        </button>
        <button className="sider-link">
          <UserOutlined className="text-xl" /> Profile
        </button>
        <button className="sider-link">
          <FileAddOutlined className="text-xl" /> New Notes
        </button>
        <button className="sider-link">
          <TeamOutlined className="text-xl" /> Shared notes
        </button>
        <button className="sider-link">
          <LockOutlined className="text-xl" /> Private Notes
        </button>
      </div>
    </div>
  );
};

export default Sider;
