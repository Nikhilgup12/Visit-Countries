import {Component} from 'react'
import VisitCountries from './components/VisitCountries'
import CountryItem from './components/CountryItem'
import './App.css'

//This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  state = {countryList: [], initialList: initialCountriesList}

  componentDidMount() {
    // Initialize countryList with countries where isVisited is true
    const visitedCountries = initialCountriesList.filter(
      country => country.isVisited,
    )
    this.setState({countryList: visitedCountries})
  }

  onClickVisitButton = country => {
    this.setState(prevState => {
      const updatedInitialList = prevState.initialList.map(each => {
        if (each.id === country.id) {
          return {...each, isVisited: true}
        }
        return each
      })

      // Check if the country is already in countryList
      const isCountryAlreadyVisited = prevState.countryList.some(
        item => item.id === country.id,
      )

      // If the country is not already in countryList, insert it
      if (!isCountryAlreadyVisited) {
        // Find the index to insert the country in countryList
        const countryIndex = prevState.initialList.findIndex(
          item => item.id === country.id,
        )
        const insertIndex = prevState.countryList.findIndex(item => {
          const listIndex = prevState.initialList.findIndex(
            listItem => listItem.id === item.id,
          )
          return listIndex > countryIndex
        })

        const updatedCountryList = [...prevState.countryList]
        updatedCountryList.splice(
          insertIndex === -1 ? updatedCountryList.length : insertIndex,
          0,
          country,
        )

        return {
          initialList: updatedInitialList,
          countryList: updatedCountryList,
        }
      }

      return {initialList: updatedInitialList}
    })
  }

  onRemoveCountry = id => {
    this.setState(prevState => {
      const updatedInitialList = prevState.initialList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: false}
        }
        return each
      })

      const updatedCountryList = prevState.countryList.filter(
        each => each.id !== id,
      )

      return {
        initialList: updatedInitialList,
        countryList: updatedCountryList,
      }
    })
  }

  // onClickVisitButton = country => {
  //   const {initialList} = this.state
  //   this.setState(prevState => {
  //     const updateList = initialList.map(each => {
  //       if (each.id === country.id) {
  //         return {...each, isVisited: true}
  //       }
  //       return each
  //     })
  //     return {initialList: updateList}
  //   })

  //   this.setState(prevState => {
  //     const {countryList} = prevState
  //     const countryIndex = initialList.findIndex(item => item.id === country.id)

  //     // If the country is not found in the initialCountriesList, return prevState
  //     if (countryIndex === -1) {
  //       return null
  //     }

  //     // Find the index in countryList where the new country should be inserted
  //     let insertIndex = countryList.length

  //     for (let i = 0; i < countryList.length; i++) {
  //       const listIndex = initialList.findIndex(
  //         item => item.id === countryList[i].id,
  //       )
  //       if (listIndex > countryIndex) {
  //         insertIndex = i
  //         break
  //       }
  //     }

  //     // Create a new array with the new country inserted at the appropriate position
  //     const updatedCountryList = [
  //       ...countryList.slice(0, insertIndex),
  //       country,
  //       ...countryList.slice(insertIndex),
  //     ]

  //     return {countryList: updatedCountryList}
  //   })
  // }

  // onRemoveCountry = id => {
  //   const {initialList} = this.state
  //   this.setState(prevState => {
  //     const updateList = initialList.map(each => {
  //       if (each.id === id) {
  //         return {...each, isVisited: false}
  //       }
  //       return each
  //     })
  //     return {initialList: updateList}
  //   })

  //   this.setState(prevState => ({
  //     countryList: prevState.countryList.filter(each => each.id !== id),
  //   }))
  // }

  render() {
    const {countryList, initialList} = this.state
    return (
      <div className="visit-country-main-container">
        <div className="visit-country-container">
          <h1 className="country-main-heading"> Countries </h1>
          <ul className="visit-countryList-container">
            {initialList.map(each => (
              <VisitCountries
                country={each}
                key={each.id}
                onClickVisitButton={this.onClickVisitButton}
              />
            ))}
          </ul>
          <h1 className="country-main-heading"> Visited Countries </h1>
          {countryList.length === 0 ? (
            <div>
              <p className="no-country-para"> No Countries Visited Yet!</p>
            </div>
          ) : (
            <ul className="country-list-container">
              {countryList.map(each => (
                <CountryItem
                  countryItem={each}
                  key={each.id}
                  onRemoveCountry={this.onRemoveCountry}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
