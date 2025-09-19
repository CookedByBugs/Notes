import React from "react";
import Routes from "./pages/Routes";
import "./App.css";
import "quill/dist/quill.snow.css";
import { useAuthContext } from "./contexts/Auth/AuthContext";
import Loader from "./components/Loader";

const App = () => {
  const { isLoading } = useAuthContext();

  return <div>{isLoading ? <Loader /> : <Routes />}</div>;
};

export default App;
