import { useState } from 'react'

function Collapse({ headerText, contentText }) {
  const [collapseOpen, setCollapseOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__header__text">{headerText}</p>
        <div
          className={`collapse__header__arrow ${collapseOpen}`}
          onClick={() => setCollapseOpen(!collapseOpen)}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </div>
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
