import React from "react";

const Home = () => (
<div>
    <section className="introduction"><img className="img-fluid top-left" id="main-background"
                src={require('../img/foto1.png')} /><img className="rounded-circle img-fluid profile-picture"
                src={require('../img/profile-picture.png')} width="390"/>
            <h5 className="text-monospace top-left light-color" id="name">&nbsp; Hi! my name is&nbsp;<br/>&lt; Manuel Ramirez
                &gt;</h5>
            <h1 className="text-monospace" id="welcome">Welcome to my&nbsp;<br></br>&lt; Portfolio &gt;</h1>
        </section>
        <section className="introduction"><img className="img-fluid top-left" id="main-background"
                src={require('../img/mancomputer.jpg')}/>
            <h5 className="text-monospace top-left light-color" id="name">I am a web developer Student from
                Venezuela,<br></br>currently living in Atlanta, GA. &nbsp;</h5>
            <h1 className="text-monospace" id="welcome">I enjoy Learning and Building everything&nbsp;from scratch, If you
                are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.
            </h1>
        </section>
        <div className="row project-margin">
            <div className="col order-md-12 projects">
                <div>
                    <h1 className="text-monospace projects dark-color">Portfolio</h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; Password Generator &gt;</h1>
                    <div><a className="link-space" href="https://manuelr14.github.io/HW3PasswordGenerator/"
                            target="_blank">Try me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/manuelr14/HW3PasswordGenerator" target="_blank">Github
                            Repository&nbsp;<i className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img/password-Generator.png')} width="200"/>
                </div>
            </div>
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; Day Planner &gt;</h1>
                    <div><a className="link-space" href="https://manuelr14.github.io/HW5DayPlanner/" target="_blank">Try
                            me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/manuelr14/HW5DayPlanner" target="_blank">Github Repository&nbsp;<i
                                className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img/work-daySchedule.png')} width="200"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; Weather Dashboard &gt;</h1>
                    <div><a className="link-space" href="https://manuelr14.github.io/HW6WeatherDashboard/"
                            target="_blank">Try me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/manuelr14/HW6WeatherDashboard" target="_blank">Github
                            Repository&nbsp;<i className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img/weather-dashboard.png')} width="200"/>
                </div>
            </div>
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; Choice Maker &gt;</h1>
                    <div><a className="link-space" href="https://leeyoh.github.io/GTBC---PROJECT-1/" target="_blank">Try
                            me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/leeyoh/GTBC---PROJECT-1" target="_blank">Github Repository&nbsp;<i
                                className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img/choice-maker.png')} width="200" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; Burguer App &gt;</h1>
                    <div><a className="link-space" href="https://manuelr14.github.io/HW6WeatherDashboard/"
                            target="_blank">Try me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/manuelr14/burguer" target="_blank">Github
                            Repository&nbsp;<i className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img//burguer-app.png')} width="200" />
                </div>
            </div>
            <div className="col order-md-4">
                <div className="linkedin-profile border">
                    <h1 className="text-monospace dark-color project-tittle">&lt; YummTrucks &gt;</h1>
                    <div><a className="link-space" href="https://vast-headland-71725.herokuapp.com/" target="_blank">Try
                            me&nbsp;<i className="fa fa-angle-right"></i></a><a
                            href="https://github.com/K-ai30/YumTrucks" target="_blank">Github Repository&nbsp;<i
                                className="fa fa-angle-right"></i></a></div>
                    <img className="project-image" src={require('../img/yummtrucks-img.png')} width="200" />
                </div>
            </div>
        </div>

 </div>

)

export default Home;