
type ServiceCardProps = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon">{icon}</span>
        <span className="service-number">{number}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <a href="#contato" className="service-link">
        Saiba mais <span>↗</span>
      </a>
    </article>
  );
}
