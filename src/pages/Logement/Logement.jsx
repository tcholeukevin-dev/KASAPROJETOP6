import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import './Logement.scss'

function Logement() {
  const { id } = useParams()
  const logement = logements.find(l => l.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  const hostFirstName = logement.host.name.split(' ')[0]
  const hostLastName = logement.host.name.split(' ').slice(1).join(' ')

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement__info">
        <div className="logement__meta">
          <div className="logement__meta-left">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <div className="logement__tags">
              {logement.tags.map((tag, i) => (
                <span key={i} className="logement__tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="logement__meta-right">
            <div className="logement__host">
              <div className="logement__host-name">
                <span>{hostFirstName}</span>
                <span>{hostLastName}</span>
              </div>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="logement__host-avatar"
              />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>

        <div className="logement__collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  )
}

export default Logement
