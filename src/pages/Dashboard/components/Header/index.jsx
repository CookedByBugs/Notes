import React from "react";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
const Header = () => {
  const { handleLogout } = useAuthContext();
  const { siderOpen, setSiderOpen } = useTabContext();
  return (
    <div className="z-10 fixed right-0 left-0 top-0">
      <div className="flex justify-between items-center bg-bar text-white py-3 pe-3 ">
        <div className="">
          <button
            title="Open Sider"
            onClick={() => setSiderOpen(!siderOpen)}
            className={`w-[50px] block p-3 rounded text-xl transition-all duration-300 ${
              siderOpen ? "bg-background text-black " : "bg-bar ms-2.5"
            }`}
          >
            {!siderOpen ? (
              <MenuOutlined className="!text-xl" />
            ) : (
              <CloseOutlined className="!text-xl" />
            )}
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <UserOutlined /> User Panel
          </h2>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-5 py-2 rounded-xl hover:outline-1 hover:bg-white hover:text-black font-bold transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
