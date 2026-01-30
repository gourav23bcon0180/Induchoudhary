import { Link } from 'react-router-dom'
import '../styles/policy.css'

function Refund() {
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
            <h1>Refund & Cancellation Policy</h1>
            <p>Last Updated: January 30, 2026</p>
          </div>

          <div className="policy-content">
            <p>Thank you for choosing Indu Choudhary.</p>
            <p>Please read this Refund & Cancellation Policy carefully before making any purchase.</p>
            <p>By purchasing from Indu Choudhary, you acknowledge and agree to the terms outlined below.</p>

            <h2>1. No Refund Policy</h2>
            <p>All purchases made on Indu Choudhary are <strong>final and non-refundable</strong>.</p>
            <p>Since we provide:</p>
            <ul>
              <li>Digital services</li>
              <li>Online tools</li>
              <li>Training materials</li>
              <li>Instant access products</li>
              <li>Non-tangible goods</li>
            </ul>
            <p>We do not offer refunds under any circumstances, including but not limited to:</p>
            <ul>
              <li>Change of mind</li>
              <li>Incorrect purchase</li>
              <li>Lack of usage</li>
              <li>Inability to access due to user-related issues</li>
              <li>Technical issues on the user's device</li>
              <li>Perceived lack of results</li>
            </ul>
            <p><strong>Once payment is completed, no refund will be issued.</strong></p>
            <p>This policy aligns with digital product guidelines and Razorpay's merchant compliance standards.</p>

            <h2>2. No Cancellation Policy</h2>
            <p>After a purchase is completed, <strong>order cancellation is not permitted</strong>.</p>
            <p>Because our products are delivered instantly and access is granted immediately, cancellations cannot be honored.</p>

            <h2>3. Duplicate Payments or Transaction Errors</h2>
            <p>In the case of:</p>
            <ul>
              <li>Accidental duplicate payment</li>
              <li>Payment charged but not received in your account</li>
              <li>Technical glitches during checkout</li>
            </ul>
            <p>We will verify the payment with Razorpay. If confirmed as a duplicate or failed, a refund will be processed to the same payment method within <strong>7–14 working days</strong>.</p>

            <h2>4. Subscription or Renewal Payments (If Applicable)</h2>
            <p>If your purchase involves a subscription:</p>
            <ul>
              <li>Auto-renewal charges are non-refundable</li>
              <li>Cancellations must be made before the next billing cycle</li>
              <li>We do not refund for partial months or unused access</li>
            </ul>

            <h2>5. Payment Disputes & Chargebacks</h2>
            <p>If a payment is disputed or a chargeback is initiated:</p>
            <ul>
              <li>Access to all Indu Choudhary services will be immediately suspended</li>
              <li>Legal action or collection efforts may be pursued for fraudulent disputes</li>
            </ul>
            <p>We request users to contact us first to resolve any issues before raising disputes.</p>

            <h2>6. Contact Information</h2>
            <p>For any questions or concerns regarding this policy, please contact:</p>
            <p><strong>Indu Choudhary</strong><br />
            Email: <a href="mailto:induchoudhary958@gmail.com">induchoudhary958@gmail.com</a><br />
            Website: <a href="https://www.induchoudhary.me">www.induchoudhary.me</a></p>

            <p style={{ marginTop: '40px' }}>Thank you for your understanding and cooperation.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Refund
