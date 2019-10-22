import React from "react";

import "../styles/reset.scss";
import "../styles/styles.scss";
import ServiceListing from "../components/ServiceListing.js";

const Index = () => (
  <React.Fragment>
    <header className="header">
      <div className="navbar">
        <img
          className="navbar-logo"
          src="/static/img/logo.svg"
          alt="Parabolas & Argumentos"
        />
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a
                className="link-button link-button--active color-white"
                href="/"
              >
                services
              </a>
            </li>
            <li className="menu-item">
              <a className="link-button color-white" href="/contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-image-container">
        <img
          className="header-image"
          alt=""
          src="https://picsum.photos/seed/header/1280/460?blur=8"
        />
        <h1 className="header-text color-white">
          We are fond of thoughtful garments
        </h1>
      </div>
    </header>

    <main>
      <section className="content about-section">
        <p>
          We are a textile production company located in Esposende. Behind the
          label Made In Portugal, we provide a responsible service, ensuring
          that our work meets excellence in thinking and doing.
        </p>
        <p>
          We can work together in different stages. Designing your brand visual
          content, improving the process with our consulting sessions, sourcing
          the best fabrics or keeping the highest standards of your collection
          development.
        </p>
        <ul className="services-list">
          <li className="services-item">
            <ServiceListing
              image="https://picsum.photos/seed/1/400/600"
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
              image="https://picsum.photos/seed/2/400/600"
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
              image="https://picsum.photos/seed/3/400/600"
              title="Production Management"
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
      <div className="header-image-container">
        <img
          className="header-image"
          alt=""
          src="https://picsum.photos/seed/header/1280/260?blur=8"
        />
      </div>
      <section className="content">
        <div className="gallery">
          <img
            className="gallery-left"
            alt=""
            src="https://picsum.photos/seed/gallery1/300/400"
          />
          <img
            className="gallery-right"
            alt=""
            src="https://picsum.photos/seed/gallery2/300/400"
          />
          <img
            className="gallery-full"
            alt=""
            src="https://picsum.photos/seed/gallery3/600/300"
          />
        </div>
      </section>
      <section className="content">
        <a href="mailto:angela@parabolas-argumentos.com">
          Tell us about your project
        </a>
      </section>
    </main>
  </React.Fragment>
);

export default Index;
