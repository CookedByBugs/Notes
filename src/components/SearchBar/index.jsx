import { Input } from "antd";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    console.log(search);
  };
  return (
    <div className="relative mx-auto w-[90%] h-[300px] ">
      <div className=" absolute top-[70%] w-full max-w-[500px] left-1/2 translate-[-50%]">
        <div className="flex justify-center items-center h-[100%] md:text-4xl text-3xl font-semibold text-bar text-center">
          Search notes by title
        </div>
        <Input.Search
          size="large"
          placeholder="Search here"
          className="!w-full"
          onChange={(e) => setSearch(e.target.value)}
          onSearch={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SearchBar;
