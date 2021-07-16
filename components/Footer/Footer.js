import React, { useState, useEffect } from 'react'
import styles from './Footer.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'

const Footer = () => {

  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)

    Email.send({
      SecureToken: '744214bc-e855-4506-bc7f-68f3dca23ac1',
      To: 'hello@serunicreative.com',
      From: "hello@serunicreative.com",
      Subject: `Seruni Creative! ${formData.type}`,
      Body: generateEmailBody()
    }).catch(message => {
      return toast.error(message, {
        duration: 3000,
        position: 'top-right',
      })
    }).then((message) => {
      return toast.success('Message Sent!', {
        duration: 3000,
        position: 'top-right',
      })
      console.log(message)
    }).finally(() => {
      toast.success('Message Sent!', {
        duration: 3000,
        position: 'top-right',
      })
      setIsLoading(false)
    })
  }

  const generateEmailBody = () => {
    const body =
      `<html>
        <p><strong>Email Type: </strong>${formData?.type || '-'}</p>
        <p><strong>From: </strong> ${formData?.name || '-'}</p>
        <p><strong>Company: </strong>${formData?.company || '-'}</p>
        <p><strong>Email: </strong> ${formData?.email || '-'}</p>
        <p><strong>Phone: </strong> ${formData?.phone || '-'}</p>
        <strong>Message: </strong>
        <blockquote>${formData?.message || '-'}</blockquote>
      </html>`

    return body
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
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '2px solid #eebc25',
            borderRadius: '8px',
            padding: '0.5rem 1rem'
          },
        }}
      />
      <div className={styles.footerImage}>
        <img src="/img/badge.png" alt="Footer Badge" />
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

          {
            isLoading &&
            <button className={styles.formButton} name="send" title="send">Sending...</button>
          }

          {
            !isLoading &&
            <button className={styles.formButton} name="send" title="send" type="submit">Send!</button>
          }

        </form>
      </div>
      <div className={styles.footerInfo}>
        <p className={styles.subtitle}>hello@serunicreative.com</p>
        <p className={styles.subtitle}>WhatsApp : 0813-2020-2002</p>
        <p className={styles.subtitle}>or pop us a visit at :</p>

        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/company/seruni/" target="_blank" rel="noopener noreferrer" name="linked-in"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/serunicreative/" target="_blank" rel="noopener noreferrer" name="facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/serunicreative/" target="_blank" rel="noopener noreferrer" name="instagram"><FaInstagram /></a>
        </div>

        <p className={styles.copywrite}>Brighten Your Day | &copy; 2021 Seruni</p>
      </div>
    </footer >
  )
}

export default Footer
