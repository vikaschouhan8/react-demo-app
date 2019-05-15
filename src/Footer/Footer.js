import React from 'react'
import Image from '../Image/Image'

const element1 = (
    <>
        <div className="text-center">
            <p>Copyright ITS India</p>        
        </div>
    </>
)
// const element2 = (
//     <>
//         <div>
//             <h6>Footer element Two</h6>
//         </div>
//     </>
// )
export default class Footer extends React.Component{
    state = {
        name:"Footer",
        count:0
    }
    change = () => {
        if(this.state.count%2) {
            this.setState({
                name:element1
            })
        }else{
            this.setState({
                name:"New Footer"
            })
        }
        // this.state.count++
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
                <Image picture="./react.jpg" />
                <button onClick={this.props.text}>Change Name</button>                
                <button onClick={this.change}>Change Name</button>
                {this.state.name}
                {/* {element1}
                {element2} */}
                {this.state.count}
            </>
        )
    }
}