import React from "react";


const About = () => {
    return (
        <div className="grid-container">
            <div className="grid-inner">
                <h1>About</h1>
                <div className="card-container">
                    <h2 className="card-title">Nia TV</h2>
                    <div className="card-time-container">
                        <div className="card-time-block"></div>
                        <h4 className="card-time">time</h4>
                    </div>
                    <p className="card-text">
                        NIA TV is a community streaming channel set-up by artists to create
                        content, programme shows and keep us connected.
          </p>
                    <div className="card-time-container">
                        <div className="card-time-block"></div>
                        <h4 className="card-time">
                            - ‘real people, real experiences, in real times’
            </h4>
                    </div>

                    <p>
                        We will be supporting a variety of cross platform content sharing on
                        a D-I-Y network.
          </p>

                    <p>
                        All our programmes air live on Twitch before being uploaded to
                        YouTube to access after the live event.
          </p>
                </div>
            </div>
        </div>
    );
};

export default About;
