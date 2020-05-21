import React from "react";

function Navbar(props){

    return (

        <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
        <div className="container-fluid"><a className="navbar-brand" href="#"><i className="fa fa-instagram"></i>&nbsp;<i
                    className="fa fa-twitter-square"></i>&nbsp;<i className="fa fa-snapchat-square"></i>&nbsp;<i
                    className="fa fa-facebook-square"></i></a><button data-toggle="collapse" className="navbar-toggler"
                data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span
                    className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse text-left" id="navcol-1">
                <ul className="nav navbar-nav flex-grow-1 justify-content-between">
                    <li className="nav-item" role="presentation"><a className="nav-link active text-monospace"
                            href="#" onClick={() => props.handlePageChange("Home")}>/Home</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link active text-monospace"
                            href="https://github.com/manuelr14" target="_blank">/Github</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link active text-monospace"
                            href="https://www.linkedin.com/in/manuel-ramirez-381780142/"
                            target="_blank">/LinkedIn</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link text-monospace"
                            href={require('./img/MRamirez_Resume_2020.pdf')} target="_blank">/Resume</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link text-monospace"
                            href="#"onClick={() => props.handlePageChange("Contact")}>/Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    // <div>Hello world</div>

    )
}

export default Navbar;