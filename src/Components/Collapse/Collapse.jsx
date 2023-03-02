import { useState } from 'react'

function Collapse() {
  const [collapseOpen, setCollapseOpen] = useState(false)

  return collapseOpen ? (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__header__text">coucou</p>
        <button
          onClick={() => setCollapseOpen(false)}
          className="collapse__header__button"
        >
          &lt;
        </button>
      </div>
      <div className="collapse__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quas! Est consequatur, enim labore esse nulla expedita laborum eveniet
          recusandae nostrum nobis eum cum voluptates dolor non maxime magnam!
          Praesentium.
        </p>
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__header__text">coucou</p>
        <button
          onClick={() => setCollapseOpen(true)}
          className="collapse__header__button"
        >
          &lt;
        </button>
      </div>
    </div>
  )
}

export default Collapse