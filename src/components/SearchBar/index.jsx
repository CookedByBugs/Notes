import { Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState([]);
  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = async () => {
    console.log(search);
    // await axios
    //   .get(`/api/notes/search?query=${query}`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setNotes(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
          onChange={handleChange}
          onSearch={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SearchBar;
