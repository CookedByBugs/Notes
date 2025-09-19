import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Input } from "antd";
import NotesViewer from "./NotesViewer";

const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes-viewer/:id" element={<NotesViewer />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Frontend;
