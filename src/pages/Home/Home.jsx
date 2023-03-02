import Banner from '../../Components/Banner/Banner'
import { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards'
import home from '../../assets/home.png'

function Home() {
  const [appartments, setAppartments] = useState([])

  useEffect(() => {
    fetch('data/data.json')
      .then((response) => response.json())
      .then((data) => setAppartments(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="miseenpage">
      <Banner image={home} title="Chez vous, partout et ailleurs" />
      <div className="grid">
        {appartments.map((appartment) => (
          <Cards image={appartment.cover} title={appartment.title} />
        ))}
      </div>
    </section>
  )
}

export default Home
