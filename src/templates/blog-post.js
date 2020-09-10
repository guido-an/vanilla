import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import FooterCta from "../components/footerCta"
import Seo from '../components/seo';
import Img from "gatsby-image"

const BlogTemplate = ({pageContext: { locale }, data }) => {
  const post = data.wordpressPost
  return (
    <Layout locale={locale} data={data}>
      <Seo title={post.yoast_title} description={post.yoast_meta[0].content} />
      {post.featured_media && <Img fluid={post.featured_media.localFile.childImageSharp.fluid}/>}
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <FooterCta
        linkGetStarted={data.header.childHeaderJson.linkGetStarted}
        textGetStarted={data.header.childHeaderJson.textGetStarted}
        title={data.footerCta.childFooterCtaJson.title}
        subtitle={data.footerCta.childFooterCtaJson.subtitle}
      />
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query currentPostQuery($id: String!) {
    header: file(name: { eq: "it" }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
        textGetStarted
      }
    }
    footerCta: file(
      name: { eq: "it" }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
    wordpressPost(id: { eq: $id }) {
      title
      content
      yoast_title
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      yoast_meta{
        property
        content
      }
    }
  }
`
