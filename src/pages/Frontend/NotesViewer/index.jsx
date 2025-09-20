import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../api";

const NotesViewer = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const getNote = async () => {
    await API
      .get(`/api/${id}`)
      .then((res) => {
        setNote(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getNote();
  }, []);

  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto bg-white rounded-2xl">
        <div className="card p-3">
          <h3 className="text-bar font-bold md:text-3xl text-xl text-center">
            {note?.title}
          </h3>
        </div>
        <hr className="mb-4 w-[90%] mx-auto" />
        <div className="card shadow-2xl">
          <div className="md:w-[90%] mx-auto">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: note?.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesViewer;
