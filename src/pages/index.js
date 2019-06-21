import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoIosCall, IoIosMail } from 'react-icons/io'
import { IconContext } from 'react-icons'

import Layout from 'components/layout'
import AppConfig from 'config/app'
import TripImage from 'images/undraw_trip.svg'
import DesertImage from 'images/undraw_the_desert.svg'
import RunningWildImage from 'images/undraw_running_wild.svg'
import CampingImage from 'images/undraw_camping.svg'
import CampfireImage from 'images/undraw_campfire.svg'
import ExploringImage from 'images/undraw_exploring.svg'
import MomentToRememberImage from 'images/undraw_moment_to_remember.svg'
import SEO from 'components/seo'

const Headline = Styled.section`
  padding: 3% 0 30px;
  h2 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 20px;
    font-weight: normal;
    line-height: 1.2em;
		@media (max-width: 768px) {
			font-size: 2rem;
		}
  }
`
const StyledContacts = Styled.div`
  svg {
    vertical-align: middle;
    margin-right: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 10px -4px 0;
    > li {
      display: inline-block;
      margin: 4px;
      > a {
        display: inline-block;
        padding: 8px 1em;
        color: inherit;
        text-decoration: none;
        border: 2px solid ${props => props.theme.brand};
        line-height: 1;
        border-radius: 5px;
				font-weight: 600;
        &:hover {
          color: white;
          background: ${props => props.theme.brand};
        }
      }
    }
  }
`
const HeroContainer = Styled.section`
  padding: 3rem 0 4rem;
  p {
    padding: 0;
    margin: 0;
    font-size: 1.2em;
  }
  svg {
    max-width: 100%;
    height: auto;
  }
  .trip-image {
    width: 40%;
    float: right;
  }
  @media (max-width: 425px) {
    .trip-image {
      float: none;
      width: 70%;
      margin: 0 auto;
    }
  }
`

const Hero = () => (
  <HeroContainer>
    <div className="trip-image">
      <TripImage />
    </div>
    <div>
      <Headline>
        <h2>Pack your Bags and Escape</h2>
        <h3>You Decide. We make it Happen.</h3>
      </Headline>
      <StyledContacts>
        <div>Contact Us</div>
        <IconContext.Provider value={{}}>
          <ul>
            <li>
              <a
                href={`tel:${AppConfig.contactNumber}`}
                aria-label={`Call us on ${AppConfig.contactNumber}`}
              >
                <IoIosCall />
                {AppConfig.contactNumber}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${AppConfig.email}`}
                aria-label={`Drop us an email at ${AppConfig.email}`}
              >
                <IoIosMail />
                {AppConfig.email}
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </StyledContacts>
    </div>
  </HeroContainer>
)
const StyledDestinationItem = Styled.div`
  display: flex;
  svg {
    height: auto;
    max-width: 100%;
  }
  h3 {
    margin: 0 0 .5em 0;
    font-size: 1.2em;
  }
  p {
    color: #333;
  }
`

const DestinationItem = ({ title, description, Image }) => (
  <StyledDestinationItem>
    <div style={{ minWidth: '100px', width: '100px', marginRight: '20px' }}>
      <Image />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </StyledDestinationItem>
)

DestinationItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Image: PropTypes.func.isRequired,
}

const StyledDestinations = Styled.section`
  border-top: 8px solid #EFEEFF;
  padding: 40px 0 50px;
  header {
    text-align: center;
    h2 {
      font-size: 1.6em;
      margin-bottom: 1em;
      font-weight: bold;
    }
    p {
      color: #333;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    > li {
      float: left;
      width: 50%;
      margin-top: 20px;
      box-sizing: border-box;
			padding: 10px 15px;
      @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
      }
    }
  }
`

const Destinations = ({ destinations }) => (
  <StyledDestinations>
    <div className="container">
      <header>
        <h2>Destinations</h2>
        <p>
          From ocean to desert, from hills to plains, we got all covered with
          start to end customer support.
        </p>
      </header>
      <ul>
        {destinations.map(d => (
          <li key={d.title}>
            <DestinationItem {...d} />
          </li>
        ))}
      </ul>
    </div>
  </StyledDestinations>
)
Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape(DestinationItem.propTypes))
    .isRequired,
}

const destinations = [
  {
    title: 'Rajasthan',
    description:
      'Visit Majestic forts, Thar desert, Beautifully build temples, lakes, and Royalty.',
    Image: DesertImage,
  },
  {
    title: 'Sikkim',
    description:
      'Recharge and rejuvenate your mind and body amidst the tranquility and beauty of the Himalayan Mountains',
    Image: CampingImage,
  },
  {
    title: 'North East',
    description:
      'Seven Sisters. Known for its natural beauty, diversity, rare and unique wildlife, people and culture',
    Image: CampfireImage,
  },
  {
    title: 'Kerala',
    description:
      'Paradise, Beautiful backwaters, Varied demography, Unique culture, and Traditions. Peace of mind.',
    Image: ExploringImage,
  },
  {
    title: 'Gujarat',
    description:
      'Enjoy its unity rich cultural heritage, especially dance (garba and dandiya raas) and food (dhokla, fafda, khakra, etc.)',
    Image: MomentToRememberImage,
  },
  {
    title: 'Bhutan',
    description:
      'Natural beauty, Forest conservation, Gross national happiness, Great culture, Heritage, and Biodiversity',
    Image: RunningWildImage,
  },
]

const StyledMain = Styled.div`
`
const IndexPage = () => (
  <Layout>
    <SEO title="Travel Packages | Hotel Bookings | Transportation | Mice" />
    <StyledMain>
      <div className="container">
        <Hero />
      </div>
      <Destinations destinations={destinations} />
    </StyledMain>
  </Layout>
)

export default IndexPage
