import React, { Component } from 'react'
import pt from 'prop-types'
import style from './Nav.module.css'

// const link = ['link1','link2','link3','link4']
// const x = 'this.props.data'
// const li = link.map(n => <li>{x.n}</li>) 

// const linkItems = numbers.map((number) =>
//   <li>{number}</li>
// );   

class Nav extends Component{
    render(){
        return(
            <>
            <ul className={style.colorRed}>
                {/* {li} */}
                <li>{this.props.data.link1}</li>
                <li>{this.props.data.link2}</li>
                <li>{this.props.data.link3}</li>
                <li>{this.props.data.link4}</li>
                {console.log(this.props.data)}
            </ul>
            </>
        )
    }
}

Nav.propTypes = {
    data:pt.object
}
export default Nav;