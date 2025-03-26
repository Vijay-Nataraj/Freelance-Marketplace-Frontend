import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import About from "./components/About";
import Contact from "./components/Contact";
import CreateJob from "./components/CreateJob";
import FindFreelancer from "./components/FindFreelancer";
import SendProposal from "./components/SendProposal";
import ContractForm from "./components/ContractForm";
import PaymentPage from "./pages/PaymentPage";
import Payment from "./components/Payment";
import CreateService from "./pages/CreateService";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="/client-dashboard"
            element={
              <PrivateRoute>
                <ClientDashboard />
              </PrivateRoute>
            }
          >
            <Route path="create-job" element={<CreateJob />} />
            <Route path="find-freelancer" element={<FindFreelancer />} />
          </Route>

          <Route
            path="/freelancer-dashboard"
            element={
              <PrivateRoute>
                <FreelancerDashboard />
              </PrivateRoute>
            }
          >
            <Route path="send-proposal" element={<SendProposal />} />
            <Route path="services/create-service" element={<CreateService />} />
          </Route>
          <Route path="/contract-form/:jobId" element={<ContractForm />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContractForm />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
