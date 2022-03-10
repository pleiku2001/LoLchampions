import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Skin from "./pages/Skin";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Photos />} />
        <Route path="/skin/:championId" element={<Skin />} />
        <Route path="/details/:championId" element={<Details />} />
      </Routes>
    </>
  );
}


export default App;
