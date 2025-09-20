import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { useTabContext } from "../../../contexts/Tab/TabContext";
import Analytics from "./Analytics";
import NewNotes from "./New-notes";
import AllNotes from "./All-notes";
import Private from "./Private";
import Shared from "./Shared";
import Note from "./Note";
import MyNotes from "./My-notes";

const Index = () => {
  const { siderOpen, setSiderOpen } = useTabContext();
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        onClick={() => {
          setSiderOpen(false);
        }}
      >
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/new-notes" element={<NewNotes />} />
          <Route path="/all-notes" element={<AllNotes />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/shared-notes" element={<Shared />} />
          <Route path="/private-notes" element={<Private />} />
          <Route path="/private-notes/:id" element={<Note />} />
          <Route path="/my-notes/:id" element={<Note />} />
          <Route path="/shared-notes/:id" element={<Note />} />
          <Route path="/all-notes/:id" element={<Note />} />
        </Routes>
      </div>
    </main>
  );
};

export default Index;
