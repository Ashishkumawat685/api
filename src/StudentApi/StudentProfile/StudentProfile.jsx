import React, { useState } from "react";
import "./StudentProfile.css";

export function StudentProfile() {
  const [ApiData, setApiData] = useState([]);
  const UserID = localStorage.getItem("UserID");

  async function StudentGetData() {
    const ApiUrl = await fetch(`http://localhost:3000/Student/${UserID}`);
    const ApiData = await ApiUrl.json();
    setApiData(ApiData);
  }
  StudentGetData();
  return (
    <>
      <div className="Profilecontainer">
        <p>
          {ApiData.FirstName ? ApiData.FirstName.slice(0, 1).toUpperCase() : ""}
        </p>
      </div>
    </>
  );
}
