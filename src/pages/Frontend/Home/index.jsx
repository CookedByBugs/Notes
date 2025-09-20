import React, { useCallback, useEffect, useState } from "react";
import { useTabContext } from "../../../contexts/Tab/TabContext";
import { Col, Divider, Row } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";
const Home = () => {
  const { setSiderOpen } = useTabContext();
  const [notes, setNotes] = useState([]);
  // const saved = localStorage.getItem("Temp") || "";
  const navigate = useNavigate();

  const getNotes = useCallback(async () => {
    await axios
      .get("/api/get/public")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    setSiderOpen(false);
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="bg-component component-top border-bar">
        <Divider className="!text-2xl border-bar text-center text-bar !font-bold">
          Public
        </Divider>
        {notes?.map((note, i) => {
          return (
            <div
              onClick={() => {
                navigate(`/notes-viewer/${note._id}`);
              }}
              key={i}
              className="bg-white rounded-2xl p-3 my-2 hover:shadow-xl transition-all duration-300 h-[100px] overflow-y-hidden flex flex-col cursor-pointer"
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

export default Home;
