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
import Payment from "./components/Payment/Payment";
import DashBoard from "./pages/Dashboard/DashBoard";
import RequireAuth from "./pages/Login/RequeirAuth";
import MyProfile from "./components/DashBoard/MyProfile";
import OrderSuccess from "./components/Payment/OrderSuccess";
import RequireAdmin from "./pages/Login/RequireAdmin";
import Portfolio from "./pages/Home/Portfolio";
import About from "./pages/Home/About";
import CheckOut from "./components/Payment/CheckOut";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/allProducts" element={<AllProducts/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/myOrders" element={<MyOrders/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/productDetails/:id" element={<RequireAuth><Productdetails/></RequireAuth>}></Route>
          <Route path="/payMent/:id" element={<RequireAuth><Payment/></RequireAuth>}></Route>
          <Route path="/checkOut/:id" element={<RequireAuth><CheckOut/></RequireAuth>}></Route>
          <Route path="/orderSuccess" element={<OrderSuccess/>}></Route>
          <Route path="/dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
            <Route path="/dashboard" element={<RequireAuth><DashBoard/></RequireAuth>}></Route>
            <Route path="/dashboard/myProfile" element={<RequireAuth><MyProfile/></RequireAuth>}></Route>
            <Route path="/dashboard/myOrders" element={<RequireAuth><MyOrders/></RequireAuth>}></Route>
            <Route path="/dashboard/addReview" element={<RequireAuth><AddReview/></RequireAuth>}></Route>
            <Route path="/dashboard/manageOrders" element={<RequireAuth><ManageOrders/></RequireAuth>}></Route>
            <Route path="/dashboard/manageProducts" element={<RequireAuth><ManageProducts/></RequireAuth>}></Route>
            <Route path="/dashboard/addProduct" element={<RequireAuth><AddProduct/></RequireAuth>}></Route>
            <Route path="/dashboard/makeAdmin" element={<RequireAuth><MakeAdmin/></RequireAuth>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
