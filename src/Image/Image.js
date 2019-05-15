import React, { Component } from 'react'
// import LogoOne from './react2.jpg'

// const picture = require('./react2.jpg');
class Image extends Component{

    render(){
        return(   
            <img src={this.props.picture} alt="logo" />
        )
    }
}

export default Image;