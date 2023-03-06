function Cards({ image, title }) {
  return (
    <article className="grid-card">
      <img src={image} alt="Logo" className="grid-card__img" />
      <h2>{title}</h2>
    </article>
  )
}

export default Cards
