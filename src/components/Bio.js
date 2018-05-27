import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profilePic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Raghav Mangrola`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Raghav Mangrola</strong> who lives and works in Santa
          Monica building useful things.{' '}
          <a href="https://twitter.com/RaghavMangrola">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
