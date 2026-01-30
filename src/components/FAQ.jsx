function FAQ() {
  const faqs = [
    {
      question: 'What exactly is Digital Wealth Academy?',
      answer: "DWA is your complete digital marketing course, designed for beginners who want to build real income online. You'll learn everything from creating digital products to affiliate marketing, content creation, building automated sales systems, & so much more! Plus, become an affiliate for the fastest growing course and make 85% profits!"
    },
    {
      question: 'Do I have to sell DWA to make money?',
      answer: 'Not at all! While you can start earning immediately by reselling DWA, our course teaches multiple ways to make money online. Many of our students use our strategies to build their own digital product businesses, become affiliate marketers, or grow their existing businesses.'
    },
    {
      question: 'How soon can I start making money?',
      answer: "You can start implementing strategies as soon as you join. With DWA, you could technically make your first sale the same day. However, this isn't a get-rich-quick scheme – your success depends on applying what you learn."
    },
    {
      question: "I'm not tech-savvy. Can I really do this?",
      answer: "Yes! We've designed DWA with complete beginners in mind. Every technical setup has step-by-step instructions, and our community is always there to help if you get stuck."
    },
    {
      question: 'Do I have to show my face to succeed?',
      answer: 'No! We teach multiple strategies for faceless marketing. Many of our successful students run their entire businesses without ever appearing on camera.'
    },
    {
      question: "What's included in my purchase?",
      answer: null,
      list: [
        'Complete DWA course access',
        'Affiliate program (85% profit)',
        'Private community access',
        'Content vault with marketing materials',
        'Live weekly support calls',
        'Lifetime updates and new modules'
      ]
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'Your one-time payment includes everything. There are no mandatory additional purchases or monthly fees.'
    },
    {
      question: 'Can I access DWA from anywhere?',
      answer: 'Yes! As long as you have internet access, you can learn and implement DWA strategies from anywhere in the world. We even offer modules in multiple languages.'
    },
    {
      question: 'What support do I get?',
      answer: "You'll join the DWA community, get access to weekly live calls, and receive regular updates with new content. Plus, if you need me I'm just a message away!"
    }
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-logo">
          <div className="dwa-logo-small">DWA</div>
        </div>
        <h2 className="faq-title">QUESTIONS ABOUT DIGITAL<br />WEALTH ACADEMY</h2>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h4>{faq.question}</h4>
              {faq.answer && <p>{faq.answer}</p>}
              {faq.list && (
                <ul>
                  {faq.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
