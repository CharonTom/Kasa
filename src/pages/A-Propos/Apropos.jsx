import Banner from '../../Components/Banner/Banner'
import about from '../../assets/about.png'
import Collapse from '../../Components/Collapse/Collapse'
import { useEffect, useState } from 'react'

function Apropos() {
  const [dataCollapses, setDataCollapse] = useState([])

  useEffect(() => {
    fetch('data/collapsedata.json')
      .then((response) => response.json())
      .then((data) => setDataCollapse(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="miseenpage">
      <Banner image={about} title="" />
      <section className="section_collapse_about">
        {dataCollapses.map((dataCollapse, index) => (
          <Collapse
            key={`${dataCollapse}-${index}`}
            contentText={dataCollapse.aboutText}
            headerText={dataCollapse.aboutTitle}
          />
        ))}
      </section>
    </div>
  )
}

export default Apropos
