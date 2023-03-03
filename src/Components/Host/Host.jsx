import home from '../../assets/home.png'

function Host() {
  return (
    <div className="host">
      <p className="host__name">Alexander Dumas</p>
      <img className="host__portrait" src={home} alt="portrait" />
    </div>
  )
}

export default Host
