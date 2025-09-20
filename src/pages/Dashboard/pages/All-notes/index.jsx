import React, { useCallback, useEffect, useState } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar";
import { Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const AllNotes = () => {
  const { setCurrentTab } = useTabContext();
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    setCurrentTab("All_Notes");
  }, []);
  const navigate = useNavigate();
  const getNotes = useCallback(async () => {
    await axios
      .get("https://noteshubby.vercel.app/api/get", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setNotes(res.data);      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="bg-component component-top border-bar">
        <Divider className="!text-2xl border-bar text-center text-bar !font-bold">
          All Notes
        </Divider>
        {notes?.map((note, i) => {
          return (
            <div
              onClick={() => {
                navigate(`/dashboard/all-notes/${note._id}`);
              }}
              key={i}
              className="relative  bg-white rounded-2xl p-3 my-2 hover:shadow-xl transition-all duration-300 h-[100px] overflow-y-hidden flex flex-col cursor-pointer"
            >
              <h3 className="md:text-3xl text-xl text-bar font-bold">
                {note.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: note.content }}
                className="mt-auto"
              ></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllNotes;
