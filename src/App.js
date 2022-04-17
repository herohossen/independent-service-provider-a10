import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/Footer";
import SignIn from "./components/Pages/SignIn";
import Signup from "./components/Pages/Signup";
import CheckOut from "./components/Pages/CheckOut";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
