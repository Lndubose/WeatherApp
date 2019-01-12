import React from 'react';
import axios from 'axios';

import MainContianer from './components/MainContainer';
import MainForm from './components/MainForm';
import './App.css';

class App extends React.Component {
    state = {
        data: {},
    };

    componentDidMount() {
        axios
            .get(
                'https://api.openweathermap.org/data/2.5/weather?q=austin&APPID=172533940ab2f5b698ff4358c6d29446'
            )
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err));
    }

    onSubmit = (event, text) => {
        event.preventDefault();
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&APPID=172533940ab2f5b698ff4358c6d29446`
            )
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log('me', err));
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <h1>Weather app</h1>
                <h2>What would you like to see?</h2>
                <MainForm onSubmit={this.onSubmit} />
                <MainContianer data={this.state.data} />
            </div>
        );
    }
}

export default App;
