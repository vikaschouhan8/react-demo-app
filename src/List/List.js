import React, {Component} from 'react'
import Pt from 'prop-types'

class List extends Component{
    state = {
        name : this.props.data
    };

    handleFunction = (props) =>{ 
         console.log(this)
        if(props.data === 'SecCon'){
            this.setState({
                name : props.data
            })
        }else{
            this.setState({
                name : 'Nothing'
            })
        }
    }

    addText = (name,e) =>{
        this.setState({
            name:name
        })
        console.log(e.detail)
    }
    render(){
        return(
            <>
            <ul>
                
                <li>
                    <button onClick={this.handleFunction}> Check State</button>
                   Control Flow. Probably the most basic topic on the list. ...
                </li>
                <li>
                    <button onClick={e=>this.addText('VikassH',e)}>{this.state.name}</button>
                    Error handling. This took a while for me. ...
                </li>
                <li>
                    {this.state.name} Models. ...
                </li>
                <li>
                    Asynchronity {this.props.x} ...
                </li>
                <li>
                    DOM Manipulation. ...
                </li>
                <li>
                    Node.js / Express. ...
                </li>
                <li>
                    Functional Approach. ...
                </li>
                <li>
                    Object Oriented Approach.
                </li>
            </ul>
            </>
        )
    }

}

List.propTypes = {
    data: Pt.array
}
export default List;