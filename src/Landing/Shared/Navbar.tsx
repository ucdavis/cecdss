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
import { faArrowRightFromBracket, faHome, faPlus, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Resources/Images/logo.svg'; // Replace with your logo path
import '../../Styles/Landing.css'; // Import the CSS for custom styling
import { URL_LANDING_PAGE, URL_LOGIN_PAGE, URL_MODEL_PAGE, URL_REGISTER_PAGE } from '../../Resources/Constants';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar className="custom-navbar fixed-top px-5" color="light" light expand="md">
      <div className="d-flex w-100 justify-content-between">
        <div className="flex items-center justify-center">
          <NavbarBrand href="/" className="navbar-brand-bold flex align-items gap-x-2">
            <img src={logo} alt="Logo" className='h-8' />
            <div>
              FRREDDS
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-center">
            <NavItem className="mr-3">
              <StyledNavLink href={URL_LANDING_PAGE} className="nav-link-bold">
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={URL_LOGIN_PAGE} className="nav-link-bold">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-1" />
                Login
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={URL_REGISTER_PAGE} className="nav-link-bold">
                <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
                Register
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <Button
                style={{ background: '#395442', borderColor: '#395442' }}
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
      </div>
    </ReactstrapNavbar>
  );
};

export default Navbar;

const StyledNavLink = styled(NavLink)`
  color: #4a5568;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: green;
    text-decoration: none;
  }

  & .mr-1 {
    margin-right: 0.25rem;
  }
`;