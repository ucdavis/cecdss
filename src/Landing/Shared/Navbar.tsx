// src/Navbar.tsx
import React, { useState } from 'react';
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Resources/Images/logo.svg'; // Replace with your logo path
import '../../Styles/Landing.css'; // Import the CSS for custom styling
import { URL_LANDING_PAGE, URL_MODEL_PAGE } from '../../Resources/Constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar className="custom-navbar fixed-top" color="light" light expand="md">
      <NavbarBrand href="/" className="navbar-brand-bold">
        <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        FRREDDS
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='mr-5'>
            <NavLink href={URL_LANDING_PAGE} className="nav-link-bold">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <Button
              style={{
				background:'#395442'
			  }}
              href={URL_MODEL_PAGE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-1" />
              Run New Model
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};

export default Navbar;
