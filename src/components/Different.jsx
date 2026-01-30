function Different() {
  const features = [
    {
      icon: 'fa-check-circle',
      title: 'TRUE TIME FREEDOM',
      text: "Build your business around your ideal schedule. Whether that's working 2-3 hours from home or scaling while you travel - you decide when and how you work. No more missing life's precious moments."
    },
    {
      icon: 'fa-users',
      title: 'THE DWA COMMUNITY',
      text: "Join over 130,000+ students inside our thriving Skool community. Get daily inspiration, share wins, and connect with others who are building their digital empires. Never feel stuck or alone on your journey - there's always someone ready to help."
    },
    {
      icon: 'fa-percentage',
      title: 'AFFILIATE PROGRAM FOR 85% PROFIT',
      text: "Start earning immediately with DWA's affiliate program. You'll get the ability to sell Digital Wealth Academy for 85% profit. That means your $497 investment could pay for itself - fast."
    },
    {
      icon: 'fa-infinity',
      title: 'LIFETIME MEMBERSHIP & UPDATES',
      text: "Digital marketing evolves fast, that's why we're constantly adding new content to keep you ahead. We've recently added 11 new modules and you'll get access to every future update at no extra cost. Your one-time investment keeps growing in value."
    },
    {
      icon: 'fa-folder-open',
      title: 'CONTENT VAULT',
      text: 'Get instant access to our marketing material. Inside the content vault you will find done for you content that you can use right away for your business.'
    },
    {
      icon: 'fa-headset',
      title: 'LIVE SUPPORT & TRAINING',
      text: "Join our regular live calls for real-time support, strategy sessions, and Q&A. Can't make it live? Access our complete library of recorded training calls anytime."
    }
  ]

  return (
    <section id="different" className="different-section-new">
      <div className="container">
        <div className="different-layout">
          <div className="different-content">
            <p className="different-eyebrow">What makes DWA different?</p>
            <h2 className="different-title">EVERYTHING</h2>
            
            <div className="different-features">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="different-image">
            <img src="/pics/last.jpeg" alt="More than a course" style={{ width: '60%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Different
