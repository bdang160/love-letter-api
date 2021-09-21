import React, { Component } from 'react';
import './SiteHeader.css';

class SiteHeader extends Component {

    render () {
        return (
            <div className="jumbotron">
                <h1 className='white tc'>Love Letter API</h1>
                <p className="white tc">This is an API for the popular card game Love Letter!</p>
                <p className="white tc">Game related data is accessible via a RESTful API</p>
            </div>
        );
    }
}

export default SiteHeader;