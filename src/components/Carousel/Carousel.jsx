import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0)
  const total = pictures ? pictures.length : 0

  if (!pictures || total === 0) return null

  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <div className="carousel">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1} sur ${total}`}
        className="carousel__img"
      />
      {total > 1 && (
        <>
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={prev}
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 80" fill="none">
              <path d="M45 2 L5 40 L45 78" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={next}
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 80" fill="none">
              <path d="M2 2 L42 40 L2 78" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="carousel__counter">{index + 1}/{total}</span>
        </>
      )}
    </div>
  )
}

export default Carousel
