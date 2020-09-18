import React,{Component} from 'react';
import L from 'leaflet';
import styled from 'styled-components'
// import 'leaflet/dist/leaflet.css';

const Wrapper = styled.div`
width: ${props=>props.width};
height : ${props=>props.height};
`;

export default class Map2 extends React.Component{
    componentDidMount(){
        // this.map=L.map('map',{
        //     center:[58,16],
        //     zoom:8,
        //     zoomControl:true
        // })
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           
        //     detectRetina:true,
        //     maxZoom:20,
        //     maxNativeZoom:17
        // }).addTo(this.map)
        var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
    }
    render(){
        
        return <Wrapper width="1200px" height="720" id="map"/>
    }
}
