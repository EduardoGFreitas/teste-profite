import React from "react";

import "./styles.css";

const BulletProfite = ({
  href = "#",
  content = "",
  isActive = false,
  onClick
}) => (
  <a
    onClick={onClick}
    href={href}
    className={`bullet-profite ${isActive ? "-active" : ""}`}
  >
    {content}
  </a>
);

export default BulletProfite;
