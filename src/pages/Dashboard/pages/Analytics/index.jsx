import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import Cards from "./Cards";

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
          <h2 className="font-bold text-4xl">
            Hello {`${user?.firstName} ${user?.lastName}`},
          </h2>
        </div>
      </div>
      <hr />
      <div className="mt-15">
        <Cards />
        <div className="my-20 min-h-[300px] bg-component rounded-2xl">
          <h2 className="text-2xl">Recent Notes</h2>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
