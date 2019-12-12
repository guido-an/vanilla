import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"
import FooterCta from "../components/footerCta"
import "./contact.css"


const Contact = ({ pageContext: { locale }, data }) => {

  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Contatti" />
      <section className="margin-top">
        <div className="contact-page-container">
          <h1>hello</h1>
          <span>.</span>
          <p className="subtitle-page">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            commodi unde doloribus laboriosam
          </p>
          <div className="contact-info-container">
            <div>
            <Img className="icons-contact-page" fluid={data.phoneIcon.childImageSharp.fluid} />
              <p>
                <strong>Telefono</strong>
              </p>
              <a href="tel:+393516711311">
                <p>+39 351 671 1311</p>
              </a>
              <a href="tel:+39071204002">
                <p>+39 071 204002</p>
              </a>
            </div>

            <div>
            <Img className="icons-contact-page" fluid={data.emailIcon.childImageSharp.fluid} />
              <p>
                <strong>Email</strong>
              </p>
              <a href="mailto:info@vanillamarketing.it">
                <p>info@vanillamarketing.it</p>
              </a>
              <a href="mailto:careers@vanillamarketing.it">
                <p>careers@vanillamarketing.it</p>
              </a>
            </div>
            <div>
            <Img className="icons-contact-page" fluid={data.socialIcon.childImageSharp.fluid} />
              <p>
                <strong>Social</strong>
              </p>
              <a
                href="https://www.facebook.com/AgenziaVanillaMarketing"
                target="_blank"
              >
                <p>Facebook</p>
              </a>
              <a
                href="https://www.instagram.com/vanilla.marketing/"
                target="_blank"
              >
                <p>Instagram</p>
              </a>
            </div>
            <div>
            <Img className="icons-contact-page" fluid={data.addressIcon.childImageSharp.fluid} />
              <p>
                <strong>Indirizzo</strong>
              </p>
              <a href="https://www.google.com/maps/place/Corso+Garibaldi,+91,+60121+Ancona+AN,+Italia/@43.6177873,13.5117078,17z/data=!3m1!4b1!4m5!3m4!1s0x132d7fbc3dca2295:0xaef827aca378eaf8!8m2!3d43.6177834!4d13.5138965" target="_blank">
                <p style={{ lineHeight: "32px" }}>
                  Corso Garibaldi 91/b,
                  <br /> Ancona, 60129
                </p>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Contact($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
      }
    }
    emailIcon: file(relativePath: { eq: "email-icona-contatti.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoneIcon: file(relativePath: { eq: "telefono-icona-contatti.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      addressIcon: file(relativePath: { eq: "indirizzo-icona-contatti.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialIcon: file(relativePath: { eq: "social-icona-contatti.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default Contact