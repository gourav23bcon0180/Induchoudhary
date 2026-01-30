function Story() {
  return (
    <section id="story" className="story-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">My Journey</span>
        </div>
        
        <div className="story-content">
          <div className="story-grid">
            <div className="story-image">
              <img src="/pics/top.jpeg" alt="Indu Choudhary" style={{ width: '100%', height: 'auto', maxHeight: '650px', objectFit: 'cover', borderRadius: '12px' }} />
            </div>

            <div className="story-right">
              <div className="quote-box" style={{ backgroundColor: '#dededc' }}>
                <p className="quote-text" style={{ color: '#38070d' }}>
                  "Can someone like me really change their life with digital marketing?"
                </p>
              </div>

              <div className="story-paragraphs">
                <p className="story-paragraph">
                  That was the question running through my mind when I was completely broke, confused, and just trying to survive. I had no roadmap, no guidance, and no skills - only the fear of missing out on opportunities I didnt even understand yet. I watched people build income online and couldnt tell what was real and what wasnt. I was skeptical, unsure, and overwhelmed - but I took one leap of faith and decided to learn.
                </p>

                <p className="story-paragraph">
                  At just 17, I enrolled in a learning platform that taught me basic digital skills. Those skills helped me start earning, and within the first six months, I had made over <strong>$10,000</strong>. More than the money, it changed how I saw myself. I became the first woman in my family to earn that kind of income, and that moment pushed me to go deeper - mastering digital marketing, affiliate marketing, content creation, and eventually building my own products.
                </p>

                <p className="story-paragraph">
                  Today, I work only a few hours a day using my phone. Im present. I spend time with my family. Im no longer operating in survival mode - Im building with intention. Through every high and low, one truth became clear: <strong>success doesnt come from luck or hustle alone, it comes from the right skills, the right systems, and the right support.</strong>
                </p>
              </div>

              <h3 className="story-subheading">That's why I created Digital Wealth Academy - to give you everything you need in one place.</h3>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
