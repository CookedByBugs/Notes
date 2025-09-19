import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";

const Cards = () => {
  const { user } = useAuthContext();
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    await axios
      .get("/api/get/private", {
        params: { userId: user._id },
      })
      .then((res) => {
        console.log("Data: ", res.data);
        setNotes(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col lg={8} md={12} sm={24} xs={24}>
          <div className="bg-bar md:min-h-[150px] min-h-[110px] flex flex-col text-white p-3 rounded-2xl h-full">
            <h3 className="md:text-2xl text-xl">Your Notes</h3>
            <p className="text-xl text-end mt-auto">{notes.length}</p>
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
    </div>
  );
};

export default Cards;
