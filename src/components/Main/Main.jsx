import React, { Component } from 'react';

const API_KEY = '0f33f5c78acf44e7d38b5f6706f6f59d';
const londonCityID = '2643744';
const bristolCityID = '4749005';
const romeCityID = '4219762';
// const url = `http://api.openweathermap.org/data/2.5/group?id=${londonCityID},${bristolCityID},${romeCityID}&units=metric&appid=${API_KEY}`;

class Main extends Component {
    state = {
        weather: []
    }

    async componentDidMount() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${londonCityID},${bristolCityID},${romeCityID}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        const results = data.list;
        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(
                results[i].name,
                results[i].main.humidity,
                results[i].main.temp_min,
                results[i].main.temp_max,
            )
        }
    }

    // //Using Sam's Mars fetch API
    // fetch("http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d")
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    //     .catch(error => {
    //         console.error(error);
    //     });

    // componentDidMount() {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data.list));
    // }

    render() {
        return (
            <section></section>
        )
    }
}

export default Main;