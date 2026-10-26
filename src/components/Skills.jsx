// Rendered from an array with .map(). No state needed.

const skills = [
  { name: 'Elasticsearch & Kibana', category: 'Data & Observability', level: 85 },
  { name: 'Client Demos', category: 'Pre-sales Engineering', level: 80 },
  { name: 'Python', category: 'Programming', level: 80 },
  { name: 'Docker & Airflow', category: 'Data Engineering', level: 70 },
  { name: 'React', category: 'Frontend', level: 65 },
  { name: 'Cloud Architecture', category: 'Solutions Architecture', level: 60 },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
