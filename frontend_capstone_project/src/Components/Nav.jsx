import React from 'react'
// @ts-ignore
import logo from "../Logo.svg"

export default function Nav() {
  return (
      <nav>
        <img src={logo} width={250} height={100} className="object-fit" alt="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
  )
}
