import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import Login from "./pages/Login/Login"
import Blog from "./pages/Shared/Blog";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
