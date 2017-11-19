import React from "react";
const PlanetView = props => {
    let populationFactor = props.data.population / 10000000;
    populationFactor = populationFactor > 50 ? 50 : populationFactor;
    populationFactor = populationFactor < 10 ? 10 : populationFactor;
    return (
        <div>
            <div onClick={props.onPlanetSelect}>{props.data.name}</div>
            <hr />
        </div>
    );
};

export default PlanetView;
