function Who() {
  const cards = [
    {
      icon: 'fa-user-graduate',
      title: 'Complete Beginners',
      text: 'Starting from zero with no prior experience in digital marketing or online business.'
    },
    {
      icon: 'fa-briefcase',
      title: 'Working Professionals',
      text: 'Looking to build a side income or transition into full-time digital work.'
    },
    {
      icon: 'fa-home',
      title: 'Stay-at-Home Parents',
      text: 'Wanting flexible income while managing family responsibilities.'
    },
    {
      icon: 'fa-globe',
      title: 'Aspiring Digital Nomads',
      text: 'Dreaming of location-independent income and lifestyle freedom.'
    }
  ]

  return (
    <section id="who" className="who-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Is This For You?</span>
          <h2 className="section-title">Who Is It Really For?</h2>
        </div>

        <div className="who-grid">
          {cards.map((card, index) => (
            <div className="who-card" key={index}>
              <div className="who-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
