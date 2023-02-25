import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'

function Grid() {
  const [appartments, setAppartments] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => setAppartments(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="grid">
      {appartments.map((appartment) => (
        <Cards image={appartment.cover} title={appartment.title} />
      ))}
    </div>
  )
}

export default Grid
