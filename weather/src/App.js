import React, {Component} from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="5308eb6acb60dc61ed737bf4a4049a67";

class App extends Component{
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather= async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    var url='https://api.openweathermap.org/data/2.5/weather?q=CITY,COUNTRY&appid=5308eb6acb60dc61ed737bf4a4049a67&units=metric';
    var targetURL=url.replace("CITY",city);
    targetURL=targetURL.replace("COUNTRY",country);
    const api_call = await fetch(targetURL);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the Value"
      });
    }
  };

  render() {
    return(
      <div>
        <Titles></Titles>
        <Form getWeather={this.getWeather}></Form>   
        <Weather
        city={this.state.city}
        temperature={this.state.temperature}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        ></Weather>
           </div>
    );
  }
}

export default App;