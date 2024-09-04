import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Navbar as ReactstrapNavbar,
} from 'reactstrap';
import styled from 'styled-components';
import { URL_LANDING_PAGE, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import logo from '../../../Resources/Images/logo.svg';
import '../../../Styles/Landing.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar className="shadow-md fixed-top px-5" color="light" light expand="md">
      <NavbarBrand href="/" className="d-flex align-items-center gap-x-2">
        <img src={logo} alt="Logo" className="h-8" />
        <div className="navbar-brand-bold">FRREDSS</div>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto flex flex-column flex-md-row align-items-center justify-content-center gap-y-2 gap-md-4">
          <NavItem>
            <StyledNavLink href={URL_LANDING_PAGE}>
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink 
              href={USER_GUIDE_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              download="User_Guide_FREDDSS.pdf"
            >
              User Guide
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href={`${URL_LANDING_PAGE}#publications`}>
              Publications
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
`;
