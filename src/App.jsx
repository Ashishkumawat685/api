import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Header/menus/Home/Home";
import { Header } from "./Header/Header";
import { Login } from "./Login/loginpage";
import { SignUp } from "./StudentApi/SignUp";
import { StudentGet } from "./StudentApi/StudentGet/StudentGet";
import { StudentEdit } from "./StudentApi/StudentEdit/StudentEdit";
import { ProductDetails } from "./Header/menus/Home/deteailsproducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/StudentData" element={<StudentGet />} />
          <Route path="/StudentEdit" element={<StudentEdit />} />
          <Route
            path="/ProductDetails/:ProductId"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
