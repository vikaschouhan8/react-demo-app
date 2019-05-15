import React, {Component} from 'react'

class Sidebar extends Component{
    render(){
        return(
            <>
                <a href={this.props.link1}>{this.props.link1}</a>
                <a href={this.props.link2}>{this.props.link2}</a>
                <a href={this.props.link3}>{this.props.link3}</a>
                <a href={this.props.link4}>{this.props.link4}</a>
                <a href={this.props.link5}>{this.props.link5}</a>
            </>
        )
    }
}

export default Sidebar;