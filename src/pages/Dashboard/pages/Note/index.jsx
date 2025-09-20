import { Col, Divider, Form, Input, Row, Select } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import { useParams } from "react-router-dom";
import { API } from "../../../../api";

const Note = () => {
  const { id } = useParams();
  // console.clear();
  const [note, setNote] = useState(null);
  const [allowedInput, setAllowedInput] = useState("");
  const [title, setTitle] = useState("");
  const [allowedUsers, setAllowedUsers] = useState([]);
  const [content, setContent] = useState("");
  const [access, setAccess] = useState(null);

  const handleAllowedUsers = (e) => {
    setAllowedInput(e.target.value);
    const emails = e.target.value
      .split(/[\s,]+/)
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
    setAllowedUsers(emails);
  };

  const handleUpdate = async () => {
    await API
      .put(
        `/api/${id}`,
        {
          title,
          allowedUsers,
          content,
          access,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  const getNote = useCallback(async () => {
    await API
      .get(`/api/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNote(res.data);
        const emails = res.data.allowedUsers.map((u) => u.email || u);
        setAllowedUsers(emails);
        setAllowedInput(emails.join(", ")); // <-- this shows previous emails
        setTitle(res.data.title);
        setAccess(res.data.access);
        setContent(res.data.content);
      })

      .catch((error) => {
        console.error(error);
      });
  });
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div className="mt-30 max-w-[90%] mx-auto ">
      <div>
        <Divider className="border-bar text-bar !font-semibold !text-3xl !text-center">
         Edit Note
        </Divider>
      </div>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item
              label={<span className="font-bold text-lg">Title:</span>}
            >
              <Input
                size="large"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
              />
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item
              label={<span className="font-bold text-lg">Share with:</span>}
            >
              <Input
                size="large"
                onChange={handleAllowedUsers}
                value={allowedInput}
                placeholder="Share with others..."
              />
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Form.Item
              label={<span className="font-bold text-lg">Access:</span>}
            >
              <Select
                className=""
                size="large"
                onChange={(val) => setAccess(val)}
                value={access}
              >
                <Select.Option value="Public">Public</Select.Option>
                <Select.Option value="Private">Private</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label={<span className="font-bold text-lg">Note: </span>}
            >
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-300">
                <ReactQuill
                  // editor height
                  value={content}
                  onChange={(value) => setContent(value)}
                  // defaultValue={content}
                  formats={[
                    "bold",
                    "italic",
                    "underline",
                    "link",
                    "image",
                    "align",
                  ]}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"],
                      ["link"], // media
                      [{ align: [] }],
                    ],
                  }}
                />
              </div>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <div className="flex justify-center items-center">
                <button
                  onClick={handleUpdate}
                  className="btn-primary text-white !font-semibold"
                >
                  Submit
                </button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Note;
