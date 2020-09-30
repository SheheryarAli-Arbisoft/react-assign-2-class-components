import React, { Component } from 'react';

import SearchForm from './views/SearchForm';

import Container from './components/Container';
import Heading from './components/Heading';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Heading>
            <i className='fas fa-cloud-sun-rain'></i> Weather App
          </Heading>
          <SearchForm />
        </Container>
      </Provider>
    );
  }
}

export default App;
