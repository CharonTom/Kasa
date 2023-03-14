import Banner from '../../Components/Banner/Banner'
import about from '../../assets/about.png'
import Collapse from '../../Components/Collapse/Collapse'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Apropos() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('data/collapsedata.json').then((res) => setData(res.data)) //requète AXIOS pour prochaine utilisation API
  }, [])

  return (
    <div className="miseenpage">
      <Banner image={about} title="" page={'about'} />
      <section className="section_collapse_about">
        {data.map((dataCollapse, index) => (
          <Collapse
            key={`${dataCollapse}-${index}`}
            contentText={dataCollapse.aboutText}
            headerText={dataCollapse.aboutTitle}
            page={'about'}
          />
        ))}
      </section>
    </div>
  )
}

export default Apropos
