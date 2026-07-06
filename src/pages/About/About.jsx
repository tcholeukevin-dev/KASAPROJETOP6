import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import bannerAbout from '../../assets/about-background.png'
import './About.scss'

const VALUES = [
  {
    title: 'Fiabilité',
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de mauvaise foi fera l'objet de sanctions.",
  },
  {
    title: 'Service',
    content: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec notre équipe ou nos hôtes, soit de la meilleure qualité possible.",
  },
  {
    title: 'Sécurité',
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Pour vos déplacements, Kasa vous accompagne aussi bien à l'étranger qu'en France.",
  },
]

function About() {
  return (
    <div className="about">
      <div className="about__banner">
        <Banner image={bannerAbout} />
      </div>
      <section className="about__values">
        {VALUES.map(v => (
          <Collapse key={v.title} title={v.title} content={v.content} />
        ))}
      </section>
    </div>
  )
}

export default About
