
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorS from './components/ErrorS'
import Error from './components/ErrorS'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //para guardar una location
  const [location, setLocation] = useState()
  //para guardar la informacion del input y hacer la petición cuando se hace submit
  const [searchInput, setSearchInput] = useState()
  //para guardar las segerencias de la api
  const [suggestedList, setSuggestedList] = useState()

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
        .then(res => {
          setHasError(false)
          setLocation(res.data)

        })
        .catch(err => setHasError(true))
  },[searchInput])

  const handleSubmit = e =>{
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {

    if(e.target.value === ''){
       return setSuggestedList()
    }

    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))

  }


  return (
    <div className="App">
      <img className='App__img-header' src='https://images3.alphacoders.com/812/812062.png' alt="rickandmorfywalpaper" />
      <h1 className='App__title'>Rick and Morty</h1>
      <form className='App__form' onSubmit={handleSubmit}>
        <input 
          className='form_input'
          id='idLocation'
          placeholder='Enter anther number from 1 to 126' 
          type="text"
          onChange={handleChange} />
        <button className='btn'>Search</button>
        <FilterList 
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      {
        hasError ? 
          <ErrorS /> 
        :
          <>
              <LocationInfo location={location}/>
              <div className='card__container'>
                {
                  location?.residents.map(url =>(
                    <CardResident 
                      key={url}
                    url={url}
                    />
                  ))
                }
              </div>
          </>
      }
    </div>
  )
}

export default App
