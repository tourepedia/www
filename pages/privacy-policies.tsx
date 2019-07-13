import React from 'react'

import Seo from './../components/Seo'
import appConfig from './../config/app'
import Layout from '../components/Layout'
import { Container } from '../components/Grid'

export function StyledMain({ children }: React.HTMLProps<HTMLDivElement>) {
  return (
    <main className="main-content">
      <style jsx global>{`
        .main-content {
          padding: 40px 0;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        .main-content p {
          color: #333;
          margin-bottom: 20px;
        }
        .main-content h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.25rem;
        }
        .main-content h3 {
          margin: 40px 0 20px;
        }
        .main-content a {
          text-decoration: none;
          border-bottom: 1px solid silver;
        }
        .main-content a&:hover {
          text-decoration: none;
        }
        .main-content li + li {
          margin-top: 20px;
        }
      `}</style>
      {children}
    </main>
  )
}

export default function PrivacyPolicies() {
  return (
    <Layout>
      <Seo title="Privacy Policies" />
      <Container>
        <StyledMain>
          <div>
            <h2>Privacy Policies</h2>
            <p>
              This Privacy Policy governs the manner in which Starzone
              Tourepedia Ventures Pvt. Ltd. (henceforth referred to as
              "Tourepedia", "Company", "we", "our" or "us") collects, uses,
              maintains and discloses information collected from users (each, a
              "User") of the http://www.tourepedia.com website ("Site" or
              "website").
            </p>
            <section>
              <h3>Personal Identification Information</h3>
              <p>
                We may collect personal identification information when Users
                visit our site, register on the site, place an order, fill out a
                form, respond to a survey, and in connection with other
                activities, services, features or resources we make available on
                our Site. Users may be asked for, as appropriate, name, email
                address, mailing address, phone number and social security
                number. Users may, however, visit our Site as guests. We will
                collect personal identification information from Users only if
                they voluntarily submit such information to us. Users may
                however refuse to supply personal identification information,
                except that it is required in certain Site related activities.
              </p>
            </section>
            <section>
              <h3>Non-personal identification information</h3>
              <p>
                We may collect non-personal identification information about
                Users whenever they interact with our Site. Non-personal
                identification information may include the browser name, the
                type of computer and technical information about Users means of
                connection to our Site, such as the operating system and the
                Internet service providers utilized and other similar
                information.
              </p>
            </section>
            <section>
              <h3>Web browser cookies</h3>
              <p>
                When you visit to our site for our website will send cookies
                that get stored in your browser so as to enhance the
                availability of the website for future use. It prevents delay in
                loading the pages of the website due to slower internet
                connections. Most browsers accept cookies automatically but you
                may choose to deny the cookies but this may lead to
                malfunctioning in the site when you use it next time. Cookies
                may also be used to carry out transactions and disabling them
                may affect the functionality of this website.
              </p>
              <p>
                Cookies are important to us as they give us an estimate of the
                traffic on the website and which pages or sections have the
                maximum number of clicks, so that we can improve our website and
                tailor it to the needs of our users.
              </p>
              <p>
                By accessing the cookies it gives us no way by which we can
                access your personal files in your computer or your browser
                history. Cookies are only a link to you and our browsing website
              </p>
            </section>
            <section>
              <h3>How we use collected information</h3>
              <p>
                Tourepedia may collect and use Users personal information for
                the following purposes:
              </p>
              <ul>
                <li>To run and operate our Site</li>
                <li>
                  We may need your information display content on the Site
                  correctly.
                </li>
                <li>To improve customer service</li>
                <li>
                  Information you provide helps us respond to your customer
                  service requests and support needs more efficiently.
                </li>
                <li> To personalize user experience</li>
                <li>
                  We may use information in the aggregate to understand how our
                  Users as a group use the services and resources provided on
                  our Site.
                </li>
                <li>To improve our Site</li>
                <li>
                  We may use feedback you provide to improve our products and
                  services.
                </li>
                <li>
                  To run a promotion, contest, survey or other Site feature
                </li>
                <li>
                  To send Users information they agreed to receive about topics
                  we think will be of interest to them.
                </li>
                <li>To send periodic emails</li>
                <li>
                  We may use the email address to send User information and
                  updates pertaining to their order. It may also be used to
                  respond to their inquiries, questions, and/or other requests.
                </li>
              </ul>
            </section>
            <section>
              <h3>How we protect your information</h3>
              <p>
                We adopt appropriate data collection, storage and processing
                practices and security measures to protect against unauthorized
                access, alteration, disclosure or destruction of your personal
                information, username, password, transaction information and
                data stored on our Site.
              </p>
            </section>
            <section>
              <h3>Sharing your personal information</h3>
              <p>
                We may share information with third parties like our travel
                partners (hotels, tour operators, cab/taxi/bus operators etc.)
                to organize customer’s trip, or other purposes. We may use third
                party service providers to help us operate our business and the
                Site or administer activities on our behalf, such as sending out
                newsletters or surveys. We may share your information with these
                third parties for those limited purposes provided that you have
                given us your permission.
              </p>
            </section>
            <section>
              <h3>Electronic newsletters</h3>
              <p>
                If User decides to opt-in to our mailing list, they will receive
                emails that may include company news, updates, related product
                or service information, etc. If at any time the User would like
                to unsubscribe from receiving future emails, we include detailed
                unsubscribe instructions at the bottom of each email or User may
                contact us via our Site. We may use third party service
                providers to help us operate our business and the Site or
                administer activities on our behalf, such as sending out
                newsletters or surveys. We may share your information with these
                third parties for those limited purposes provided that you have
                given us your permission.
              </p>
            </section>
            <section>
              <h3>Third party websites</h3>
              <p>
                Users may find advertising or other content on our Site that
                link to the sites and services of our partners, suppliers,
                advertisers, sponsors, licensors and other third parties. We do
                not control the content or links that appear on these sites and
                are not responsible for the practices employed by websites
                linked to or from our Site. In addition, these sites or
                services, including their content and links, may be constantly
                changing. These sites and services may have their own privacy
                policies and customer service policies. Browsing and interaction
                on any other website, including websites which have a link to
                our Site, is subject to that website's own terms and policies.
              </p>
            </section>
            <section>
              <h3>Compliance with children's online privacy protection act</h3>
              <p>
                Protecting the privacy of the very young is especially
                important. For that reason, we never collect or maintain
                information at our Site from those we actually know are under
                13, and no part of our website is structured to attract anyone
                under 13 .
              </p>
            </section>
            <section>
              <h3>Changes to this privacy policy</h3>
              <p>
                Tourepedia has the discretion to update this privacy policy at
                any time. When we do, we will post a notification on the main
                page of our Site, revise the updated date at the bottom of this
                page or send you an email. We encourage Users to frequently
                check this page for any changes to stay informed about how we
                are helping to protect the personal information we collect. You
                acknowledge and agree that it is your responsibility to review
                this privacy policy periodically and become aware of
                modifications.
              </p>
            </section>
            <section>
              <h3>Your acceptance of these terms</h3>
              <p>
                By using this Site, you signify your acceptance of this policy.
                If you do not agree to this policy, please do not use our Site.
                Your continued use of the Site following the posting of changes
                to this policy will be deemed your acceptance of those changes.
              </p>
            </section>
            <section>
              <h3>Contacting us</h3>
              <p>
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with this site, please
                contact us at{' '}
                <a href={`mailto:${appConfig.supportEmail}`}>
                  {appConfig.supportEmail}
                </a>{' '}
                .
              </p>
            </section>
            <p>This document was last updated on 9th July, 2019</p>
          </div>
        </StyledMain>
      </Container>
    </Layout>
  )
}

export const config = {
  amp: 'hybrid',
}
