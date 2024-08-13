import { faArrowRightFromBracket, faHome, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
import { URL_LANDING_PAGE, URL_LOGIN_PAGE, URL_MODEL_PAGE, URL_REGISTER_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import logo from '../../../Resources/Images/logo.svg';
import '../../../Styles/Landing.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <StyledNavLink href={URL_LANDING_PAGE} className="nav-link-bold">
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink 
                href={USER_GUIDE_LINK} 
                className="nav-link-bold"
                target="_blank"
                rel="noopener noreferrer"
                download="User_Guide_FREDDSS.pdf"
              >
                User Guide
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={`${URL_LANDING_PAGE}#publications`} className="nav-link-bold">
                Publications
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={`${URL_LANDING_PAGE}#team`} className="nav-link-bold">
                Team
              </StyledNavLink>
            </NavItem>
            <NavItem className="mr-3">
              <StyledNavLink href={URL_REGISTER_PAGE} className="nav-link-bold">
                Login/Register
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