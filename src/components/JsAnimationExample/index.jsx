import React, { Component } from "react";

import "./index.css";

class JsAnimationExample extends Component {
    componentDidMount() {
        if (this.box) {
            let deg = 0;
            const animate = () => {
                deg = (deg + 1) % 360;
                this.box.style.transform = `rotate(${deg}deg)`;
                this.rafId = requestAnimationFrame(animate);
            };
            this.rafId = requestAnimationFrame(animate);
        }
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.rafId);
    }

    render() {
        return (
            <section>
                <h2> JS анимация </h2>
                <h3><code>requestAnimationFrame</code></h3>
                <span
                    role="img"
                    aria-label="cat"
                    className="js-animation-example__box"
                    ref={node => {
                        this.box = node;
                    }}>
                    🦔
                </span>
            </section>
        );
    }
}

export default JsAnimationExample;
