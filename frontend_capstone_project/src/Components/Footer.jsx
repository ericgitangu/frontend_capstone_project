import React from 'react'
// @ts-ignore
import logo from '../img/logo_footer.png'

export default function Footer() {
  return (
    <footer>
        <img src={logo} width={75} height={75} className="object-fit" alt="logo" />
        <p className='text-right'>Little Lemon Restaurant&copy; 2024</p>
    </footer>
  )
}
