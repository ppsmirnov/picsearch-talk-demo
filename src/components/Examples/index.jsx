import React from "react";

import "./index.css";

import GifExample from "../GifExample";
import CssAnimationExample from "../CssAnimationExample";
import JsAnimationExample from "../JsAnimationExample";

const Examples = () => (
    <div className="examples">
        <GifExample />
        <CssAnimationExample />
        <JsAnimationExample />
    </div>
);

export default Examples;
