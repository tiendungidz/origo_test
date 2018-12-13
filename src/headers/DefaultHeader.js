import React, { Component } from 'react';


class DefaultHeader extends Component {
	render() {
    	return (
        	<header className="HeaderWrapper">
            	<a className="HeaderTitle Title" href="/">OSLO BYSYKKEL</a>
            	<a className="HeaderItem Bread" href="/stations">Hjem</a>
        	</header>
    	);
  	}
}

export default DefaultHeader;