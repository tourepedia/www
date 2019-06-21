import React from 'react'
import { Link } from 'gatsby'
import Icon from './../images/logo.jpg'
import Styled from 'styled-components'

const StyledHeader = Styled.nav`
  background: white;
  border-top: 7px solid ${props => props.theme.brand};
  a {
    padding: 0.8rem 0.9rem;
    display: inline-block;
    color: hsl(0, 0%, 10%);
    background: transparent !important;
    &:hover {
      color: black;
    }
    &[aria-current='page'] {
      color: black;
    }
  }
  h1 {
    padding: 0;
    margin: 0;
    margin-left: -0.9rem;
		font-weight: bold;
  }
  h1 > a {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  ul {
    margin-right: -0.9rem;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="d--flex justify-content--between">
          <h1>
            <Link to="/">
              <img
                src={Icon}
                alt="Tourepedia Logo"
                style={{ maxHeight: '40px' }}
              />
              Tourepedia
            </Link>
          </h1>
          <ul className="d--flex align-items--center">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="https://tourepedia.github.io/tp-ui">Design</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
