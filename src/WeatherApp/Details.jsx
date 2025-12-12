import React from "react";
import "./style.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Details({ info }) {
  return (
    <div className="mt-4 mx-auto " style={{ width: "50rem" }}>
      <div className="row border  m-auto rounded-4 ps-4 pe-4 pt-4 pb-5 bg-light">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="fw-bold">{info.city}</h1>
          <p className="fs-1 fw-bold mt-3 ms-2">
            <WbSunnyIcon className="fs-1 text-warning fw-bold" /> {info.temp}
            &deg; C
          </p>
        </div>
        <h2 className="fw-bold text-center mt-2">{info.weather}</h2>

        {/* 2x2 grid for details */}
        <div className="row text-center mt-5">
          <div className="col-6 mb-4">
            <div className="border rounded-4 p-3 bg-white">
              Feels Like <br />
              <h4 className="mt-2">{info.feelsLike}&deg;</h4>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="border rounded-4 p-3 bg-white">
              Humidity <br />
              <h4 className="mt-2">{info.humidity}%</h4>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="border rounded-4 p-3 bg-white">
              Wind <br />
              <h4 className="mt-2">{info.wind} km/h</h4>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="border rounded-4 p-3 bg-white">
              Pressure <br />
              <h4 className="mt-2">{info.pressure} hPa</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
