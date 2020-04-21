import React from "react";
import { Link } from "react-router-dom";

import "./glitchAnimation.scss";

export default function GlitchAnimation({
  glitchText,
  text,
  linkTo,
  children,
}) {
  return (
    <div id="app">
      <Link id="wrapper" to={linkTo}>
        <h1 className="glitch" data-text={glitchText}>
          {glitchText}
        </h1>
        {text && <h1 id="message">{text}</h1>}
      </Link>
      {children}
    </div>
  );
}
