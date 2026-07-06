import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img
        src={logement.cover}
        alt={logement.title}
        className="card__img"
      />
      <div className="card__gradient" aria-hidden="true" />
      <span className="card__title">{logement.title}</span>
    </Link>
  )
}

export default Card
