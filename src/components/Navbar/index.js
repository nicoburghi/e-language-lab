import PropTypes from "prop-types"
import React from "react"
import { useInView } from 'react-intersection-observer';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ items }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        initialInView: true,
    })

    return (
        <div ref={ref}>
            <nav id="nav" className={!inView ? 'alt' : ''}>
                <ul>
                    <li>
                        <Link
                                activeClass="active"
                                to="intro"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Intro
                        </Link>
                    </li>
                    <li>
                        <Link
                                activeClass="active"
                                to="english-lessons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                English Lessons
                        </Link>
                    </li>
                    <li>
                        <Link
                                activeClass="active"
                                to="spanish-lessons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Spanish Lessons
                        </Link>
                    </li>
                    <li>
                        <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Sobre mi
                        </Link>
                    </li>
                    {/*
                    <li><a href="#intro" className="active">Intro</a></li>
                    <li><a href="#english-lessons">English Lessons</a></li>
                    <li><a href="#spanish-lessons">Spanish Lessons</a></li>
                    <li><a href="#about">Sobre mi</a></li>
                    */}
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


