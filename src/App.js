import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

export default App;
