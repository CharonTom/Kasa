// import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'

function Grid() {
  // const [appartments, setAppartments] = useState([])

  // useEffect(() => {
  //   fetch('data.json')
  //     .then((response) => response.json())
  //     .then((data) => setAppartments(data))
  //     .catch((error) => console.log(error))
  // }, [])

  return (
    <section>
      <Cards />
    </section>
  )
}

export default Grid
