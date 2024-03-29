import './index.css'

const VisitCountries = props => {
  const {country} = props
  const {id, name, isVisited} = country

  const isVisit = isVisited ? 'Visited' : 'Visit'
  const visitClass = isVisited ? 'visited-btn' : 'visit-btn'

  const onClickButton = () => {
    const {onClickVisitButton} = props
    onClickVisitButton(country)
  }

  return (
    <>
      <li className="visit-country-list" key={id}>
        <div className="country-visit-check">
          <h1 className="country-name"> {name} </h1>
          <button className={visitClass} onClick={onClickButton} type="button">
            {isVisit}
          </button>
        </div>
      </li>
    </>
  )
}

export default VisitCountries
