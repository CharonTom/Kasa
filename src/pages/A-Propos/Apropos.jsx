import Banner from '../../Components/Banner/Banner'
import about from '../../assets/about.png'
import Collapse from '../../Components/Collapse/Collapse'

function Apropos() {
  return (
    <div className="miseenpage">
      <Banner image={about} title="" />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
    </div>
  )
}

export default Apropos
