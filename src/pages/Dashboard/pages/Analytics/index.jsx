import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";

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
        <Row gutter={[10, 10]}>
          <Col lg={8} md={12} sm={24} xs={24}>
            <div className="bg-bar md:min-h-[150px] min-h-[110px] flex flex-col text-white p-3 rounded-2xl h-full">
              <h3 className="md:text-2xl text-xl">Your Notes</h3>
              <p className="text-xl text-end mt-auto">0</p>
            </div>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <div className="bg-bar md:min-h-[150px] min-h-[110px] flex flex-col text-white p-3 rounded-2xl h-full">
              <h3 className="md:text-2xl text-xl">Shared Notes</h3>
              <p className="text-xl text-end mt-auto">0</p>
            </div>
          </Col>
          <Col lg={8} md={24} sm={24} xs={24}>
            <div className="bg-bar md:min-h-[150px] min-h-[110px] flex flex-col text-white p-3 rounded-2xl h-full">
              <h3 className="md:text-2xl text-xl">Your Notes</h3>
              <p className="text-xl text-end mt-auto">0</p>
            </div>
          </Col>
        </Row>
        <div className="my-20 min-h-[300px] bg-component rounded-2xl">
          <h2 className="text-2xl">Recent Notes</h2>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
