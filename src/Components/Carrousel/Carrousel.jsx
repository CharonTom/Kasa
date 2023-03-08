//import { useEffect, useState } from 'react'
import home from '../../assets/home.png'

function Carrousel() {
  // const [appartments, setAppartments] = useState([])

  // useEffect(() => {
  //   fetch('data/data.json')
  //     .then((response) => response.json())
  //     .then((data) => setAppartments(data))
  //     .catch((error) => console.log(error))
  // }, [])

  return (
    <div className="section__carrousel">
      <img src={home} alt="Carrousel" />
      <i class="fa-sharp fa-solid fa-chevron-left"></i>
      <i class="fa-sharp fa-solid fa-chevron-right"></i>
    </div>
  )
}

export default Carrousel
