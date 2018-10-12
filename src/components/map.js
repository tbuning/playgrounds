import React from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import {MAPBOX_KEY} from "../constants";

mapboxgl.accessToken = MAPBOX_KEY;

let Map = class Map extends React.Component {
    map;

    componentDidUpdate() {
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/tbuning/cjn4rntv80h002rnwdnsnfp39',
            center: [6.858330, 51.843890],
            zoom: 11.0
        });

        this.map.on('load', () => {

        });
    }

    render() {
        return (
            <div ref={el => this.mapContainer = el} className="map absolute top right left bottom"/>
        );
    }
};

function mapStateToProps(state) {
    return {
        data: state.data,
        active: state.active
    };
}

Map = connect(mapStateToProps)(Map);

export default Map;