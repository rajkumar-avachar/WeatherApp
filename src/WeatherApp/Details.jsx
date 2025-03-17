import React from 'react'
import './Details.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Details({ info }) {
    return (
        <div className="container mt-5">
            <div className="row border border-black w-75 m-auto rounded-4 ps-4 pe-4 pt-4 pb-5">
                <h1 className='fw-bold'>{info.city}</h1>
                <p className='fs-1 fw-bold mt-3 ms-2'> <WbSunnyIcon className='fs-1 text-warning fw-bold' /> {info.temp}&deg; C</p>
                <h2 className='fw-bold text-success'>Weather: &nbsp;{info.weather}</h2>
                <div className='d-flex gap-5 text-center moreDetails mt-5 flex-wrap'>
                    <div>Feels Like <br /> <h4>{info.feelsLike}&deg;</h4></div>
                    <div>Humidity <br /> <h4>{info.humidity}%</h4></div>
                    <div>Wind <br /> <h4>{info.wind}km/h</h4></div>
                    <div>Pressure <br /> <h4>{info.pressure} hPa</h4></div>
                </div>
            </div>
        </div>
    );
}

export default Details;