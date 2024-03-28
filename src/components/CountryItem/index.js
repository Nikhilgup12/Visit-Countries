import './index.css'

const CountryItem = props => {
  const {countryItem} = props
  const {imageUrl, name, id} = countryItem
  const onRemoveBtn = () => {
    const {onRemoveCountry} = props
    onRemoveCountry(id)
  }
  return (
    <>
      <li className="country-item">
        <img src={imageUrl} className="country-image" />
        <div className="country-name-container">
          <h1 className="country-name"> {name} </h1>
          <button className="country-remove-btn" onClick={onRemoveBtn}>
            {' '}
            Remove{' '}
          </button>
        </div>
      </li>
    </>
  )
}

export default CountryItem
