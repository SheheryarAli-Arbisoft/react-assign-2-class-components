import React, { Component, Fragment } from 'react';

import { Navbar as CustomNavbar, NavbarBrand } from '../components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  render() {
    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <CustomNavbar>
          <NavbarBrand>
            <i className='fas fa-cloud-sun-rain' />
            Weather App
          </NavbarBrand>
        </CustomNavbar>
      </Fragment>
    );
  }
}

export default Navbar;
