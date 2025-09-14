import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { Col, Form, Input, Row } from "antd";
import ReactQuill from "react-quill-new";
import axios from "axios";

const initValue = {
  title: "",
  allowedUsers: "",
};

const NewNotes = () => {
  const [value, setValue] = useState(initValue);
  const [content, setContent] = useState("");
  const { setCurrentTab } = useTabContext();
  useEffect(() => {
    setCurrentTab("New_Notes");
  }, []);

  const handleChange = (e) =>
    setValue((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let { title, allowedUsers } = value;
    title = title.trim();
    allowedUsers = allowedUsers.trim();
    let emails = allowedUsers.trim().replace(/,/g, " ").split(/\s+/);

    console.log(emails);
    let trimContent = content.trim();
    const formData = {
      title,
      allowedUsers: emails,
      access: "Private",
      content: trimContent,
    };
    console.log(formData);

    axios
      .post("/api/create", formData)
      .then((res) => {
        console.log("Created");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen">
      <div className="my-20 w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-center ">Add a Note</h2>
        {/* <hr /> */}
        <Form
          className="md:!my-10 md:!w-[80%] !w-[99%] !mx-auto"
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-bold text-lg">Title:</span>}
              >
                <Input
                  onChange={handleChange}
                  name="title"
                  size="large"
                  className="!rounded-xl"
                  placeholder="Enter Title"
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-bold text-lg">Allow access:</span>}
              >
                <Input
                  onChange={handleChange}
                  size="large"
                  name="allowedUsers"
                  placeholder="Enter emails of people you wanna allow access"
                  className="!rounded-xl"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={<span className="font-bold text-lg">Note:</span>}
              >
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-300">
                  <ReactQuill
                    // editor height
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
                </div>
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="btn-primary !px-10 !py-2.5 text-white"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Form>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default NewNotes;
