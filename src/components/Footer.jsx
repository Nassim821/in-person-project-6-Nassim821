// Presentational: receives the project count from App as a prop.

function Footer({ projectCount }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Nassim Elkharroubi. All rights reserved.</p>
          <p>{projectCount} projects</p>
          <div className="social-links">
            <a href="https://github.com/Nassim821" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
