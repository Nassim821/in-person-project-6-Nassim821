// Week 8: the portfolio split into components.
// App owns the shared data (projects) and passes it down as props;
// each child owns only the state it needs.

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lifted to App because two components read it: Projects (the cards)
// and Footer (the count).
const projects = [
  {
    id: 1,
    title: 'Football ROI Pipeline',
    description: 'A containerized data pipeline that ingests football transfer and performance data to measure return on investment, orchestrated with Apache Airflow DAGs.',
    category: 'data',
    categoryLabel: 'Data Engineering',
    tags: ['Python', 'Airflow', 'Docker'],
    url: 'https://github.com/Nassim821/football-roi-pipeline',
    featured: true,
  },
  {
    id: 2,
    title: 'Kibana Client Dashboards',
    description: 'Client-facing dashboards and live demos built on the ELK Stack during my internship at Hyperflex, an Elastic partner, to show prospects what their own data could look like.',
    category: 'presales',
    categoryLabel: 'Pre-sales',
    tags: ['Elasticsearch', 'Kibana', 'Logstash'],
  },
  {
    id: 3,
    title: 'Semantic HTML Profile',
    description: 'A personal page built entirely with semantic HTML landmarks and no generic containers, focused on accessibility and clean document structure.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tags: ['HTML5', 'Accessibility'],
    url: 'https://github.com/Nassim821/info153-lab1',
  },
  {
    id: 4,
    title: 'Responsive Hamburger Menu',
    description: 'A mobile navigation menu that collapses below 720px, built with a CSS media query and a toggle that expands the links vertically.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tags: ['CSS3', 'Responsive'],
    url: 'https://github.com/Nassim821/info153-lab2',
  },
  {
    id: 5,
    title: 'Modern Layout Portfolio',
    description: 'A portfolio rebuilt with Flexbox and CSS Grid, using auto-fit grids and clamp() so the layout adapts without piling up media queries.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tags: ['CSS3', 'Flexbox', 'Grid'],
    url: 'https://github.com/Nassim821/in-person-project-2-Nassim821',
  },
  {
    id: 6,
    title: 'Interactive Portfolio',
    description: 'The same portfolio brought to life with vanilla JavaScript: smooth scrolling, project filters, a mobile menu, animated skill bars and live form validation.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tags: ['JavaScript', 'DOM', 'Events'],
    url: 'https://github.com/Nassim821/in-person-project-4-Nassim821',
  },
]

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer projectCount={projects.length} />
    </div>
  )
}

export default App
