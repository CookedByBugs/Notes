import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext.jsx";
import SearchBar from "../../../../components/SearchBar";
import { Divider, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuthContext();
  const { setCurrentTab } = useTabContext();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentTab("My_Notes");
  }, []);

  const getNotes = async () => {
    await axios
      .get(`/api/get/notes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setNotes(res.data);
      })
      .catch((error) => {
        console.error(error);
        setNotes([]);
      });
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`/api/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        message.success("Note deleted successfully");
      })
      .catch((error) => {
        console.error("error deleting note", error);
      });
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="bg-component component-top border-bar">
        <Divider className="!text-2xl border-bar text-center text-bar !font-bold">
          My Notes
        </Divider>
        {notes?.map((note, i) => {
          return (
            <div
              key={note._id}
              className="bg-white relative rounded-2xl my-2 hover:shadow h-[100px] overflow-y-hidden flex flex-col"
            >
              <div
                className="h-full flex flex-col cursor-pointer p-3"
                onClick={() => navigate(`/dashboard/my-notes/${note?._id}`)}
              >
                <h3 className="text-3xl text-bar font-bold">{note?.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: note?.content }}
                  className="mt-auto"
                ></p>
              </div>
              <div className="">
                <button
                  onClick={() => handleDelete(note._id)}
                  className="btn-primary text-white absolute top-1/2 right-5 -translate-y-1/2"
                >
                  <DeleteOutlined /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyNotes;
