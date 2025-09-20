import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import { API } from "../../../../api";

const Cards = () => {
  const { user } = useAuthContext();
  const [notes, setNotes] = useState([]);
  const [sharedNotes, setSharedNotes] = useState([]);
  const [privateNotes, setPrivateNotes] = useState([]);
  const getNotes = async () => {
    await API
      .get("/api/get/my-notes", {
        params: { userId: user._id },
      })
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.error(err));
  };
  const getSharedNotes = async () => {
    await API
      .get("/api/get/shared", {
        params: {
          userId: user._id,
        },
      })
      .then((res) => {
        setSharedNotes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getPrivateNotes = async () => {
    await API
      .get("/api/get/private", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setPrivateNotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getNotes();
    getSharedNotes();
    getPrivateNotes();
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
            <p className="text-xl text-end mt-auto">{sharedNotes.length}</p>
          </div>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <div className="bg-bar md:min-h-[150px] min-h-[110px] flex flex-col text-white p-3 rounded-2xl h-full">
            <h3 className="md:text-2xl text-xl">Private Notes</h3>
            <p className="text-xl text-end mt-auto">{privateNotes.length}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
