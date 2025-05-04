import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Product } from "./menus/Home/ProductsArray";
import { StudentProfile } from "../StudentApi/StudentProfile/StudentProfile";

function Header() {
  const [show, setShow] = useState("none");

  // const { Searchdata, setSearchdata } = useState(Listdata);

  const [listdata, setlistdata] = useState(Product);
  const [searchdata, setsearchdata] = useState(listdata);

  function inputValue(e) {
    const datavalue = e.target.value;
    const datasearch = listdata.filter((listdatanew) =>
      listdatanew.category.toLowerCase().startsWith(datavalue)
    );

    if (datavalue) {
      setsearchdata(datasearch);
    } else {
      setsearchdata(listdata);
    }
  }
  const menus = [
    { menu: "Home", path: "/home" },
    { menu: "Cart", path: "/Cart" },
    { menu: "About us", path: "/About" },
    { menu: "Services", path: "/Services" },
    { menu: "Shop", path: "/Shop" },
    { menu: "Contact", path: "/Contact" },
    { menu: "Account", path: "/StudentData" },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("UserID");
    navigate("/"); // Logout and go back to Login Page
  };
  return (
    <>
      <section className="header">
        <div className="Header_container">
          <ul>
            {menus.map((menus_data) => {
              return (
                <>
                  <li key={menus_data.id}>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to={menus_data.path}
                    >
                      {menus_data.menu}
                    </NavLink>
                  </li>
                </>
              );
            })}
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
            <li>
              <StudentProfile />
            </li>
          </ul>
          <div className="search_container">
            <input
              onMouseEnter={() => setShow("block")}
              type="text"
              placeholder="Search Here......"
              onChange={inputValue}
            />
            <button>Search</button>
          </div>
        </div>
      </section>
      <section
        className="search_item_container"
        style={{ display: `${show}` }}
        onMouseLeave={() => setShow("none")}
      >
        <div className="search_items">
          <ul>
            {searchdata.map((searchitems) => {
              return (
                <>
                  <li key={searchitems.id}>{searchitems.category}</li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export { Header };
