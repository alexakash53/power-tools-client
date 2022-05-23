import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
