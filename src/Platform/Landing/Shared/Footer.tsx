import React from "react";
import styled from "styled-components";
import ucDavisLogo from '../../../Resources/Images/ucDavisLogo.svg'

const Footer = () => {
    return (
        <div className="bg-brand w-full h-auto pt-8 pb-2 px-8 flex flex-col">
            <div className="flex items-start justify-between w-full h-full">
              <div className="flex flex-col justify-between h-full ">
                 <img src={ucDavisLogo} alt="UC Davis Logo" className="w-200p" />
              </div>
               <div className="flex items-start justify-center gap-x-16">
                    <div className="text-left flex flex-col ml-8">
                        <div className="text-18p font-bold mb-6 text-white">Site Links</div>
                        <FooterLink href="/pages/home">
                            Home
                        </FooterLink>
                        <FooterLink href="#">
                            User Guides
                        </FooterLink>
                        <FooterLink href="/pages/home#publications">
                            Publications
                        </FooterLink>
                        <FooterLink href="/pages/model">
                            Run Model
                        </FooterLink>
                    </div>
                    <div className="text-left flex flex-col gap-y-3 ml-4">
                        <div className="text-left flex flex-col">
                          <div className="text-18p font-bold mb-6 text-white">Legal</div>
                          <FooterLink href="#">
                              Terms of Use
                          </FooterLink>
                          <FooterLink href="https://privacy.ucdavis.edu/web-page-privacy">
                              Privacy Policy
                          </FooterLink>
                        </div>
                        <div className="text-left flex flex-col ">
                          <div className="text-18p font-bold mb-2 text-white">Last Updated</div>
                          <div className="text-white text-16p">
                              27 Aug, 2024
                          </div>
                        </div>
                    </div>
                    <div className="text-left flex flex-col ml-4">
                        <div className="text-18p font-bold mb-6 text-white">Contact Us</div>
                        <FooterLink href="mailto:frredss@ucdavis.edu">
                            Mail Us
                        </FooterLink>
                        <FooterLink href="https://www.ucdavis.edu/">
                            UC Davis Site
                        </FooterLink>
                    </div>
               </div>
            </div>
              <div className="px-8 m-2 border-gray-400 border-solid border-1p"></div>
              <div className="w-full flex items-center justify-center p-8">
              <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://ucdavis.edu/" className="hover:underline">University of California</a>. All Rights Reserved.
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