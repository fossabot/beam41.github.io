import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'

import styles from './about.module.scss'

const AboutPage = ({ data }) => (
  <div className="article">
    <SEO title="About" />
    <h2>About</h2>
    <section className={styles.about}>
      <div className={styles.image}>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div className={styles.info}>
        <div className={styles.part}>
          <h3>My name is Phumdol Lookthipnapha.</h3>
          <p>
            or you can call me <b>Meehoi</b>
          </p>
        </div>
        <div className={styles.part}>
          <p>Web Developer, Photographer, Gamer, Memer.</p>
          <p>I study Computer Science at Chiang Mai University.</p>
          <p>
            Please enjoy the image of Ang Kaew Reservoir at my University :)
          </p>
        </div>
        <div className={styles.part}>
          <h4>Social/Contact</h4>
          <ul>
            <li>
              GitHub: <a href="https://github.com/beam41">beam41</a>
            </li>
            <li>
              GitLab: <a href="https://gitlab.com/beam41">beam41</a>
            </li>
            <li>
              DEV: <a href="https://dev.to/meehoi">Meehoi</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/phumdol-lookthipnapha-ab84011a3/">
                Phumdol Lookthipnapha
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:beam_baimon@hotmail.com">phumdol.l@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "IMG_8667.jpg" }) {
      childImageSharp {
        fixed(width: 600, height: 600, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
