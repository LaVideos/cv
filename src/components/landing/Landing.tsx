import React, {Component, CSSProperties} from "react";
import Wave from "react-wavify";
import classNames from "classnames/bind";
import styles from "./Landing.module.scss";
import 'animate.css';

const cn = classNames.bind(styles)


const divStyle : CSSProperties = {
    width: "100%"
};

const wavePos1 : CSSProperties = {
    position: "absolute",
    bottom: "100px",
    width: "100%"
};

const wavePos2 : CSSProperties = {
    position: "absolute",
    bottom: "70px",
    width: "100%"
};

const wavePos3 : CSSProperties = {
    position: "absolute",
    bottom: "60px",
    width: "100%"
};

const wavePos4 : CSSProperties = {
    position: "absolute",
    bottom: "60px",
    width: "100%"
};

const wavePos5 : CSSProperties = {
    position: "absolute",
    bottom: "50px",
    width: "100%"
};

const wavePos6 : CSSProperties = {
    position: "absolute",
    bottom: "20px",
    width: "100%"
};
const wavePos7 : CSSProperties = {
    position: "absolute",
    bottom: "10px",
    width: "100%"
};

const wavePos8 : CSSProperties = {
    position: "absolute",
    bottom: "0px",
    width: "100%"
};

let pauseStatus = false;

const Landing =()=> {

        return (
            <div className={cn('landing-container')}>
                <div style={divStyle}>
                    <div>
                        <div style={wavePos1}>
                            <Wave
                                fill="var(--landing-2)"
                                paused={pauseStatus}
                                options={{
                                    height: 15,
                                    amplitude: 5,
                                    speed: 0.5,
                                    points: 4
                                }}
                            />
                        </div>
                        <div style={wavePos2}>
                            <Wave
                                fill="var(--landing-1)"
                                paused={pauseStatus}
                                options={{
                                    height: 1,
                                    amplitude: 5,
                                    speed: 0.3,
                                    points: 5
                                }}
                            />
                        </div>
                        <div style={wavePos3}>
                            <Wave
                                fill="var(--landing-5)"
                                paused={pauseStatus}
                                options={{
                                    height: 10,
                                    amplitude: 10,
                                    speed: 0.3,
                                    points: 3
                                }}
                            />
                        </div>
                        <div style={wavePos4}>
                            <Wave
                                fill="var(--landing-2)"
                                paused={pauseStatus}
                                options={{
                                    height: 40,
                                    amplitude: 10,
                                    speed: 0.3,
                                    points: 4
                                }}
                            />
                        </div>
                        <div style={wavePos5}>
                            <Wave
                                fill="var(--landing-2)"
                                paused={pauseStatus}
                                options={{
                                    height: 50,
                                    amplitude: 15,
                                    speed: 0.4,
                                    points: 3
                                }}
                            />
                        </div>
                        <div style={wavePos6}>
                            <Wave
                                fill="var(--landing-1)"
                                paused={pauseStatus}
                                options={{
                                    height: 40,
                                    amplitude: 20,
                                    speed: 0.3,
                                    points: 2
                                }}
                            />
                        </div>
                        <div style={wavePos7}>
                            <Wave
                                fill="var(--landing-5)"
                                paused={pauseStatus}
                                options={{
                                    height: 75,
                                    amplitude: 20,
                                    speed: 0.3,
                                    points: 3
                                }}
                            />
                        </div>
                        <div style={wavePos8}>
                            <Wave
                                fill="var(--landing-2)"
                                paused={pauseStatus}
                                options={{
                                    height: 120,
                                    amplitude: 15,
                                    speed: 0.2,
                                    points: 3
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Landing;
