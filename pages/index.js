import "../styles/reset.scss";
import "../styles/styles.scss";

const Index = () => (
  <div className="container">
    <h1>
      <img
        className="container-logo"
        src="/static/img/logo.svg"
        alt="Parabolas & Argumentos"
      />
    </h1>
    <div className="container-information">
      <p className="information-text">+351 916 116 221 </p>
      <p className="information-text">Travessa Manuel Boaventura 42</p>
      <p className="information-text">4740-305 Esposende</p>
      <p className="information-text">
        <strong>Portugal</strong>
      </p>
      <a className="email" href="mailto:angela@parabolas-argumentos.com">
        contact
      </a>
    </div>
  </div>
);

export default Index;
