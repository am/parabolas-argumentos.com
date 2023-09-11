import React from "react";

import ServiceListing from "../components/ServiceListing.js";

const Index = () => (
  <React.Fragment>
    <header className="header">
      <div className="navbar">
        <img
          className="navbar-logo"
          src="/img/logo.svg"
          alt="Parabolas & Argumentos"
        />
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a
                className="link-button link-button--active"
                href="mailto:angela@parabolas-argumentos.com?subject=Our project"
                target="_blank"
              >
                conctact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-image-container">
        <img
          className="header-image"
          alt="Windmills - Azores - Portugal"
          src="/img/IMG_20200805_211416.jpg"
        />
        <h1 className="header-text">
          <b>We are fond</b>
          <br />
          of thoughtful garments
        </h1>
      </div>
    </header>

    <main>
      <section className="content">
        <p className="big-text">
          We are a textile production company located in Esposende. Behind the
          label Made In Portugal, we provide a responsible service, ensuring
          that our work meets excellence in thinking and doing.
        </p>
        <p className="normal-text">
          We can work together in different stages. Designing your brand visual
          content, improving the process with our consulting sessions, sourcing
          the best fabrics or keeping the highest standards of your collection
          development.
        </p>
        <ul className="services-list">
          <li className="services-item">
            <ServiceListing
              image="/img/comp_2_B.jpg"
              title="Branding & Design"
              services={[
                "Identity Design",
                "Brand Development",
                "Packaging Design",
                "Set Design and Photography",
                "Website Design"
              ]}
            />
          </li>
          <li className="services-item">
            <ServiceListing
              image="/img/fabric_crop.jpg"
              title="Textile Consulting"
              services={[
                "Market analysis",
                "Analysis of existing product-related errors",
                "Textile production strategy (research on textile technologies and processes, materials, suppliers, timelines, budgets)"
              ]}
            />
          </li>
          <li className="services-item">
            <ServiceListing
              image="/img/hangtag_crop.jpg"
              title="Production"
              services={[
                "Sourcing",
                "Tech Specs Sheets",
                "Sampling",
                "Monitoring",
                "Quality control",
                "Delivery"
              ]}
            />
          </li>
        </ul>
      </section>
      <section className="content">
        <div className="gallery">
          <img
            className="gallery-image gallery-image--right"
            alt=""
            src="/img/michael-frattaroli-QGByusZU0ow-unsplash.jpg"
          />
          <img
            className="gallery-image gallery-image--left"
            alt=""
            src="/img/priscilla-du-preez-638157-unsplash.jpg"
          />
        </div>
      </section>
      <section className="content">
        <a
          className="contact-button normal-text"
          href="mailto:angela@parabolas-argumentos.com?subject=Our project"
          target="_blank"
        >
          Tell us about your project
        </a>
      </section>
    </main>
    <footer className="footer">
      <div className="information">
        <a
          href="https://www.instagram.com/parabolas_argumentos/"
          target="_blank"
          className="instagram-link"
        >
          <img src="/img/instagram.svg" alt="Instagram" />
        </a>
      </div>
      <div className="information">
        <p className="information-text">+351 916 116 221</p>
        <p className="information-text">angela@parabolas-argumentos.com</p>
      </div>
      <div className="information">
        <p className="information-text">Travessa Manuel Boaventura 42</p>
        <p className="information-text">4740-305 Esposende</p>
        <p className="information-text">
          <strong>Portugal</strong>
        </p>
      </div>
    </footer>
  </React.Fragment>
);

export default Index;
