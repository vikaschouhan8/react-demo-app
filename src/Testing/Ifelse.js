import React, { Component } from 'react'

class Ifelse extends Component {
    state = {
        isLoggedIn:true
    }

    render() {
        return (
                this.state.isLoggedIn && <div>True</div>
        )
    }
}

export default Ifelse
