import React from "react";

function Contact (){

    return (
        <div>
        <section class="introduction"><img class="img-fluid top-left" id="main-background" src={require('../img/contact-background.jpg')}/>
        <div>
            <h5 class="text-monospace top-left dark-color" id="name">&lt; Contact &gt;&nbsp;</h5>
            <h5 class="text-monospace top-left dark-color" id="name-ask">Name:</h5><input type="text" id="name-ask-input" placeholder="      < your name >"/>
            <h1 class="text-monospace dark-color" id="message-ask">Message:</h1><input class="flex-row flex-grow-1 flex-shrink-1 justify-content-start align-items-start align-content-start" type="text" id="message-ask-input"/>

         </div>
    </section>
    </div>

    )
};
export default Contact;