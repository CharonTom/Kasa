function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
