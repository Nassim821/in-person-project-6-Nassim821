// State: is the mobile menu open? One boolean, owned here because nothing
// else on the page needs to know.

import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (e) => {
    e.preventDefault()
    const targetSection = document.querySelector(e.currentTarget.getAttribute('href'))

    // Close the menu first (no effect at desktop width). The open menu makes
    // the sticky navbar taller, so scrolling before it closes would overshoot
    // by the menu's height once the page shifts up.
    setIsMobileMenuOpen(false)

    // setTimeout runs after React has re-rendered the closed menu
    setTimeout(() => {
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  return (
    <nav id="navbar">
      <div className="nav-brand">
        <span>Nassim Elkharroubi</span>
      </div>

      {/* The open/closed fact lives in state; className is computed from it */}
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link" onClick={handleNavClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
