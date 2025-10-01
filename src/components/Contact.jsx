function Contact() {
  return (
    <section
      id="contact"
      className="section-style mb-16"
      aria-labelledby="contact-title"
    >
      <div>
        <h2 id="contact-title" className="h2-style">
          Get in touch
        </h2>
        <div className="ml-3 h-[1px] border-0 bg-Primary w-[172px] md:w-[216px]"></div>
      </div>
      <div className="mt-6 lg:w-3/4">
        <p className="p-style">
          Want to know more, check out my resume, or collaborate on something
          amazing? Let’s connect. Reach me at &nbsp;
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=winniewaiguru@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-element text-Secondary underline decoration-1"
          >
            Winfred Waiguru's Email
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
