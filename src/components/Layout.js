import React, { Component } from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Landing from "./Landing/Landing";
import "../assets/css/layout.css";
import About from "./About/About";
import resume from "../assets/documents/my-resume.pdf";

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
  constructor(props) {
    super(props);
    this.state = {
      // componentList: {
      //   about: this.refs.about
      // }
    };
    this.compRef = React.createRef();
  }

  // download resume function that is passed to the About.js component
  downloadResume = event => {
    let anchor = document.createElement("a");
    anchor.href = resume;
    anchor.setAttribute("download", "Miles-Resume");
    anchor.click();
    anchor.remove();
    console.log(anchor);
  };

  getRef = el => {
    this.compRef = el;
    console.log(el);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Landing handleScroll={this.handleScrollToComponent} />
        </div>
        <div>
          <About
            file={this.resume}
            downloadResume={this.downloadResume}
            ref={this.getRef}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
