import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import Login from "./pages/Login/Login"
import Blog from "./pages/Shared/Blog";
import NotFound from "./pages/Shared/NotFound";
import SignUp from "./pages/Login/SignUp";
import AllProducts from "./pages/AllProducts/AllProducts";
import MyOrders from "./components/DashBoard/MyOrders";
import AddProduct from "./components/DashBoard/AddProduct";
import ManageOrders from "./components/DashBoard/ManageOrders";
import MakeAdmin from "./components/DashBoard/MakeAdmin";
import ManageProducts from "./components/DashBoard/ManageProducts";
import AddReview from "./components/DashBoard/AddReview";
import Productdetails from "./pages/Home/ProductDetails";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/allProducts" element={<AllProducts/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/myOrders" element={<MyOrders/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/productDetails" element={<Productdetails/>}></Route>
          <Route path="/addReview" element={<AddReview/>}></Route>
          <Route path="/manageOrders" element={<ManageOrders/>}></Route>
          <Route path="/manageProducts" element={<ManageProducts/>}></Route>
          <Route path="/makeAdmin" element={<MakeAdmin/>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
