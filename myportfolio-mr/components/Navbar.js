import React from "react";

function Navbar(){

    return (

        <nav class="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
        <div class="container-fluid"><a class="navbar-brand" href="#"><i class="fa fa-instagram"></i>&nbsp;<i
                    class="fa fa-twitter-square"></i>&nbsp;<i class="fa fa-snapchat-square"></i>&nbsp;<i
                    class="fa fa-facebook-square"></i></a><button data-toggle="collapse" class="navbar-toggler"
                data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse text-left" id="navcol-1">
                <ul class="nav navbar-nav flex-grow-1 justify-content-between">
                    <li class="nav-item" role="presentation"><a class="nav-link active text-monospace"
                            href="index.html">/Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active text-monospace"
                            href="https://github.com/manuelr14" target="_blank">/Github</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active text-monospace"
                            href="https://www.linkedin.com/in/manuel-ramirez-381780142/"
                            target="_blank">/LinkedIn</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-monospace"
                            href="assets/img/MRamirez_Resume.pdf" target="_blank">/Resume</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-monospace"
                            href="contact.html">/Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    )
}