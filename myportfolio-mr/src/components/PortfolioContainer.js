import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Container from "./Container";
import { render } from "react-dom";

class PortfolioContainer extends Component {


    

        state = {
            currentPage: "Home"
        };

        handlePageChange = page => {
            this.setState({ currentPage: page });

        };

        renderPage = () => {
            if (this.state.currentPage === "Home") {
                return <Home />
            } else {
                return <Contact />
            }


        }

        render() {
        return (
            <div>

                {/* <Container> */}

                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}

                <Footer />

                {/* </Container> */}



            </div>
        )
    }
}

export default PortfolioContainer;
