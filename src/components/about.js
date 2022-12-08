import React from "react";

function About() {
    return (
        <div>
            <p className="content is-medium">quick intro</p>
            <hr />

            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Timmy Signore" />
            <p className="content">

                {/* about me  */}
            </p>
        </div>
    );
}

export default About;