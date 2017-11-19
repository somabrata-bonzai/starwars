import React from "react";
const planetDetailsView = props => {
    let populationFactor = props.data.population / 10000000;
    populationFactor = populationFactor > 50 ? 50 : populationFactor;
    populationFactor = populationFactor < 10 ? 10 : populationFactor;
    return (
        <div
            style={{
                fontSize: populationFactor + "px",
            }}
        >
            <h3>{props.data.name}</h3>
            <br />
            <p>{JSON.stringify(props.data)}</p>
            <hr />
        </div>
    );
};

export default planetDetailsView;
