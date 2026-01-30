import { Link } from 'react-router-dom'
import '../styles/policy.css'

function Privacy() {
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
            <h1>Privacy Policy</h1>
            <p>Last Updated: January 30, 2026</p>
          </div>

          <div className="policy-content">
            <p>This Privacy Policy describes how Indu Choudhary ("we", "our", "us") collects, uses, stores, and protects your personal information when you visit our website <strong>www.induchoudhary.me</strong> or use our services.</p>
            <p>By accessing or using our website, you agree to the terms of this Privacy Policy.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3>1.1 Personal Information</h3>
            <p>When you register, make a purchase, or contact us, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing details</li>
              <li>Address (if required)</li>
              <li>Any information you voluntarily submit</li>
            </ul>

            <h3>1.2 Payment Information</h3>
            <p>Payments are processed securely through Razorpay or other third-party payment gateways.</p>
            <p>We do not store:</p>
            <ul>
              <li>Credit or debit card numbers</li>
              <li>UPI details</li>
              <li>Net banking passwords</li>
            </ul>
            <p>All payment-related information is handled in accordance with Razorpay's security standards.</p>

            <h3>1.3 Automatically Collected Data</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages viewed</li>
              <li>Time spent on the website</li>
              <li>Cookies and tracking data</li>
            </ul>
            <p>This data helps us improve website performance and enhance user experience.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process payments and deliver digital products</li>
              <li>Communicate regarding updates, offers, or support</li>
              <li>Prevent fraud and enhance security</li>
              <li>Personalize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p><strong>Your personal information is never sold or rented to third parties.</strong></p>

            <h2>3. Cookies & Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Improve website functionality and performance</li>
              <li>Store user preferences</li>
              <li>Track analytics and usage behavior</li>
              <li>Enhance overall user experience</li>
            </ul>
            <p>You may disable cookies via your browser settings; however, certain features may not function properly.</p>

            <h2>4. Sharing of Information</h2>
            <p>We may share your information only in the following cases:</p>

            <h3>4.1 Service Providers</h3>
            <p>Trusted third-party service providers who assist us in operating our business, such as:</p>
            <ul>
              <li>Razorpay (payment processing)</li>
              <li>Email communication tools</li>
              <li>Analytics services (e.g., Google Analytics)</li>
            </ul>
            <p>These providers are obligated to keep your information confidential.</p>

            <h3>4.2 Legal Requirements</h3>
            <p>Information may be disclosed if required to:</p>
            <ul>
              <li>Comply with legal or regulatory obligations</li>
              <li>Respond to lawful government requests</li>
              <li>Protect our rights or prevent fraud</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We use reasonable and industry-standard security measures to protect your data, including:</p>
            <ul>
              <li>SSL encryption</li>
              <li>Secure servers</li>
              <li>Restricted access to personal data</li>
              <li>Standard data protection protocols</li>
            </ul>
            <p>However, no method of online transmission is completely secure. Users share information at their own risk.</p>

            <h2>6. Your Rights</h2>
            <p>Depending on applicable laws, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Request a copy of stored data</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:induchoudhary958@gmail.com">induchoudhary958@gmail.com</a>.</p>

            <h2>7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary:</p>
            <ul>
              <li>To provide services</li>
              <li>To meet legal requirements</li>
              <li>To resolve disputes</li>
              <li>To enforce agreements</li>
            </ul>

            <h2>8. Third-Party Links</h2>
            <p>Our website may include links to external websites.</p>
            <p>Indu Choudhary is not responsible for:</p>
            <ul>
              <li>Privacy practices of third-party sites</li>
              <li>Their content or services</li>
              <li>Their actions or policies</li>
            </ul>
            <p>Users are encouraged to review third-party privacy policies independently.</p>

            <h2>9. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18.</p>
            <p>We do not knowingly collect personal information from minors. If such data is identified, it will be deleted immediately.</p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time.</p>
            <p>Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website indicates acceptance of the revised policy.</p>

            <h2>11. Contact Information</h2>
            <p>For any questions or concerns regarding this Privacy Policy, contact:</p>
            <p><strong>Indu Choudhary</strong><br />
            Email: <a href="mailto:induchoudhary958@gmail.com">induchoudhary958@gmail.com</a><br />
            Website: <a href="https://www.induchoudhary.me">www.induchoudhary.me</a></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
