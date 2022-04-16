import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
