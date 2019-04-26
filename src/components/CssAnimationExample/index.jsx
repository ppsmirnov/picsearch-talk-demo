import React from "react";

import "./index.css";

const CssAnimationExample = () => (
    <section className="css-animation-example">
        <h2>CSS анимация</h2>
        <h3><code>transform: translateX(<strong>X</strong>);</code></h3>
        <span
            role="img"
            aria-label="cat"
            className="css-animation-example__box">
            🐈
        </span>
        <h3><code>position: relative; left: <strong>X</strong>;</code></h3>
        <span
            role="img"
            aria-label="cat"
            className="css-animation-example__box css-animation-example__box--position">
            🐈
        </span>
    </section>
);

export default CssAnimationExample;
