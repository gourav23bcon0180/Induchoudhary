import { Link } from 'react-router-dom'

function Footer() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">Indu Choudhary</span>
              <p>Empowering people to build real digital income through skills that work.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                <a href="#story" onClick={(e) => handleNavClick(e, 'story')}>My Story</a>
                <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')}>Courses</a>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Results</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
                <a href="mailto:induchoudhary958@gmail.com">Contact Us</a>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/refund">Refund Policy</Link>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="https://www.instagram.com/induchoudharyyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://youtube.com/@induchoudharyy?si=FabI0ftkugUfNYA-" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://wa.me/917023419465" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>2026 Indu Choudhary. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="disclaimer">
        <div className="container">
          <p>*DISCLAIMER: We may reference our own sales figures and the results of our customers. Please understand these results are not typical. We're not implying you'll duplicate them (or do anything for that matter). The average person who follows any "how-to" information gets little to no results. We're using these references for example purposes only. Your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action.</p>
          <p className="credits">Website by Codetech Solutions</p>
        </div>
      </div>
    </>
  )
}

export default Footer
