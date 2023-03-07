import Banner from '../../Components/Banner/Banner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../Components/Cards/Cards'
import home from '../../assets/home.png'
import { Link } from 'react-router-dom'

function Home() {
  const [appartments, setAppartments] = useState([])

  useEffect(() => {
    axios.get('data/data.json').then((res) => setAppartments(res.data)) //requète AXIOS pour prochaine utilisation API
  }, [])

  return (
    <section className="miseenpage">
      <Banner image={home} title="Chez vous, partout et ailleurs" />
      <div className="grid">
        {appartments.map((appartment) => (
          <Link
            key={appartment.id}
            className="link-card"
            to={`${appartment.id}`}
          >
            <Cards image={appartment.cover} title={appartment.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
