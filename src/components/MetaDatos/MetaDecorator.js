import React, { Component } from "react";
import { Helmet } from "react-helmet";

class MetaDecorator extends Component {
    render() {
  
      let { url, title, description, type} = this.props;
      
  
      return (   
        <Helmet>
            <meta property="og:title" content= {title} />
            <meta property="og:site_name" content="Dreamcode Software"></meta>
            <meta property="og:url" content={`https://dreamcodesoft.com/${url}`} />
            <meta property="og:type" content={type}></meta>
            <meta property="og:description" content= {description} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https://dreamcodesoft.com/${url}`}/>
        </Helmet>
       );
    };
  };




  export default MetaDecorator;