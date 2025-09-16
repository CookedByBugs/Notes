import React, { useCallback, useEffect, useState } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import axios from "axios";
import SearchBar from "../../../../components/SearchBar";
import { Divider } from "antd";

const MyNotes = () => {
  const { setCurrentTab } = useTabContext();
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    setCurrentTab("All_Notes");
  }, []);
  const getNotes = useCallback(async () => {
    await axios
      .get("/api/get", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setNotes(res.data);
        console.log("Notes:", res.data);
      })
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

export default MyNotes;
