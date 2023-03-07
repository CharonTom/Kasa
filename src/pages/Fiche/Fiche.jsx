import Carrousel from '../../Components/Carrousel/Carrousel'
import Collapse from '../../Components/Collapse/Collapse'
import Host from '../../Components/Host/Host'
import Rating from '../../Components/Rating/Rating'
import Tag from '../../Components/Tag/Tag'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Fiche() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`data/data.json`).then((res) => setData(res.data)) //requète AXIOS pour prochaine utilisation API
  }, [])
  console.log()
  console.log(data)

  return (
    <div className="miseenpage">
      <Carrousel />
      <section className="section_undercarrousel">
        <div>
          <h1>{'Title Cozy Loft on the canal saint-martin'}</h1>
          <p>{'Location Paris blabla'}</p>
          <div className="section_tag">
            <Tag tag={'coucou'} />
          </div>
        </div>
        <div>
          <Host />
          <Rating />
        </div>
      </section>
      <section className="section_collapse_fiche">
        <Collapse contentText={'coucou'} headerText={'coucou'} />
        <Collapse contentText={'coucou'} headerText={'coucou'} />
      </section>
    </div>
  )
}

export default Fiche
