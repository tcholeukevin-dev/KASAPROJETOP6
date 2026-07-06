import './Rating.scss'

function Rating({ rating }) {
  const value = parseInt(rating, 10)

  return (
    <div className="rating" role="img" aria-label={`Note : ${value} sur 5`}>
      {[1, 2, 3, 4, 5].map(n => (
        <svg
          key={n}
          className={`rating__star${n <= value ? ' rating__star--filled' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ))}
    </div>
  )
}

export default Rating
