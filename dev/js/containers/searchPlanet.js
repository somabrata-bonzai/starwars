import React, { Component } from "react";
import PlanetView from "../components/planetView";
import PlanetDetailsView from "../components/planetDetailsView";
import axios from "axios";

export default class SearchPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: "",
            planets: [],
            selectedPlanet: null,
        };
    }

    onSearchChange(e) {
        this.setState({ searchKeyword: e.target.value });
    }

    searchPlanet() {
        if (this.state.searchKeyword) {
            axios({
                method: "get",
                url: "https://swapi.co/api/planets",
                params: {
                    search: this.state.searchKeyword,
                },
            })
                .then(response => {
                    console.log(response.data);
                    let results = response.data.results;
                    this.setState({ planets: results || [] });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

    renderPlanetView() {
        var self = this;
        let planets = this.state.planets || [];
        return planets.map((planet, index) => {
            return (
                <PlanetView
                    key={index}
                    data={planet}
                    onPlanetSelect={() => {
                        self.setState({ selectedPlanet: planet });
                    }}
                />
            );
        });
    }

    renderPlanetDetails() {
        return this.state.selectedPlanet ? (
            <PlanetDetailsView data={this.state.selectedPlanet} />
        ) : null;
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.onSearchChange(e)} />
                <button onClick={() => this.searchPlanet()}>Search</button>
                <div>{this.renderPlanetView()}</div>
                <div>{this.renderPlanetDetails()}</div>
            </div>
        );
    }
}
