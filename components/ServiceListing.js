const ServiceListing = ({ image, title, services }) => (
  <div className="service-listing">
    <img className="service-listing_image" alt="" src={image} />
    <h2 className="big-text">{title}</h2>
    <ul className="services normal-text">
      {services.map((service, index) => (
        <li className="normal-text" key={`service-${title}-${index}`}>{service}</li>
      ))}
    </ul>
  </div>
);

export default ServiceListing;
