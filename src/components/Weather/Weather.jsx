import React, { Component } from 'react';
import styles from './Weather.module.scss';

const API_KEY = '0f33f5c78acf44e7d38b5f6706f6f59d';
const londonCityID = '2643744';
const bristolCityID = '4749005';
const romeCityID = '4219762';

class Weather extends Component {

    state = {
        allWeather: []
    }

    async componentDidMount() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${londonCityID},${bristolCityID},${romeCityID}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        console.log(data); //object
        console.log(data.list) //array
        this.setState({ allWeather: data.list });
        console.log(this.state.allWeather);

        // this console.logs the required individual elements
        for (let i = 0; i < data.list.length; i++) {
            console.log(
                data.list[i].name,
                data.list[i].main.temp,
                data.list[i].main.humidity,
                data.list[i].main.temp_min,
                data.list[i].main.temp_max,
            )
        }
        // // this displays data on the browser, albeit not via render method
        // for (let i = 0; i < data.list.length; i++) {
        //     let card = document.createElement('div')
        //     card.innerHTML = `City Name: ${data.list[i].name}, Humidity(%): ${data.list[i].main.humidity}, Min.Temp (C): ${data.list[i].main.temp_min}, Max.Temp (C): ${data.list[i].main.temp_max}`
        //     document.getElementById('container').appendChild(card)
        // }
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
            <div className={styles.weatherList}>
                { this.state.allWeather.map((dataList) => {
                    return (
                        <div className={styles.weatherCard}>
                            <h2>{ dataList.name }</h2> 
                            <p>Current Temp (C): { dataList.main.temp }°C</p>
                            <p>Humidity: { dataList.main.humidity }%</p>
                            <p>Min Temp: { dataList.main.temp_min }°C</p>
                            <p>Max Temp (C): { dataList.main.temp_max }°C</p>
                         </div>
                    ) 
                }) }
            </div>
        )
    }
}

export default Weather;