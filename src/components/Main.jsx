import React, { useEffect, useState } from "react";
import "../style/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => console.log(res));
  });
  console.log(data);
  return (
    <div className="container ">
      <div className="d-flex ">
        <div className=" col-6 mt-5 mb-5 ms-1 ">
          <img src="jak.jpeg" className="porpic" alt="" />
        </div>
        <div className="col-6 d-flex justify-content-end mt-5">
          <a
            href="https://academy.mstars.mn/"
            className="link fs-4 text-decoration-none "
          >
            MStars Academy
          </a>
        </div>
      </div>
      <div className="paragrph">
        <p className="col-12 col-md-6 lh-1 mb-5">
          hi, I am Javkhaa web developer student
        </p>
        <p className=" mb-5">{data}</p>
      </div>
      <div className="d-flex  mb-3 flex-wrap text-center mt-2 mb-2">
        <div className="item how  m-2">About</div>
        <div className="item how m-2">item2</div>
        <div className="item how m-2">item3</div>
      </div>

      <div className="line"></div>
    </div>
  );
}

export default Main;
