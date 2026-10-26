// State: what has the user typed (formData), which fields have errors
// (errors), and has a valid message been sent (isSubmitted).

import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }

// Returns an error message, or '' when the value is fine
function validateField(name, value) {
  const trimmed = value.trim()

  if (name === 'name') {
    if (trimmed === '') return 'Name is required'
  }

  if (name === 'email') {
    if (trimmed === '') return 'Email is required'
    if (!trimmed.includes('@')) return 'Please enter a valid email address'
  }

  if (name === 'message') {
    if (trimmed === '') return 'Message is required'
    if (trimmed.length < 10) return 'Message must be at least 10 characters'
  }

  return ''
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // One handler for every field: the input's name attribute picks the key
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    // Typing into a field with an error clears that one error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    setIsSubmitted(false)
  }

  // Leaving a field validates just that field
  const handleBlur = (e) => {
    const { name, value } = e.target
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    }
    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((message) => message !== '')
    if (hasErrors) return

    setIsSubmitted(true)
    setFormData(emptyForm)
  }

  // className for an input: red border when it has an error
  const fieldClass = (name) => (errors[name] ? 'error' : '')

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>I'm always interested in hearing about internships and solutions engineering opportunities. Feel free to reach out!</p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('name')}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('email')}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('message')}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </div>

            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
