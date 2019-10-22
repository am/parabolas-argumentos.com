const ServiceListing = ({ image, title, services }) => (
  <div className="service-listing">
    <img className="service-listing_image" alt="" src={image} />
    <h2>{title}</h2>
    <ul className="services">
      {services.map((service, index) => (
        <li key={`service-${title}-${index}`}>{service}</li>
      ))}
    </ul>
  </div>
);

export default ServiceListing;
