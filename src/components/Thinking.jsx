function Thinking() {
  const cards = [
    {
      number: 1,
      title: "You're Not Confused - You're Just Careful",
      text: "If you've tried things before or seen too many promises online, hesitation makes sense. Wanting clarity before you commit isn't weakness - it's self-respect. The goal isn't to rush into something new, but to understand what actually works."
    },
    {
      number: 2,
      title: "Imagine Where You'll Be If Nothing Changes",
      text: "A year from now will arrive whether you act or not. The real question is whether you'll still be searching for answers - or grateful that you chose to learn a skill that gave you stability, confidence, and control over your income."
    },
    {
      number: 3,
      title: "Skills Don't Lock You In - They Set You Free",
      text: "Learning digital skills doesn't limit you to one path. It gives you options - to work online, earn globally, build at your own pace, and adapt as life changes. Skills stay with you long after trends fade."
    },
    {
      number: 4,
      title: "You Don't Have to Be Ready - Just Willing",
      text: "No one starts fully confident. Readiness comes after you begin, not before. What matters isn't having everything figured out - it's choosing to stop waiting for the perfect time."
    }
  ]

  return (
    <section id="thinking" className="thinking-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Lets Talk</span>
          <h2 className="section-title">Still Thinking If You<br />Should Do This?</h2>
        </div>

        <div className="thinking-grid">
          {cards.map((card) => (
            <div className="thinking-card" key={card.number}>
              <div className="thinking-number">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Thinking
