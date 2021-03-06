// created using rfc

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// can include external css file and css will be applied as normal but only to this component
// import './CSS_FILE_NAME.css';

// include props here and you can pass in properties from the calling app
const Header = props => {
  // destructure props to get the parts that we want
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* basic a tag for standard linking */}
              {/* <a href="/" className="nav-link">
                Home
              </a> */}

              {/* how to link using react routes */}
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// default props values
Header.defaultProps = {
  branding: 'Contact Manager'
};

// prop types
Header.propTypes = {
  // declare that branding is a string and is required
  branding: PropTypes.string.isRequired
};

export default Header;
