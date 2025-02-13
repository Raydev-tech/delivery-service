import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VerifyPage from "./Pages/VerifyPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFound from "./Pages/NotFound";
import Ship from "./Pages/Ship";
import PickUp from "./Pages/PickUp";
import ContactUs from "./Pages/ContactUs";
import Personal from "./Pages/Personal";
import AboutUs from "./Pages/AboutUs";
import ServicesPage from "./Pages/ServicePage";
import Overseas from "./Pages/Overseas";
import OverseasQuote from "./Pages/OverseasQuote";
import AirShipping from "./Pages/AirShipping";
import AirQuote from "./Pages/AirQuote";
import Dashboard from "./Pages/Dashboard";
import Form from "./Pages/Form";
// import ProtectedRoute from "./Components/ProtectedRoute"; 

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verifypage" element={<VerifyPage />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="servicepage" element={<ServicesPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="form" element={<Form />} />
          <Route path="ship" element={<Ship />} />
          <Route path="pickup" element={<PickUp />} />
          <Route path="personal" element={<Personal />} />
          <Route path="overseas" element={<Overseas />} />
          <Route path="/overseasquote" element={<OverseasQuote />} />
          <Route path="/airshipping"  element={<AirShipping />} />
          <Route path="/airquote" element={<AirQuote />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
