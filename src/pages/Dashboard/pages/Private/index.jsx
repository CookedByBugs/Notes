import React, { useEffect } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import SearchBar from "../../../../components/SearchBar";
import { Divider } from "antd";
const Private = () => {
  const { setCurrentTab } = useTabContext();
  useEffect(() => {
    setCurrentTab("Private_Notes");
  }, []);
  const notes = []
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

export default Private;
