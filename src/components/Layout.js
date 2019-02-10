import React, { Component } from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Landing from "./Landing/Landing";
import "../assets/css/layout.css";
import About from "./About/About";
import Resume from "../components/Resume/Resume";
import resumeFile from "../assets/documents/my-resume.pdf";
import { CssBaseline } from "@material-ui/core";

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
    this.refs = {};
    this.compRef = React.createRef();
    console.log(this.compRef);
  }

  // download resume function that is passed to the About.js component
  downloadResume = event => {
    let anchor = document.createElement("a");
    anchor.href = resumeFile;
    anchor.setAttribute("download", "Miles-Resume");
    anchor.click();
    anchor.remove();
    console.log(anchor);
  };

  getRef = el => {
    this.compRef = el;
    console.log(el);
  };

  handleScrollToComponent(name) {
    this.props.compRef.current.scrollIntoView();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
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
          <Resume />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
