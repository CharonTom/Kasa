import Banner from '../../Components/Banners/BannerHome'
import { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards'

function Home() {
  const [appartments, setAppartments] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => setAppartments(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="miseenpage">
      <Banner />
      <div className="grid">
        {appartments.map((appartment) => (
          <Cards image={appartment.cover} title={appartment.title} />
        ))}
      </div>
    </section>
  )
}

export default Home
