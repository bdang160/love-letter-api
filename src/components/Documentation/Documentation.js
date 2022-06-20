import React, { Component } from "react";
import './Documentation.css';
import SiteHeader from "../SiteHeader/SiteHeader.js";
import DocumentationBody from "../DocumentationBody/DocumentationBody.js";

class Documentation extends Component{

    render() {
        return (
          <div>
              <SiteHeader/>
              <DocumentationBody/>
          </div>
        );
    }
}

export default Documentation;