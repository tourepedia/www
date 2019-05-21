import React from 'react'
import { Link } from 'gatsby'
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoGoogleplus,
  IoLogoTwitter,
  IoIosCall,
  IoIosMail,
} from 'react-icons/io'
import { IconContext } from 'react-icons'
import Styled from 'styled-components'

import AppConfig from 'config/app'

const StyledFooter = Styled.footer`
  background: #FAFAFF;
  padding: 40px 0;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .copy-right {
    float: left;
    padding: 10px 0;
  }
  nav {
    border-bottom: none;
    float: right;
  }
  a {
    background: transparent !important;
  }
  svg {
    vertical-align: middle;
    &:first-child {
      margin-right: 10px;
    }
  }
`

const Divider = Styled.hr`
  border-bottom: 3px solid #E4E4FF;
`

const MenuList = Styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  > li {
    margin-top: 10px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="d--flex justify-content--between">
          <div style={{ flex: 1 }}>
            <div>
              <b>Support</b>
            </div>
            <MenuList>
              <li>
                <Link to="/privacy-policies">Privacy Policies</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </MenuList>
          </div>
          <div style={{ flex: 1 }}>
            <b>Meet Us</b>
            <div>
              <address>
                <div>
                  Tourepedia Holidays, Near Sangram Bhawan, Development Area
                  Taxi Stand, Gangtok
                  <br />
                  Sikkim, India, 737101
                  <br />
                  <IconContext.Provider value={{ color: '#ccc' }}>
                    <a
                      href={`tel:${AppConfig.contactNumber}`}
                      aria-label={`Call us on ${AppConfig.contactNumber}`}
                      style={{ color: 'inherit' }}
                    >
                      <IoIosCall />
                      {AppConfig.contactNumber}
                    </a>
                  </IconContext.Provider>
                </div>
              </address>
            </div>
          </div>
        </div>
        <Divider />
        <div style={{ fontSize: '30px' }}>
          <IconContext.Provider value={{ color: '#ec6333' }}>
            <a
              href={AppConfig.urls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Checkout our facebook page"
            >
              <IoLogoFacebook />
            </a>
            <a
              href={AppConfig.urls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect us on Linkedin"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href={AppConfig.urls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on twitter"
            >
              <IoLogoTwitter />
            </a>
            <a
              href={AppConfig.urls.googlePlus}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on google plus"
            >
              <IoLogoGoogleplus />
            </a>
            <a
              href={`mailto:${AppConfig.email}`}
              aria-label={`Drop us an email at ${AppConfig.email}`}
            >
              <IoIosMail />
            </a>
          </IconContext.Provider>
        </div>
        <div>&copy; 2019 Tourepedia. All right reserved.</div>
      </div>
    </StyledFooter>
  )
}

export default Footer
