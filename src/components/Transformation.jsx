import { useEffect, useRef } from 'react'

function Transformation() {
  const trackRef = useRef(null)

  const photos = [
    { src: '/pics/1.jpg', alt: 'Transformation 1' },
    { src: '/pics/I16A5765.jpg', alt: 'Transformation 2' },
    { src: '/pics/IMG_0410.jpg', alt: 'Transformation 3' },
    { src: '/pics/IMG_0596.jpg', alt: 'Transformation 4' },
    { src: '/pics/IMG_0967.jpg', alt: 'Transformation 5' },
    { src: '/pics/IMG_0995.jpg', alt: 'Transformation 6' },
    { src: '/pics/IMG_5218.jpg', alt: 'Transformation 7' },
    { src: '/pics/IMG_5909.jpg', alt: 'Transformation 8' },
    { src: '/pics/IMG_5954.jpg', alt: 'Transformation 9' },
    { src: '/pics/IMG_6268.jpg', alt: 'Transformation 10' },
    { src: '/pics/IMG_6306.jpg', alt: 'Transformation 11' },
    { src: '/pics/IMG_9355.JPG', alt: 'Transformation 12' },
  ]

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.style.animation = 'none'
      trackRef.current.scrollLeft -= 320
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.animation = 'scroll 30s linear infinite'
        }
      }, 100)
    }
  }

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.style.animation = 'none'
      trackRef.current.scrollLeft += 320
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.animation = 'scroll 30s linear infinite'
        }
      }, 100)
    }
  }

  return (
    <section id="transformation" className="transformation-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Real Results</span>
          <h2 className="section-title">How Life Changed</h2>
          <p className="section-subtitle">A glimpse into the transformation journey</p>
        </div>
        
        <div className="photo-scroller">
          <div className="photo-track" ref={trackRef}>
            {[...photos, ...photos].map((photo, index) => (
              <div className="photo-slide" key={index}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="scroller-nav">
          <button className="scroll-btn prev-btn" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn next-btn" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Transformation
