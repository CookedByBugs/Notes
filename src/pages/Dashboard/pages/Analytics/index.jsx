import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import Cards from "./Cards";
import Recent from "./Recent";

const Analytics = () => {
  const { setCurrentTab, setSiderOpen } = useTabContext();
  const { user } = useAuthContext();
  useEffect(() => {
    setCurrentTab("Dashboard");
  }, []);
  return (
    <div className="w-[90%] mx-auto min-h-screen mt-40">
      <div className="my-10">
        <div>
          <h2 className="font-bold text-bar text-4xl">
            Hello {`${user?.firstName} ${user?.lastName}`},
          </h2>
        </div>
      </div>
      <hr />
      <div className="mt-15">
        <Cards />
        <Recent />
      </div>
    </div>
  );
};

export default Analytics;
