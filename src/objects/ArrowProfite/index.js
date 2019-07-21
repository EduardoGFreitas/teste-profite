import React from "react";
import "./styles.css";

const ArrowProfite = ({
  href = "#",
  content = "",
  isActive = false,
  rightOrLeft = "right"
}) => (
  <a
    href={href}
    className={`arrow-cubo -${rightOrLeft} ${isActive ? "-active" : ""}`}
  >
    {content}
  </a>
);

export default ArrowProfite;
