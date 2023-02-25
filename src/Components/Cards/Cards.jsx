function Cards({ image, title }) {
  return (
    <article className="grid__card">
      <img src={image} alt="Logo" className="grid__card__img" />
      <h2>{title}</h2>
    </article>
  )
}

export default Cards
