import React, { Component } from 'react';

const API_KEY = '0f33f5c78acf44e7d38b5f6706f6f59d';
const londonCityID = '2643744';
const bristolCityID = '4749005';
const romeCityID = '4219762';

class Main extends Component {
    state = {
        allWeather: []
    }

    async componentDidMount() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${londonCityID},${bristolCityID},${romeCityID}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        const results = data.list;
        console.log(results);
        // this.setState({ allWeather: results });
        // console.log(this.state.allWeather);

        for (let i = 0; i < results.length; i++) {
            console.log(
                results[i].name,
                results[i].main.humidity,
                results[i].main.temp_min,
                results[i].main.temp_max,
            )
        }
        
        for (let i = 0; i < results.length; i++) {
            let card = document.createElement('div')
            card.innerHTML = `City Name: ${results[i].name}, Humidity: ${results[i].main.humidity}, Min.Temp: ${results[i].main.temp_min}, Max.Temp: ${results[i].main.temp_max}`
            document.getElementById('container').appendChild(card)
        }
    }

    // //Using Sam's fetch API suggestion (Mars)
    // fetch("http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d")
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    //     .catch(error => {
    //         console.error(error);
    //     });

    // componentDidMount() {
    //     fetch(`http://api.openweathermap.org/data/2.5/group?id=${londonCityID},${bristolCityID},${romeCityID}&units=metric&appid=${API_KEY}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data.list));
    // }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Main;