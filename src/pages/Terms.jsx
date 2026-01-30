import { Link } from 'react-router-dom'
import '../styles/policy.css'

function Terms() {
  return (
    <>
      <header id="header">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <span className="logo-text">Indu Choudhary</span>
            </Link>
          </div>
        </nav>
      </header>

      <section className="policy-page">
        <div className="policy-container">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          
          <div className="policy-header">
            <h1>Terms & Conditions</h1>
            <p>Last Updated: January 30, 2026</p>
          </div>

          <div className="policy-content">
            <p>Welcome to Indu Choudhary ("Company", "we", "our", "us").</p>

            <p>By accessing or using our website <strong>www.induchoudhary.me</strong>, services, or making a purchase, you agree to be bound by these Terms & Conditions ("Terms").</p>

            <p>If you do not agree to these Terms, please discontinue use of our website and services.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing our website or using our services, you confirm that you have read, understood, and agreed to these Terms and our Privacy Policy.</p>
            <p>We reserve the right to update or modify these Terms at any time without prior notice.</p>

            <h2>2. Eligibility</h2>
            <p>By using this website, you confirm that:</p>
            <ul>
              <li>You are at least 18 years old</li>
              <li>You have the legal capacity to enter into a binding agreement</li>
            </ul>

            <h2>3. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:</p>
            <ul>
              <li>Use our services in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
              <li>Attempt to gain unauthorized access to any portion of our services</li>
              <li>Share or distribute content that infringes on any third-party rights</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>All content, materials, and intellectual property on this website, including but not limited to text, graphics, logos, images, and software, are owned by Indu Choudhary and protected by copyright and trademark laws.</p>
            <p>You may not reproduce, distribute, modify, or create derivative works without our express written permission.</p>

            <h2>5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Indu Choudhary shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
            <p>We do not guarantee that our services will be uninterrupted, error-free, or secure.</p>

            <h2>6. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

            <h2>8. Contact Information</h2>
            <p>For any questions or concerns regarding these Terms & Conditions, please contact:</p>
            <p><strong>Indu Choudhary</strong><br />
            Email: <a href="mailto:induchoudhary958@gmail.com">induchoudhary958@gmail.com</a><br />
            Website: <a href="https://www.induchoudhary.me">www.induchoudhary.me</a></p>

            <p style={{ marginTop: '40px' }}>Thank you for choosing Indu Choudhary.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Terms
