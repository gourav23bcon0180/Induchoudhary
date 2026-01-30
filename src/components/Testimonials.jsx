import { useRef } from 'react'

function Testimonials() {
  const trackRef = useRef(null)

  const testimonials = Array.from({ length: 12 }, (_, i) => ({
    src: `/Testimonial/${i + 1}.png`,
    alt: 'Student Success'
  }))

  const scrollTestimonials = (direction) => {
    const track = trackRef.current
    if (!track) return
    
    // Pause the animation
    track.style.animation = 'none'
    
    // Get current transform
    const style = window.getComputedStyle(track)
    const matrix = new DOMMatrixReadOnly(style.transform)
    const currentX = matrix.m41
    
    // Calculate scroll amount (one slide width + gap)
    const slideWidth = 405 // 380px slide + 25px gap
    const newX = currentX + (direction * -slideWidth)
    
    // Apply new position
    track.style.transform = `translateX(${newX}px)`
    
    // Resume animation after 3 seconds
    setTimeout(() => {
      if (track) {
        track.style.animation = 'testimonialAutoScroll 40s linear infinite'
      }
    }, 3000)
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Success Stories</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Real results from real students who took the leap.</p>
        </div>

        <div className="testimonial-scroller">
          <button 
            className="testimonial-arrow testimonial-arrow-left" 
            onClick={() => scrollTestimonials(-1)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testimonial-track" ref={trackRef}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <img src={testimonial.src} alt={testimonial.alt} />
              </div>
            ))}
          </div>
          <button 
            className="testimonial-arrow testimonial-arrow-right" 
            onClick={() => scrollTestimonials(1)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
