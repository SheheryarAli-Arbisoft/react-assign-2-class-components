import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navbar from './views/Navbar';
import SearchForm from './views/SearchForm';
import WeatherList from './views/WeatherList';

import Container from './components/Container';
import Heading from './components/Heading';

import store from './store';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      /* eslint-disable react/jsx-filename-extension */
      <Provider store={store}>
        <Navbar />
        <Container>
          <Heading>
            <i className='fas fa-cloud-sun-rain' />
            Weather App
          </Heading>
          <SearchForm />
          <WeatherList />
        </Container>
      </Provider>
    );
  }
}

export default App;
