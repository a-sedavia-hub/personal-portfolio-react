function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-content">
        <span className="eyebrow">GET IN TOUCH</span>
        <h2>Let's Connect!</h2>

        <p>
          Interested in collaborating or discussing opportunities? Feel free to
          reach out.
        </p>

        <div className="social-links">
          <a href="mailto:alvhir.sedavia@cvsu.edu.ph" aria-label="Email">
            <img src="/images/footer/email-logo.png" alt="Email" />
          </a>
          <a
            href="https://github.com/a-sedavia-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/images/footer/github-logo.png" alt="GitHub" />
          </a>
          <a
            href="https://www.facebook.com/asedavia.21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/images/footer/facebook-logo.png" alt="Facebook" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Alvhir Sedavia. All rights reserved.</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}
export default Contact;
