import Carrousel from '../../Components/Carrousel/Carrousel'
import Collapse from '../../Components/Collapse/Collapse'
import Host from '../../Components/Host/Host'
import Rating from '../../Components/Rating/Rating'
import Tag from '../../Components/Tag/Tag'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Fiche() {
  const idLogement = useParams()
  console.log(idLogement)

  const [ficheAppartments, ficheSetAppartments] = useState([])
  const dataCurrentAppartment = ficheAppartments.find(
    (appartement) => appartement.id === idLogement
  )

  useEffect(() => {
    fetch('data/data.json')
      .then((response) => response.json())
      .then((data) => ficheSetAppartments(data))
      .catch((error) => console.log(error))
  }, [])

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
