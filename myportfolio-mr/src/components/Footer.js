import React from "react";

function Footer() {

    return (

        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3 className="text-monospace">Services</h3>
                            <ul>
                                <li><a className="text-monospace" href="#">/Web design</a></li>
                                <li><a className="text-monospace" href="#">/Development</a></li>
                                <li><a className="text-monospace" href="#">/Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3 className="text-monospace">Profiles</h3>
                            <ul>
                                <li><a className="text-monospace" href="https://github.com/manuelr14"
                                    target="_blank">/Github</a></li>
                                <li><a className="text-monospace" href="https://www.linkedin.com/in/manuel-ramirez-381780142/"
                                    target="_blank">/LinkedIn</a></li>
                                <li><a className="text-monospace" href="./img/MRamirez_Resume_2020.pdf"
                                    target="_blank">/Resume</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3 className="text-monospace">Contact Information</h3>
                            <p className="text-monospace">&lt; Manuel Ramirez &gt;<br></br>cel &nbsp;&nbsp;<i
                                className="fa fa-mobile-phone"></i>&nbsp; : +1 (786)-389-0792<br></br>email&nbsp;<i
                                    className="fa fa-envelope-o"></i> : manura14@hotmail.com</p>
                    </div>
                                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i
                                    className="icon ion-social-twitter"></i></a><a href="#"><i
                                        className="icon ion-social-snapchat"></i></a><a href="#"><i
                                            className="icon ion-social-instagram"></i></a></div>
                </div>
                                <p className="text-monospace copyright">&lt; / Manuel Ramirez &gt; © 2020</p>
            </div>
        </footer>
                    </div>
                   
    )
};

export default Footer;
