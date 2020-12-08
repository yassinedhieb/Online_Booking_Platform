import React, { useState,useEffect } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn, MDBInput } from 'mdbreact';
const api = {
  key: "0532382240bf757bb76a00817d8eed87",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App(props) {
  useEffect(()=>{
    fetchItems();
  },[]);

  const[weather,setweather]=useState([])

  const fetchItems = async ()=> {
    
    const data= await fetch(`${api.base}weather?q=${props.city}&units=metric&APPID=${api.key}`)
    const weather=await data.json();
    setweather(weather)
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <header>
      
      
        <MDBMask className="flex-center flex-column text-white text-center">
        <div>
          {/* <MDBInput 
            type="text"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          /> */}
          {/* {console.log(props.city)}
          {console.log(weather)} */}
          <h1>
            {props.maison_dhote}
          </h1>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
          <h2 style={{fontSize:'70px'}}>{weather.name}, {weather.sys.country}</h2>
          <h4 style={{fontSize:'40px'}}>{dateBuilder(new Date())}</h4>
          <h4 style={{fontSize:'40px'}}> {Math.round(weather.main.temp)}°c</h4>
          <h2 style={{fontSize:'70px'}}>{weather.weather[0].main}</h2>
          </div>
          ) : ('')}
        </MDBMask>
      
    </header>
  );
}

export default App;