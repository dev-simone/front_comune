/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

// Context Provider
import { AuthProvider } from "./context/AuthProvider";

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RequireAuth from "./components/RequireAuth";

// import routes
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const ReservedArea = React.lazy(() => import("./pages/ReservedArea"));
const AddSite = React.lazy(() => import("./pages/AddSite"));
const AddEvent = React.lazy(() => import("./pages/AddEvent"));
const Modify = React.lazy(() => import("./pages/Modify"));
const PrivacyPolicy = React.lazy(() => import("./pages/PolicyPrivacy"));

//axios config
// console.log(process.env.APP_BASE_URL + "/api");
axios.defaults.baseURL = process.env.APP_BASE_URL + "/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/**ROUTES TO PROTECT */}
          <Route element={<RequireAuth />}>
            <Route path="/reserved-area" element={<ReservedArea />} />
            <Route path="/arch-site" element={<AddSite />} />
            <Route path="/event-page" element={<AddEvent />} />
            <Route path="/modify-page" element={<Modify />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  );
}

export default App;
