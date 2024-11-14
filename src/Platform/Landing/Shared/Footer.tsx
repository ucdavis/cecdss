import styled from "styled-components";
import ucDavisLogo from '../../../Resources/Images/ucDavisLogo.svg';
import { trackEvent } from "../../Utils/gaAnalytics";

const Footer = () => {
    return (
        <div className="w-full h-auto pt-8 pb-2 px-8 flex flex-col">
            <div className="footer-content">
              <div className="footer-logo">
                 <img src={ucDavisLogo} alt="UC Davis Logo" className="w-200p" />
              </div>
               <div className="footer-links">
                    <div className="footer-section">
                        <div className="text-18p font-bold mb-6 text-white">Site Links</div>
                        <FooterLink href="/pages/home">Home</FooterLink>
                        <FooterLink href="#">User Guides</FooterLink>
                        <FooterLink href="/pages/home#publications">Publications</FooterLink>
                        <FooterLink href="/pages/model">Run Model</FooterLink>
                    </div>
                    <div className="footer-section">
                        <div className="text-18p font-bold mb-6 text-white">Legal</div>
                        <FooterLink href="https://privacy.ucdavis.edu/web-page-privacy" onClick={() => trackEvent('Footer Links', 'Click', 'Open Privacy Policy')}>Privacy Policy</FooterLink>
                        <div className="text-18p font-bold mb-2 text-white">Last Updated</div>
                        <div className="text-white text-16p">14 Nov, 2024</div>
                    </div>
                    <div className="footer-section">
                        <div className="text-18p font-bold mb-6 text-white">Contact Us</div>
                        <FooterLink href="mailto:frredss@ucdavis.edu" onClick={() => trackEvent('Footer Links', 'Click', 'Contact Us')}>Mail Us</FooterLink>
                        <FooterLink href="https://www.ucdavis.edu/" onClick={() => trackEvent('Footer Links', 'Click', 'Go to UC Davis Site')}>UC Davis Site</FooterLink>
                    </div>
               </div>
            </div>
            <div className="divider"></div>
            <div className="w-full flex items-center justify-center p-8">
              <span className="text-sm text-white sm:text-center dark:text-gray-400">
                © 2019-2024 <a href="https://ucdavis.edu/" className="hover:underline">The Regents of the University of California</a>. All Rights Reserved.
              </span>
            </div>
        </div>
    );
};

export default Footer;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #fff;
        transition: 200ms ease-in;
    }
`;
