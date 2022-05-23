import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
