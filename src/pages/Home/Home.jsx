import logements from '../../data/logements.json'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import bannerHome from '../../assets/background-banner.png' 
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
      </div>
      <section className="home__gallery">
        <div className="home__grid">
          {logements.map(logement => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
