import React, { useEffect } from "react";
import { useTabContext } from "../../../contexts/Tab/TabContext";

const Home = () => {
  const { setSiderOpen } = useTabContext();
  const saved = localStorage.getItem("Temp") || ""
  useEffect(() => {
    setSiderOpen(false);
  }, []);
  return (
    <div className="bg-component component-top border-bar">
      <div className="text-center my-2" >
      </div>
    </div>
  );
};

export default Home;
