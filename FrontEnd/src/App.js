import { useEffect, useState } from "react";
import Login from "./login/Login";
import TableData from "./dashboard/TableData";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignUp from "./sign-up/SignUp";
import { ToastProvider } from "react-toast-notifications";
import { Link, useNavigate } from "react-router-dom";


function App() {
  const [auth,setAuth]=useState(false);


  return (
    // <div>
    //   {auth?<Login authorisation={setAuth} />:<TableData />}
    // </div>
    <ToastProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login authorisation={setAuth}></Login>} />
      <Route path="/sign-up" element={<SignUp />} />
      {true && <Route path="/dashboard" element={<TableData />} />}
    </Routes>
    </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
