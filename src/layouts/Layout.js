import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => {
  const renderFunction = data => (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'sample, react, design, code' },
        ]}
      />
      <Header />
      {children}
    </>
  )
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleAndDescriptionQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={renderFunction}
    />
  )
}

export default Layout
