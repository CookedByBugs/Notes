import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import axios from "axios";

const Recent = () => {
  const { user } = useAuthContext();
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    await axios
      .get("/api/get/recent", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setNotes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="my-20 min-h-[300px] bg-component rounded-2xl">
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
  );
};

export default Recent;
