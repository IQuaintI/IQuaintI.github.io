import "../css/Card.scss";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default Card;
