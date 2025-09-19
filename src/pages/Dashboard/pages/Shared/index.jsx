import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../../../components/SearchBar";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { Divider } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
const Shared = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuthContext();
  const { setCurrentTab } = useTabContext();
  useEffect(() => {
    setCurrentTab("Shared_Notes");
  }, []);

  const getNotes = async () => {
    await axios
      .get(`/api/get/private`, {
        params: { userId: user._id },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
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
          Shared
        </Divider>
        {notes?.map((note, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 my-2 hover:shadow h-[100px] overflow-y-hidden flex flex-col"
            >
              <h3 className="text-3xl font-bold">{note.title}</h3>
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

export default Shared;
