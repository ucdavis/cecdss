import { faBook, faHome, faNewspaper, faPlus } from '@fortawesome/free-solid-svg-icons';
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
import styled, { keyframes } from 'styled-components';
import { URL_LANDING_PAGE, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import logo from '../../../Resources/Images/logo.svg';
import '../../../Styles/Landing.css';
import { trackEvent } from '../../Utils/gaAnalytics';


interface NavbarProps {
  isParallaxScrolled: boolean;
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isParallaxScrolled, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar className="shadow-md fixed-top px-5" color="light" light expand="md">
      <NavbarBrand href="/" className="d-flex align-items-center gap-x-2">
        <img src={logo} alt="Logo" className="h-8" />
        <StretchText isStretched={isParallaxScrolled}>FRREDSS</StretchText>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto flex flex-column flex-md-row align-items-center justify-content-center gap-y-2 gap-md-4">
          <NavItem onClick={() => trackEvent('Navbar Links', 'Click', 'Go to Home')}>
            <StyledNavLink href={URL_LANDING_PAGE}>
              {(!isMobile && isParallaxScrolled) ? <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.3em', margin: '0' }}  /> : 'Home'}
            </StyledNavLink>
          </NavItem>
          <NavItem onClick={() => trackEvent('Navbar Links', 'Click', 'Go to User Guide')}>
            <StyledNavLink 
              href={USER_GUIDE_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              download="User_Guide_FREDDSS.pdf"
            >
              {(!isMobile && isParallaxScrolled) ? <FontAwesomeIcon icon={faBook} style={{ fontSize: '1.3em', margin: '0 0 0 1em' }}  /> : 'User Guide'}
            </StyledNavLink>
          </NavItem>
          <NavItem onClick={() => trackEvent('Navbar Links', 'Click', 'Go to Publications')}>
            <StyledNavLink href={`${URL_LANDING_PAGE}#publications`}>
              {(!isMobile && isParallaxScrolled) ? <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: '1.3em', margin: '0 1.2em 0 1em' }} /> : 'Publications'}
            </StyledNavLink>
          </NavItem>
          <NavItem onClick={() => trackEvent('Navbar Links', 'Click', 'Go to New Model Run')}>
            <Button
              style={{ background: '#395442', borderColor: '#395442' }}
              href={URL_MODEL_PAGE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-1" />
              {(!isMobile && isParallaxScrolled) ? '' : 'Run New Model'}
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

const stretchAnimation = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.2, 0.8); }
  100% { transform: scale(1, 1); }
`;

const StretchText = styled.div<{ isStretched: boolean }>`
  display: inline-block;
  font-weight: bold;
  animation: ${props => props.isStretched ? stretchAnimation : 'none'} 0.3s ease-in-out;
`;
