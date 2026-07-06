import './Banner.scss'

function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && <span className="banner__text">{text}</span>}
    </div>
  )
}

export default Banner
