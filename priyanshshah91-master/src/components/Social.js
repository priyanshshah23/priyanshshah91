import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div className="social-container">
<a
  href="https://github.com/priyanshshah23"
  className="facebook social"
>
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
<a href="https://www.twitter.com/Priyansh2311" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/priyansh_shah23"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
        )
    }
}

export default Social



