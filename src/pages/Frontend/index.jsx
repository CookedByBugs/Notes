import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Input } from "antd";
import SearchBar from "../../components/SearchBar";
import Shared from "./Shared";
import Private from "./Private";
import Add from "./Add";
const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/private" element={<Private />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Frontend;
