import { useState } from 'react'

function Collapse({ headerText, contentText }) {
  const [collapseOpen, setCollapseOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__header__text">{headerText}</p>

        <i
          onClick={() => setCollapseOpen(!collapseOpen)}
          className="fa-solid fa-chevron-down"
        ></i>
      </div>

      {collapseOpen && (
        <div className="collapse__content">
          <p>{contentText}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
