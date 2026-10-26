// Presentational: no state.

const details = [
  { label: 'Based in', value: 'Berkeley, CA — on exchange from Paris, France' },
  { label: 'Studying at', value: 'ISEP Paris — UC Berkeley (BGA)' },
  { label: 'Code', value: 'github.com/Nassim821', href: 'https://github.com/Nassim821' },
]

const lookingFor = ['Internships', 'Solutions Engineering', 'Pre-sales']

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a 5th-year engineering student at ISEP Paris, currently on an exchange semester at UC Berkeley through the Berkeley Global Access program. I'm working toward a career in Solutions Architecture and pre-sales engineering, with a longer-term goal of joining a graduate Solutions Architect program.</p>
            <p>I previously interned as a pre-sales engineer at Hyperflex, an Elastic partner, where I worked with the ELK Stack and built client-facing Kibana dashboards and demos. I also spent a semester at Inha University in South Korea, and I keep a strong interest in Japan and the wider region.</p>
            <div className="about-details">
              {details.map((detail) => (
                <div key={detail.label} className="detail-item">
                  <span className="detail-label">{detail.label}</span>
                  {detail.href ? <a href={detail.href}>{detail.value}</a> : <span>{detail.value}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="about-availability">
            <h3>Currently Looking For</h3>
            <div className="availability-tags">
              {lookingFor.map((item) => (
                <span key={item} className="tag tag-available">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
