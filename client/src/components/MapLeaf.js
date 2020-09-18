
import React from 'react';
import {Map,TileLayer} from 'react-leaflet';

const DEFAULT_LANGITUDE=-123;
const DEFAULT_LATITUDE=48;

function MapLeaf (){
    return(
        <Map center ={[DEFAULT_LATITUDE,DEFAULT_LANGITUDE]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
                
        </Map>
    )
}
export default MapLeaf;