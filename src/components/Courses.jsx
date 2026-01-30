function Courses() {
  const courses = [
    {
      image: '/course/foundation.png',
      title: 'Foundation & Mindset',
      items: [
        { title: 'Start Here:', desc: 'Your step-by-step guide to maximizing the DWA platform' },
        { title: 'Mindset Module:', desc: 'Build the confidence and clarity needed for success in digital marketing' },
        { title: 'Digital Marketing Basics:', desc: 'Master the fundamentals that create real income online' },
      ]
    },
    {
      image: '/course/systemsandtech.png',
      title: 'Systems & Tech',
      items: [
        { title: 'Bypass Funnels:', desc: 'Easy setup guides for Stan Store to automate your sales' },
        { title: 'Systeme.io Setup:', desc: 'Build your sales process from scratch with zero tech headaches' },
        { title: 'Email Marketing:', desc: 'Learn the art of nurturing leads and making consistent sales' },
        { title: 'Pre-Launch Strategy:', desc: 'Everything you need to know before launching online' },
      ]
    },
    {
      image: '/course/marketingmastery .png',
      title: 'Marketing Mastery',
      items: [
        { title: 'Content Creation:', desc: 'Create engaging content that attracts your ideal customers' },
        { title: 'Viral Reel System:', desc: 'Our step-by-step formula for creating content that spreads' },
        { title: 'Attraction Marketing:', desc: 'Draw people to your business naturally and authentically' },
        { title: 'Instagram Navigation:', desc: 'Master the platform where digital marketers thrive' },
        { title: 'Sales Through Stories:', desc: 'Turn your social media into a consistent revenue stream' },
      ]
    },
    {
      image: '/course/Businesssetup.png',
      title: 'Business Setup',
      items: [
        { title: 'The Foundation:', desc: 'The 4 KEY factors to building your business foundation' },
        { title: 'Building Trust:', desc: 'Learn how to create genuine connections that convert to loyal customers' },
        { title: 'Business Automation:', desc: 'Set up systems that let your business run smoothly while you sleep' },
      ]
    },
    {
      image: '/course/salesandincome.png',
      title: 'Sales & Income Streams',
      items: [
        { title: 'The UGC Course:', desc: 'Master user-generated content to earn through brand partnerships' },
        { title: 'Affiliate Marketing:', desc: 'Build passive income promoting products you love' },
        { title: 'Maintaining Momentum:', desc: 'Keep your customers happy and coming back for more' },
        { title: 'Sales Mastery:', desc: 'Convert followers into customers without feeling salesy' },
        { title: 'Monetizing Mentorship:', desc: 'Create additional income through coaching and consulting' },
      ]
    },
    {
      image: '/course/contentandtools.png',
      title: 'Content & Tools',
      items: [
        { title: 'CapCut Editing:', desc: 'Create professional-looking content with this beginner-friendly editor' },
        { title: 'Canva Essentials:', desc: 'Design beautiful marketing materials with zero design experience' },
        { title: 'The Content Vault:', desc: 'Ready-to-use content with ROI-focused captions for your business' },
        { title: 'Done For You Reels:', desc: '15 fresh digital marketing reels with hooks every single month' },
        { title: 'PLR/MRR Vault:', desc: 'Every product you can resell for 100% profit' },
      ]
    },
  ]

  const brandNewFeatures = [
    'Print on Demand',
    'Course Creation Master Class',
    'TikTok Store Success',
    'Photography Fundamentals',
    'Video Production',
    'Strategic Bundling',
    'YouTube Empire',
    'The Art of Influence',
    'Amazon Monetization',
    'Digital Product Creation',
  ]

  const bonuses = [
    { icon: 'fa-check-circle', title: 'Recorded Training Calls:', desc: 'Library of past coaching calls for on-demand learning' },
    { icon: 'fa-check-circle', title: 'Content Vault:', desc: 'Ready-to-use marketing materials and templates' },
    { icon: 'fa-check-circle', title: 'Private Community Access:', desc: 'Connect with 130,000+ students' },
    { icon: 'fa-check-circle', title: 'Weekly Live Calls:', desc: 'Get direct mentorship and Q&A sessions' },
  ]

  return (
    <section id="courses" className="courses-section courses-dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#fff' }}>What You'll Learn Inside DWA</h2>
          <p className="section-subtitle" style={{ color: '#ccc' }}>Comprehensive training designed to take you from zero to earning.</p>
        </div>

        <div className="courses-grid-new">
          {courses.map((course, index) => (
            <div className="course-card-new" key={index}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <ul>
                  {course.items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Brand New Additions */}
        <div className="brand-new-section">
          <div className="brand-new-header">
            <span className="new-badge">NEW</span>
            <h3>BRAND NEW ADDITIONS: Advanced Growth</h3>
          </div>
          <div className="brand-new-device">
            <img src="/course/brandnew.png" alt="Advanced Growth Modules" />
          </div>
          <div className="brand-new-features">
            <div className="feature-column">
              {brandNewFeatures.slice(0, 5).map((feature, index) => (
                <p key={index}><i className="fas fa-check"></i> {feature}</p>
              ))}
            </div>
            <div className="feature-column">
              {brandNewFeatures.slice(5).map((feature, index) => (
                <p key={index}><i className="fas fa-check"></i> {feature}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="bonus-section-large">
          <div className="bonus-large-content">
            <div className="bonus-large-image">
              <img src="/course/bonus.png" alt="Bonuses and Merch" />
            </div>
            <div className="bonus-large-text">
              <span className="bonus-badge">🎁 INCLUDED FREE</span>
              <h3>Bonuses & Resources</h3>
              <p>When you join DWA, you also get access to our exclusive bonus library:</p>
              <ul>
                {bonuses.map((bonus, index) => (
                  <li key={index}>
                    <i className={`fas ${bonus.icon}`}></i>
                    <strong>{bonus.title}</strong> {bonus.desc}
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.fanbasis.com/agency-checkout/digitalwealthacademy/PNqY4?affiliate=indu9489" 
                className="bonus-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET ACCESS NOW →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
