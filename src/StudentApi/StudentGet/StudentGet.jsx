import React, { useState } from "react";
import { Header } from "../../Header/Header";
import "./StudentGet.css";
import { useNavigate } from "react-router-dom";
function StudentGet() {
  // Edit Page par jane ke liye
  const StudentEditPage = useNavigate();
  const StudentEditPageRander = (e) => {
    setTimeout(() => {
      StudentEditPage("/StudentEdit");
    }, 500);
    localStorage.setItem("productid", `${e}`);
  };

  const [ApiData, setApiData] = useState([]);

  async function StudentGetData() {
    const ApiUrl = await fetch("http://localhost:3000/Student");
    const ApiData = await ApiUrl.json();
    setApiData(ApiData);
  }
  StudentGetData();

  async function StudentDeleteData(id) {
    const ApiUrl = await fetch(`http://localhost:3000/Student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Student Deleted....");
      })
      .catch(() => {
        alert("Try Again......");
      });
  }

  // Add to cart
  async function AddtoCart(e) {
    const AddCartUrl = await fetch("http://localhost:3000/Cart", {
      method: "POST",
      body: JSON.stringify(e),
    })
      .then(() => {
        alert("Added");
      })
      .catch(() => {
        alert("Try Again");
      });
  }
  return (
    <>
      <Header />
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {ApiData.map((items, index) => {
              return (
                <>
                  <tr key={items}>
                    <td>{index + 1}</td>
                    <td>{items.FirstName}</td>
                    <td>{items.LastName}</td>
                    <td>{items.Email}</td>
                    <td>{items.Mobile}</td>
                    <td>{items.Password}</td>
                    <td>{items.CunPassword}</td>
                    <td>
                      <button onClick={() => StudentDeleteData(items.id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button onClick={() => StudentEditPageRander(items.id)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => AddtoCart(items)}>
                        Add to cart
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { StudentGet };
