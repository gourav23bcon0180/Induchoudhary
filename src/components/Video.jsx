function Video() {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Watch and Learn</span>
          <h2 className="section-title">My Presentation Video</h2>
          <p className="section-subtitle">See how I built my digital income journey and how you can too.</p>
        </div>
        
        <div className="video-wrapper">
          <div className="video-container">
            <a 
              href="https://www.youtube.com/watch?v=lB06s5L6vYo" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
            >
              <img 
                src="https://img.youtube.com/vi/lB06s5L6vYo/maxresdefault.jpg" 
                alt="Presentation Video" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div className="play-overlay">
                <button className="play-btn" type="button">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </a>
          </div>
          <div className="video-cta">
            <a 
              href="https://www.fanbasis.com/agency-checkout/digitalwealthacademy/PNqY4?affiliate=indu9489" 
              className="cta-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Start Your Journey Today</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
