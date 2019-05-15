import React from 'react'
import Nav from './Nav/Nav'

const Header = () => {
    return(
        <>
        <h2 class="float">ITS India</h2>
        <div class="nav" id="nav">
            <Nav />
        </div>
        <div class="clear-fix"></div>
        </>
    )
}

export default Header;