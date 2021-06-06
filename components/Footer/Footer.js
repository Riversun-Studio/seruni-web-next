import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

  const [formData, setFormData] = useState({
    type: "Client Inquiries",
    name: "",
    email: "",
    phone: "",
    message: "",
    company: ""
  })

  useEffect(() => {
    clearForm()
  }, [])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    const body =
      `${formData.message}\n\n
    From: ${formData.email}\n
    Name: ${formData.name}\n
    Company: ${formData.company}\n
    Email: ${formData.email}\n
    Phone: ${formData.phone}
    `
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@serunicreative.com&su=${formData.type}&body=${encodeURIComponent(body)}`
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const clearForm = () => {
    setFormData({
      type: "Client Inquiries",
      name: "",
      email: "",
      phone: "",
      message: "",
      company: ""
    })
  }

  return (
    <footer className={styles.footer} id="contact-us">
      <div className={styles.footerImage}>
        <Image src="/img/badge.png" alt="Footer Badge" width={302} height={146} intrinsic="true" />
      </div>
      <div className={styles.footerForm}>
        <form onSubmit={handleEmailSubmit}>
          <div className={styles.inputGroup}>
            <select name="type" id="type" required onChange={(e) => handleFormChange(e)} value={formData.type}>
              <option value="Client Inquiries">Client Inquiries</option>
              <option value="Job Application">Job Application</option>
              <option value="Collaboration Request">Collaboration Request</option>
            </select>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                required
                onChange={(e) => handleFormChange(e)}
                value={formData.name} />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name*"
                required
                onChange={(e) => handleFormChange(e)}
                value={formData.company} />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                required
                onChange={(e) => handleFormChange(e)}
                value={formData.email} />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone*"
                required onChange={(e) => handleFormChange(e)}
                value={formData.phone} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              onChange={(e) => handleFormChange(e)}
              value={formData.message} />
          </div>

          <button className={styles.formButton} name="send" title="send" type="submit">Send!</button>
        </form>
      </div>
      <div className={styles.footerInfo}>
        <p className={styles.subtitle}>hello@serunicreative.com</p>
        <p className={styles.subtitle}>+6222-20465155</p>
        <p className={styles.subtitle}>or pop us a visit at :</p>

        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/company/seruni/" target="_blank" rel="noopener noreferrer" name="linked-in"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/serunicreative/" target="_blank" rel="noopener noreferrer" name="facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/serunicreative/" target="_blank" rel="noopener noreferrer" name="instagram"><FaInstagram /></a>
        </div>

        <p className={styles.copywrite}>Brings You Joy | &copy; 2020 Seruni</p>
      </div>
    </footer>
  )
}

export default Footer
