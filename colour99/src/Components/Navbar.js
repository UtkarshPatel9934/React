import React from 'react'
import PropTypes from 'prop-types'
// importing proptypes

export default function Navbar(props){
    return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<div className="container-fluid">
		{/* Resolve the props.title from the title attribute value in the app.js file */}
	  <a className="navbar-brand" href="/">{props.title}</a>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	      <li className="nav-item">
		<a className="nav-link active" aria-current="page" href="/">{props.home}</a>
	      </li>
	      <li className="nav-item">
		<a className="nav-link" href="/">{props.about}</a>
	      </li>
	    </ul>
	    <form className="d-flex">
	      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
	      <button className="btn btn-outline-success" type="submit">Search</button>
	    </form>
	  </div>
	</div>
      </nav>
    )
}



// props types:

// specify the default values of the props
Navbar.defaultProps = {
	title: "Set Title Here....",
	about: "About Goes Here..."
}

// it ensure that we passes props is always follows the Dataypes:
// cross check the props types 
Navbar.propTypes = {
	title: PropTypes.string,
	about: PropTypes.string,
	home: PropTypes.string.isRequired,
}
	