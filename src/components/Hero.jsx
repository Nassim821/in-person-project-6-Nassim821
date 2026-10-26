// Presentational: no state.

function Hero() {
  // Same smooth scroll as the navbar, for the two call-to-action buttons
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector(e.currentTarget.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Nassim Elkharroubi</h1>
        <p className="hero-subtitle">Engineering Student &amp; Aspiring Solutions Architect</p>
        <p className="hero-tagline">Turning technical products into demos, dashboards and answers that clients actually understand</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" onClick={handleClick}>View Projects</a>
          <a href="#contact" className="btn btn-secondary" onClick={handleClick}>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
