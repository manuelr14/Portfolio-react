import React, {Component} from "react"; 
import Navbar from "./Navbar";
import Footer from "./Footer"
import Container from "./Container";
import { render } from "react-dom";

// class PortfolioContainer extends Component {

// render(){
    function PortfolioContainer(){

    return(
        <div>
            
            {/* <Container> */}
                
                <Navbar/>
                <Footer/>

            {/* </Container> */}



        </div>
    )
}
// }

export default PortfolioContainer;
