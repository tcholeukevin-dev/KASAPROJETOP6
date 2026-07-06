import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <svg
          className={`collapse__arrow${isOpen ? ' collapse__arrow--open' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="white"/>
        </svg>
      </button>
      <div className={`collapse__content${isOpen ? ' collapse__content--open' : ''}`}>
        <div className="collapse__body">
          {Array.isArray(content) ? (
            <ul className="collapse__list">
              {content.map((item, i) => (
                <li key={i} className="collapse__item">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="collapse__text">{content}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collapse