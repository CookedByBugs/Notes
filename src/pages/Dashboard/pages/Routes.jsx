import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { useTabContext } from "../../../contexts/Tab/TabContext";
import Analytics from "./Analytics";
import Profile from "./Profile";
import NewNotes from "./New-notes";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-notes" element={<NewNotes />} />
        </Routes>
      </div>
    </main>
  );
};

export default Index;
