import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo.png";

const Header = ({ siteTitle }) => (
    <header id="header" className="alt">
        <span className="logo"><img style={{ 'max-width': '100px' }}src={logo} alt="" /></span>
        <h1>
            <Link to="/">{siteTitle}</Link>
        </h1>
        <p></p>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


