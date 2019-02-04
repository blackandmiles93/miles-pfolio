import React, { Component } from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Landing from './Landing/Landing';
import "../assets/css/layout.css";
import About from './About/About';

// const styles = {
//   root: {
//     display: "flex",
//     flexGrow: 1,
//     backgroundImage: "url(/img/yosemite.jpg)",
//     backgroundPosition: 'center',
//     height: "100vh",
//   }
// }

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Landing />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout;
