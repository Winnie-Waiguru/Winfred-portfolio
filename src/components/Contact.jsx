function Contact() {
  return (
    <section id="contact" className="section-style mb-16">
      <div>
        <h2 className="h2-style">Get in touch</h2>
        <div className="ml-3 h-[1px] border-0 bg-Primary w-[172px] md:w-[216px]"></div>
      </div>
      <div className="mt-6 lg:w-3/4">
        <p className="p-style">
          Curious to know more, see my resume, or collaborate on something
          amazing? Let’s connect. Contact me at: &nbsp;
          <a
            href="mailto:winniewaiguru@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Winfred,%0D%0A%0D%0AI’d%20like%20to%20connect..."
            className="text-Secondary underline decoration-1"
          >
            Winfred's Gmail
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
