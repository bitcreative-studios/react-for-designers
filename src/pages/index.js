import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../layouts'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Learn to
            <br /> design and code React&nbsp;apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift
          </p>
          <Link to="/page-2">Watch the video</Link>
        </div>
      </div>
    </Layout>
  )
}

// Page query
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
