import { Col, Divider, Form, Input, Row, Select } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  console.clear();
  console.log(id);
  const [note, setNote] = useState(null);
  const [content, setContent] = useState("");
  const getNote = useCallback(async () => {
    await axios
      .get(`/api/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNote(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div className="mt-30 max-w-[90%] mx-auto">
      <div>
        <Divider className="border-bar text-bar !text-3xl !text-center">
          {note?.title}
        </Divider>
      </div>
      <Form>
        <Row gutter={[16, 16]}>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item>
              <Input placeholder="Title" />
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item>
              <Input placeholder="Share with others..." />
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item>
              <Select>
                <Select.Option>Public</Select.Option>
                <Select.Option>Private</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item className="!bg-white">
              <ReactQuill
                // editor height
                value={content}
                defaultValue={note?.content}
                onChange={(value) => setContent(value)}
                className="!prose !max-w-none"
                formats={["bold", "italic", "underline", "link", "image"]}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline"],
                    ["link"], // media
                  ],
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Note;
