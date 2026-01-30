function Thrives() {
  const items = [
    {
      title: 'The Busy Parent:',
      text: "You're dreaming of more time with your kids and financial freedom to give them the life they deserve. DWA shows you how to build income around your family schedule."
    },
    {
      title: 'The Side Hustler:',
      text: "You've tried different online businesses but nothing's clicked. You're ready for proven strategies that actually work, with a community to support your growth."
    },
    {
      title: 'The 9-5 Escapee:',
      text: "You know you're meant for more than living paycheck to paycheck. You want the skills to build reliable income streams that could replace your salary."
    },
    {
      title: 'The Privacy-First Creator:',
      text: 'You want to make money online but prefer staying behind the scenes. DWA teaches you multiple ways to succeed without showing your face.'
    },
    {
      title: 'The Digital Beginner:',
      text: "Tech makes you nervous but you're willing to learn. DWA was created with beginners in mind. Everything inside is step-by-step, so even the least techy person can make it work!"
    }
  ]

  return (
    <section id="thrives" className="thrives-section">
      <div className="container">
        <div className="thrives-layout">
          <div className="thrives-image">
            <img src="/pics/bottom.jpeg" alt="Who Thrives Inside DWA" />
          </div>
          <div className="thrives-content">
            <p className="thrives-eyebrow">Digital marketing transforms lives, but it's not for everyone.</p>
            <h2 className="thrives-title">HERE'S WHO THRIVES<br />INSIDE DWA:</h2>
            
            <div className="thrives-list">
              {items.map((item, index) => (
                <div className="thrives-item" key={index}>
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.fanbasis.com/agency-checkout/digitalwealthacademy/PNqY4?affiliate=indu9489" 
              className="thrives-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEE YOURSELF HERE? LET'S GO →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thrives
