import React from "react";
// @ts-ignore
import logo from "../img/logo_footer.png";

export default function Footer() {
  return (
    <footer>
      <img
        src={logo}
        width={75}
        height={75}
        className="object-fit"
        alt="logo"
      />
      <p>
        Little Lemon Restaurant<sup className="font-features sups">&copy;</sup>{" "}
        2024
      </p>
    </footer>
  );
}
