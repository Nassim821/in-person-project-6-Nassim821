// State: which filter is active? One string ('all', 'data', ...).
// The projects themselves come from App as a prop (lifted state, Part 5).

import { useState } from 'react'

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'data', label: 'Data' },
  { value: 'presales', label: 'Pre-sales' },
  { value: 'frontend', label: 'Frontend' },
]

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')

  // Derived, not stored: always computed from projects + activeFilter,
  // so the two can never fall out of sync.
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Tier 1: a derived count. Both numbers are array lengths, no new state. */}
        <p className="filter-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                {project.url && (
                  <a href={project.url} className="project-link">
                    View code
                  </a>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
