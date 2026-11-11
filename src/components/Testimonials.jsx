function Testimonials() {
  const testimonials = [
    {
      message:
        "Who's ready to die for this mission? I am! But you know, I'm cheating.",
      person: "Clove",
      role: "Controller",
    },
    {
      message: "Oh, I'm hungry. Anyone hungry? Lunch on Brimstone after this!",
      person: " Jett",
      role: "Duelist",
    },
    {
      message:
        "Five on five? I prefer one on one. But don't worry, this is good too.",
      person: "Iso",
      role: "Duelist",
    },
  ];

  return (
    <section className="section testimonials">
      <div className="section-heading">
        <span className="eyebrow">FEEDBACK</span>
        <h2>Testimonials</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.person}>
            <span className="quote-mark">“</span>
            <p>{item.message}</p>
            <h3>{item.person}</h3>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
