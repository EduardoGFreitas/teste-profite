import React from "react";

import "./styles.css";

const BulletProfite = ({
  href = "#",
  content = "teste2",
  isActive = true,
  onClick
}) => (
  <a
    onClick={onClick}
    href={href}
    className={`bullet-cubo ${isActive ? "-active" : ""}`}
  >
    {content}
  </a>
);

export default BulletProfite;
