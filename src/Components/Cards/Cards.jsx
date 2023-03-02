import { Link } from 'react-router-dom'

function Cards({ image, title }) {
  return (
    <article className="grid__card">
      <Link className="grid__card__a" to="/fiche">
        <img src={image} alt="Logo" className="grid__card__a__img" />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}

export default Cards
