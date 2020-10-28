import PropTypes from "prop-types"
import React from "react"
import { useInView } from 'react-intersection-observer';

const Navbar = ({ items }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true,
    })

    return (
        <div ref={ref}>
            <nav id="nav" className={!inView ? 'alt' : ''}>
                <ul>
                    <li><a href="#intro" className="active">Intro</a></li>
                    <li><a href="#english-lessons">English Lessons</a></li>
                    <li><a href="#spanish-lessons">Spanish Lessons</a></li>
                    <li><a href="#about">Sobre mi</a></li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
}

Navbar.defaultProps = {
    items: [],
}

export default Navbar


