import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext.jsx";
import SearchBar from "../../../../components/SearchBar";
import { Divider } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Private = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuthContext();
  const { setCurrentTab } = useTabContext();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentTab("Private_Notes");
  }, []);

  const getNotes = async () => {
    await axios
      .get(`/api/get/private`, {
        params: { userId: user._id },
      })
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((error) => {
        console.error(error);
        setNotes([]);
      });
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="bg-component component-top border-bar">
        <Divider className="!text-2xl border-bar text-center text-bar !font-bold">
          Private
        </Divider>
        {notes?.map((note, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 my-2 hover:shadow h-[100px] overflow-y-hidden flex flex-col"
              onClick={() => navigate(`/dashboard/private-notes/${note._id}`)}
            >
              <h3 className="text-3xl text-bar font-bold">{note.title}</h3>
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

export default Private;
