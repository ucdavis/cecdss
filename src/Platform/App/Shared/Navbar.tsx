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
import { URL_DASHBOARD_PAGE, URL_LOGOUT, URL_MODEL_PAGE, URL_SETTINGS_PAGE } from '../../../Resources/Constants';
import logo from '../../../Resources/Images/logo.svg';
import '../../../Styles/Landing.css';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar className="shadow-md fixed-top px-5" color="light" light expand="md">
      <div className="d-flex w-100 justify-content-between">
        <div className="flex items-center justify-center">
          <NavbarBrand href="/" className="navbar-brand-bold flex align-items gap-x-2">
            <img src={logo} alt="Logo" className='h-8' />
            <div>
              FRREDSS
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-center">
            <NavItem className="mr-3">
              <StyledNavLink href={URL_DASHBOARD_PAGE} className="nav-link-bold">
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={`${URL_SETTINGS_PAGE}`} className="nav-link-bold">
                Settings
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <StyledNavLink className="nav-link-bold">
                Logout
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