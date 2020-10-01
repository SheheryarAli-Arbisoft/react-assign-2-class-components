import React, { Component, Fragment } from 'react';

import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <CustomNavbar>
          <NavbarBrand>
            <i className='fas fa-cloud-sun-rain'></i>Weather App
          </NavbarBrand>
        </CustomNavbar>
      </Fragment>
    );
  }
}

export default Navbar;
