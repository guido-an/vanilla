import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'
import Seo from '../components/seo'

const BlogTemplate = ({ pageContext: { locale }, data }) => {
  const post = data.wordpressPost
  console.log(post, 'post')

  return (
    <Layout locale={locale} data={data}>
      <Seo title={post.title} />
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
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
    }
  }
`
