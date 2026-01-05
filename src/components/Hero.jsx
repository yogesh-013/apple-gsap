import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    });

    return (
        <section className="app-hero">
            <div className="hero-div">
                <h1 className="hero-h1">MacBook Pro</h1>
                <img className="hero-img" src="/title.png" alt="MacBook Title" />
            </div>

            <video className="hero-video" ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button className="hero-button">Buy</button>

            <p className="hero-p">From $1599 or $133/mo for 12 months</p>
        </section>
    )
}
export default Hero