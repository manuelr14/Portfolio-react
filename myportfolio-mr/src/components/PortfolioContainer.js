import React, {Component} from "react"; 
import Navbar from "./Navbar";
import Footer from "./Footer"
import Home from "./pages/Home"
import Container from "./Container";
import { render } from "react-dom";

// class PortfolioContainer extends Component {

// render(){
    function PortfolioContainer(){

    return(
        <div>
            
            {/* <Container> */}
                
                <Navbar/>
                <Home/>
                <Footer/>

            {/* </Container> */}



        </div>
    )
}
// }

export default PortfolioContainer;
