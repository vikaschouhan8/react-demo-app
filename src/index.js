import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';
import Sidebar from './Sidebar/Sidebar';
import Image from './Image/Image'
import List from './List/List'
import Footer from './Footer/Footer'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const data = {
    link1 : 'Home',
    link2 : 'About',
    link3 : 'Careers',
    link4 : 'Contact'
}

const text = () => {
    console.log("Text function")
}
ReactDOM.render(
    <Nav data={data} />,
    document.getElementById('nav')
)

ReactDOM.render(
    <Sidebar link1="Home" link2="About" link3="Careers" link4="Contacts" link5="Gallery" />,
    document.getElementById('sidebar')    
)

ReactDOM.render(
    <List data={[0,1,2]} x='5'  />,
    document.getElementById('list')
)

ReactDOM.render(
    <Image picture="./react2.jpg" />,
    document.getElementById('image')
)

ReactDOM.render(
    <Footer text={text} />,
    document.getElementById('footer')
)
// ReactDOM.render(
//     <Image picture="./react.jpg" />,
//     document.getElementById('footerLogo')
// )

// ReactDOM.render(
//     <Footer />,
//     document.getElementById('text')
// )