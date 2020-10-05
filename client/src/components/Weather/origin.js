import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn, MDBInput } from 'mdbreact';
const api = {
  key: "0532382240bf757bb76a00817d8eed87",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App(props) {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
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
      
      <MDBView src="https://cdn.pixabay.com/photo/2017/12/02/06/25/prka-2992314_960_720.jpg">
        <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
        <div>
          <MDBInput 
            type="text"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
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
      </MDBView>
      
    </header>
  );
}

export default App;